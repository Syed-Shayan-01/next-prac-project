/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Carousel } from "antd";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
const App = () => (
  <>
    <Carousel autoplay>
      <div>
        <h3 className="h-full text-white leading-4 text center bg-pink-400">
          <img
            src="/Double Patty.png"
            alt="carousel pic sales"
            className=" h-[91vh] w-full"
          />
        </h3>
      </div>
      <div>
        <h3 className="h-[80vh] text-white leading-4 text center bg-pink-400">
          <img
            src="/bugerdeal.jpg"
            alt="carousel pic sales"
            className=" h-[91vh] w-full"
          />
        </h3>
      </div>
      <div>
        <h3 className="h-[80vh] text-white leading-4 text center bg-pink-400">
          <img
            src="/Double Patty.png"
            alt="carousel pic sales"
            className=" h-[91vh] w-full"
          />
        </h3>
      </div>
    </Carousel>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto items-center justify-center flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 text-3xl h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
                <BsCurrencyDollar />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Exciting Offers
                </h2>
                <p className="leading-relaxed text-base">
                  Offers Started from 12 june - 20 August
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div
                className="w-16 text-3xl h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center
               justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0"
              >
                <TbTruckDelivery />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Free Shipping
                </h2>
                <p className="leading-relaxed text-base">
                  Try Now your first order and Enjoy this Free Shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <Contact />

  </>
);
export default App;
