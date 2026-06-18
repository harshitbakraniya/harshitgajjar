import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black px-6 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl py-8 sm:py-10">
        <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="text-base leading-none text-white sm:text-lg">
            Harshit <br />- Bakraniya
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <span className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-base text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px] sm:text-lg">
              +91 7698366737
            </span>
            <Link
              href="https://linkedin.com/in/harshit-bakraniya-034254299"
              className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-base text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px] sm:text-lg"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
