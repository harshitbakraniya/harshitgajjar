import Link from "next/link";

function Header() {
  return (
    <div className="absolute z-50 left-1/2 -translate-x-1/2 top-6 hidden w-full max-w-7xl items-center justify-between px-6 sm:top-10 sm:px-10 lg:flex lg:px-16">
      <Link href="/#home" className="text-lg leading-none font-semibold text-white cursor-pointer">
        Harshit <br />- Bakraniya
      </Link>
      <div className="flex items-center gap-4">
        <span className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-lg text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px]">
          +91 7698366737
        </span>
        <Link
          href="https://linkedin.com/in/harshit-bakraniya-034254299"
          className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-lg text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px]"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
}

export default Header;