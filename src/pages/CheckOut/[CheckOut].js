/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  AiFillApple,
  AiOutlineArrowLeft,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
const CheckOut = ({
  Cart,
  addToCart,
  clearCart,
  deleteCart,
  SubTotal,
  removeCart,
}) => {
  return (
    <div>
      <div className=" py-9 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-center items-start w-full space-y-9">
          <div className="flex justify-center flex-col items-start space-y-2">
            <button className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
              <Link href={"/"}>
                <p className="text-sm leading-none">
                  <AiOutlineArrowLeft className="inline-flex items-center mb-1 text-xs mr-1" />
                  Back
                </p>
              </Link>
            </button>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
              Checkout
            </p>
          </div>

          <div className="flex items-center justify-center flex-col    w-full">
            <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
              <button
                className="border border-transparent hover:border-pink-300 bg-pink-400
                 dark:bg-white dark:hover:bg-pink-400 dark:hover:border-pink-200
                  dark:text-gray-900 dark:hover:text-white hover:bg-white text-white
                   hover:text-black flex flex-row justify-center items-center space-x-2
                    py-4 rounded w-full"
              >
                <AiFillApple className="text-lg" />
                <div>
                  <p className="text-lg leading-4">Pay</p>
                </div>
              </button>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                  or pay with card
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <input
                  className="border focus:outline-pink-400 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                Card details
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr focus:outline-pink-400 border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-bl focus:outline-pink-400 border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="MM/YY"
                  />
                  <input
                    className="border rounded-br  focus:outline-pink-400 border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                Name on card
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded focus:outline-pink-400 border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="Name on card"
                  />
                </div>
              </div>
              <div>
                <input
                  className="border rounded-bl rounded-br focus:outline-pink-400 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name=""
                  id=""
                  placeholder="ZIP"
                />
              </div>

              <button
                className="mt-8 border border-transparent hover:border-gray-
                  dark:hover:bg-pink-900 dark:text-gray-
                  dark:hover:text-white dark:border-transparent bg-pink-500
                 hover:bg-white text-white hover:text-gray-900 flex 
                 justify-center items-center py-4 rounded w-full"
              >
                <div>
                  <p className="text-base leading-4">Pay Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ol className=" bg-pink-400 p-4 mb-10 mx-52 rounded-md ">
        {Object.keys(Cart).length === 0 && (
          <div className=" mt-6 text-lg font-semibold">Your Cart is Empty!</div>
        )}
        {Object.keys(Cart).map((k) => {
          return (
            <>
              <li key={Cart[k].id}>
                <div className="flex items-center space-x-96 justify-center">
                  <div className="font-bol  text-white ">{Cart[k].name}</div>
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
                <div className="font-bold ml-60 mt-2">
                  <span className="font-semibold text-white">Sub Total :</span>
                  {Number(Cart[k].price) * Cart[k].qty + "$"}
                </div>
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
};

export default CheckOut;
