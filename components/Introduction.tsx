import React from 'react'
import Image from "next/image";
import ordermenu from "@/assets/images/ordermenu.webp";

export default function Introduction() {
  return (
    <div className="grid lg:grid-cols-2 gap-[2rem]  my-44 ms-44">
<div className="px-3 md:px-20 py-5 flex flex-col gap-[1rem]">
    <p className="text-left text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
    Easy Menu: Simplify Dining, Delight Diners
    </p>
    <p className="text-left text-xl lg:text-1xl text-[#012970]">
    Effortlessly streamline ordering with Easy Menu’s digital solutions,<br/>
    enhancing service speed and customer satisfaction.
    </p>
    </div>
    <div className="h-[30rem] w-[30rem] grid-cols-2">
            <Image
              src={ordermenu}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>
    </div>
    
  )
}
