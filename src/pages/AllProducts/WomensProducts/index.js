/* eslint-disable @next/next/no-img-element */

import { getWomenData } from "@/services/women";
import { getSession } from "next-auth/react";
import Link from "next/link";

const index = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center justify-center flex-wrap -m-4">
            {data.map((items) => {
              return (
                <div
                  key={items.id}
                  className=" lg:w-72 mx-2 my-2 shadow-lg md:w-1/2 p-4 w-full"
                >
                  <Link
                    href={`/AllProducts/WomensProducts/${items.id}`}
                    className="relative rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="h-[36vh] m-auto transition-transform hover:transform hover:scale-110"
                      src={items.Img}
                    />
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {items.name}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {items.desc}
                      </h2>
                      <p className="mt-1">{items.price}</p>
                    </div>
                    <div className=" text-start">{items.color}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {

  const data = await getWomenData();
  return {
    props: {
      data,
    },
  };
}
