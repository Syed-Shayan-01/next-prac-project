import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [Cart, setCart] = useState({});
  const [SubTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("This is my Shopping Cart");
    try {
      if (localStorage.getItem("Cart")) {
        setCart(JSON.parse(localStorage.getItem("Cart")));
      }
    } catch (error) {
      console.error({ message: error });
      localStorage.clear();
    }
  }, []);
  const saveCart = (newCart) => {
    localStorage.setItem("Cart", JSON.stringify(newCart));

    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addToCart = (itemCode, qty, name, price, color) => {
    let myCart = JSON.parse(JSON.stringify(Cart));

    if (itemCode in Cart) {
      myCart[itemCode].qty = myCart[itemCode].qty + qty;
    } else {
      myCart[itemCode] = { qty: 1, name, price, color,  };
    }
    setCart(myCart);
    saveCart(myCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const deleteCart = (itemCode, qty, price, name, color) => {
    let myCart = JSON.parse(JSON.stringify(Cart));

    if (itemCode in Cart) {
      myCart[itemCode].qty = myCart[itemCode].qty - qty;
    }
    if (myCart[itemCode].qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };
  return (
    <>
      <SessionProvider session={session}>
        <Navbar
          Cart={Cart}
          addToCart={addToCart}
          clearCart={clearCart}
          deleteCart={deleteCart}
          SubTotal={SubTotal}
        />
        <Component
          Cart={Cart}
          addToCart={addToCart}
          clearCart={clearCart}
          deleteCart={deleteCart}
          SubTotal={SubTotal}
          {...pageProps}
        />
      </SessionProvider>
    </>
  );
}
