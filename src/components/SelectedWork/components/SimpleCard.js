"use client";

import Image from "next/image";

export function SimpleCard({ ...card }) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center px-6 py-16 sm:px-10 sm:py-20 ${card.bg}`}
    >
      <div className="flex w-full max-w-md mt-auto flex-col items-center">
        <Image
          src={card.image}
          alt={card.name}
          width={1000}
          height={700}
          className="w-full rounded-2xl border-4 border-white/40 object-cover mt-20"
        />
        <div className="absolute top-10 left-5 w-full text-left">
          <h3 className="text-3xl font-semibold leading-none text-white sm:text-4xl">
            {card.name}
          </h3>
          <p className="mt-2 inline-block rounded-full border border-white px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
            {card.category}
          </p>
        </div>
      </div>
    </div>
  );
}
