import Link from "next/link";
import SelectedWork from "@/components/SelectedWork";
import Arrow from "@/svg/arrow";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TalkToMe from "@/components/TalkToMe";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="banner bg-background relative flex min-h-screen flex-col items-start justify-center px-6 pb-20 pt-28 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40"
      >
        <div className="flex w-full flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-center gap-2 text-white sm:gap-4">
          <div className="text-2xl font-medium sm:text-3xl md:text-4xl">
            🤟 Hello, <br />
            I'm Harshit
          </div>
          <div className="text-[clamp(3.5rem,18vw,14rem)] font-semibold leading-[0.9]">
            Frontend
          </div>
          <div className="text-[clamp(3.5rem,18vw,14rem)] font-semibold leading-[0.9] lg:-ml-20">
            Developer
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-6xl text-left sm:mt-16 lg:mt-32">
          <p className="text-2xl font-medium leading-[1.4] text-white sm:text-3xl md:text-4xl lg:text-6xl">
            I'm passionate about blending innovation with aesthetics to create
            designs that tell a story and leave a lasting impact.
          </p>
          <Link
            href="#about"
            className="mt-10 inline-flex w-[110px] items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-lg text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px] sm:mt-16 lg:mt-20"
          >
            About Me
            <Arrow height={20} width={20} />
          </Link>
        </div>
      </section>
      <SelectedWork />
      <About />
      <Skills />
      <Experience />
      <TalkToMe />
    </>
  );
}
