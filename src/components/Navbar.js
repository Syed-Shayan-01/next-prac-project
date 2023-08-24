/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MdCancel, MdAccountCircle, MdDeleteForever } from "react-icons/md";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineLogout,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRef } from "react";
import { useSession, signOut } from "next-auth/react";
const Navbar = ({
  Cart,
  addToCart,
  clearCart,
  deleteCart,
  SubTotal,
  removeCart,
}) => {
  // console.log(Cart, addToCart, clearCart, deleteCart, SubTotal);
  const { data: session } = useSession();
  const ref = useRef();
  const crtControl = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <>
      <header className="text-gray-600  shadow-xl body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href={"/"} className="ml-3 text-xl">
              Syed Shayan
            </Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/AllProducts/"} className="mr-5 hover:text-gray-900">
              Male
            </Link>
            <Link
              href={"/AllProducts/WomensProducts/"}
              className="mr-5 hover:text-gray-900"
            >
              Female
            </Link>
            <Link href={""} className="mr-5 hover:text-gray-900">
              Company
            </Link>
            <Link href={""} className="mr-5 hover:text-gray-900">
              Store
            </Link>
          </nav>
          <div
            onClick={crtControl}
            className="SideBar cursor-pointer text-xl items-center"
          >
            <AiOutlineShoppingCart />
          </div>
          {/* Side Bar */}
          <div
            ref={ref}
            className="w-96 z-10 h-full absolute rounded right-0 top-20 bg-pink-200 transform px-7 py-10 
translate-x-full transition-transform"
          >
            <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
            <span
              onClick={crtControl}
              className="text-lg absolute top-3 right-3 cursor-pointer"
            >
              <MdCancel />
            </span>
            <ol className="list-decimal ">
              {Object.keys(Cart).length === 0 && (
                <div className=" mt-6 text-lg font-semibold">
                  Your Cart is Empty!
                </div>
              )}
              {Object.keys(Cart).map((k) => {
                return (
                  <>
                    <li key={Cart[k].id}>
                      <div className="flex items-start mt-9 mr-2">
                        <div className="w-2/3 text-start font-semibold">
                          {Cart[k].name}
                        </div>
                        <div className="inline-flex items-center justify-center">
                          <AiFillMinusCircle
                            onClick={() => {
                              deleteCart(k, 1, Cart[k].price, Cart[k].name);
                            }}
                            className="mr-2 cursor-pointer"
                          />
                          {Cart[k].qty}
                          <AiFillPlusCircle
                            onClick={() => {
                              addToCart(k, 1, Cart[k].price, Cart[k].name);
                            }}
                            className="ml-2 cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="font-thin mt-2 flex items-center ">
                        <span className="font-semibold">Price :</span>
                        {Number(Cart[k].price) * Cart[k].qty + "$"}

                        <button className=" absolute right-24 text-lg text-pink-500 ml-3 hover:text-black rounded hover:bg-pink-300 p-2">
                          <MdDeleteForever />
                        </button>
                        <img src={Cart[k].image} />
                      </div>
                    </li>
                  </>
                );
              })}
            </ol>
            {Object.keys(Cart).length === 0 && (
              <button
                className="text-white ml-3 bg-gray-400 rounded p-2 mt-3"
                disabled
              >
                Check Out
              </button>
            )}
            {Object.keys(Cart).length > 0 && (
              <button className=" text-white ml-3 bg-pink-500 rounded-md p-2 mt-3">
                <Link href={`/CheckOut/CheckOut`}>Check Out</Link>
              </button>
            )}
            <button
              onClick={clearCart}
              className=" text-white ml-3 bg-pink-500 rounded hover:bg-pink-300 p-2 mt-3"
            >
              Clear Cart
            </button>
          </div>
          {!session && (
            <button
              className="inline-flex text-xl items-center border-0 py-1 px-3 
focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0"
            >
              <Link href={"/forms/login"}>Login</Link>
            </button>
          )}
          {session && (
            <button
              className="inline-flex text-xl items-center border-0 py-1 px-3 
focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0"
            >
              <Link title="Your Profile" href={"/profile"}>
                <MdAccountCircle />
              </Link>
            </button>
          )}
          {session && (
            <button
              className="inline-flex text-xl items-center border-0 py-1 px-3 
focus:outline-none hover:bg-gray-200 rounded  mt-4 md:mt-0"
            >
              <div title="Logout" onClick={signOut}>
                <AiOutlineLogout />
              </div>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
