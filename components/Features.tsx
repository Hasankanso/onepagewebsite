import Image from "next/image";
import moneysack from "@/assets/gifs/geldtasche.gif";
import happy from "@/assets/gifs/glucklich.gif"
import chartGif from "@/assets/gifs/liniendiagramm.gif"
import fastGif from "@/assets/gifs/schneller-vorlauf.gif"

const Features = () => {
  return (
    <div className="px-3 md:px-20 py-5 flex flex-col gap-[1rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Easy Menu Features
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Direct Order
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={fastGif}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>
          <p className="mid-text">
          Customers can send orders directly to the kitchen. This will reduce mistakes and increase efficiency
          </p>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Do More with Less
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={chartGif}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>
          <p className="mid-text">
          Employees handle more orders, while customers get their food faster
          </p>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Happy Customers
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={happy}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>
          <p className="mid-text">
          Customers don`t have to wait for long, and you keep your reviews high
          </p>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            More Revenue
          </p>
          <div className="h-[10rem] w-[10rem]">
            <Image
              src={moneysack}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>
          <p className="mid-text">
          Employees are efficient and Customers are willing to order more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
