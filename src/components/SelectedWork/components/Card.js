"use client";

import Image from "next/image";
import Link from "next/link";

function Card({ index, href, ...card }) {
  return (
    <div
      className={`sticky top-0 flex h-screen w-full items-center justify-center ${card.bg}`}
      style={{ zIndex: index + 1 }}
    >
      <Link href={href} className="relative block h-full w-full">
        <div className="flex h-full w-full items-center justify-center px-6 sm:px-10">
          <Image
            src={card.image}
            alt={card.name}
            width={500}
            height={500}
            className="w-full max-w-[280px] rounded-2xl border-4 border-white/40 object-cover sm:max-w-[380px] sm:rounded-3xl sm:border-8 lg:max-w-[500px]"
          />
          <div className="absolute left-6 top-10 w-full sm:left-10 sm:top-14 lg:left-14">
            <h3 className="text-3xl font-semibold leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {card.name}
            </h3>
            <p className="mt-2 inline-block rounded-full border border-white px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
              {card.category}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
