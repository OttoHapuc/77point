"use client";
import Image from "next/image";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function CarouselSession(){
    const [curr, setCurr] = useState(0);
  const data = [
    {
      image:
        "https://img.freepik.com/fotos-gratis/coqueteis-e-coqueteis-em-casa-noturna_23-2149093603.jpg?w=740&t=st=1688504562~exp=1688505162~hmac=c677d10d9f7ca5e2811526c54754d81688d3058f27d5c63fba204b339281f2ee",
    },
    {
      image:
        "https://img.freepik.com/fotos-gratis/amigos-felizes-de-tiro-medio-com-canecas-de-cerveja_23-2148872451.jpg?w=740&t=st=1688504595~exp=1688505195~hmac=a65bdd02c23876ad8facaade22b12a37d2870d74a94508fdbcfda598f6dd6b46",
    },
    {
      image:
        "https://img.freepik.com/fotos-gratis/dancar-pessoas-no-clube_23-2147717106.jpg?w=740&t=st=1688504619~exp=1688505219~hmac=447c5c902f39feb4e7092736e51768aee1e114e17a6d51228e8303cff49a5f19",
    },
  ];

  const prev = () =>
    curr === 0 ? setCurr(data.length - 1) : setCurr(curr - 1);
  const next = () =>
    curr === data.length - 1 ? setCurr(0) : setCurr(curr + 1);
  return (
    <main className="w-full h-full">
      <div className="w-full h-full relative">
        <div className="w-full bg-stone-900 flex justify-center">
          {data.map((e, i) => (
            <Image
              key={e.image}
              src={e.image}
              alt={"principal"}
              width={500}
              height={500}
              className={`${
                i == curr ? "visible" : "hidden"
              } duration-300 h-[500px] object-cover rotate-vert-center`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-while/80 text-gray-200 hover:bg-while"
          >
            <BsChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-while/80 text-gray-200 hover:bg-while"
          >
            <BsChevronRight size={40} />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {data.map((_, i) => (
              <div
                key={_.image}
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}