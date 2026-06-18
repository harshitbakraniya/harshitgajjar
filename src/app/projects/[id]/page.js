import data from "@/utils/data.json";
import Image from "next/image";

function ProjectPage({ params }) {
  const { id } = params;
  const project = data.projects.find((project) => project.id === parseInt(id));
  return (
    <section
      id="home"
      className="banner bg-background relative flex min-h-screen flex-col items-start justify-center px-6 pb-20 pt-28 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h1 className="md:text-9xl text-6xl font-bold text-white mt-10">{project.name}</h1>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className="w-full object-cover md:mt-[10rem] mt-10"
        />
        <div className="flex max-w-5xl flex-col gap-10 md:mt-[10rem] mt-10">
          <div className="flex flex-wrap md:gap-4 gap-2">
            {project.technologies.map((technology) => (
              <span className="text-white md:text-lg text-base font-medium leading-[1.4] border border-white/40 rounded-full px-4 py-2">{technology}</span>
            ))}
          </div>
          <p className="text-white md:text-4xl text-2xl font-medium leading-[1.4]">
            {project.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 md:mt-[10rem] mt-10">
            <div className="lg:col-span-1 col-span-1 bg-[#8db593] lg:p-20 p-10"><Image src={project.images[0]} alt={project.name} width={500} height={500} className="w-full h-full object-fill shadow-xl" /></div>
            <div className="lg:col-span-1 col-span-1 bg-[#8db593] lg:p-20 p-10"><Image src={project.images[1]} alt={project.name} width={500} height={500} className="w-full h-full object-fill shadow-xl" /></div>
            <div className="lg:col-span-2 col-span-1 bg-[#8db593] lg:p-20 p-10"><Image src={project.images[2]} alt={project.name} width={500} height={500} className="w-full h-full object-fill shadow-xl" /></div>
            <div className="lg:col-span-1 col-span-1 bg-[#8db593] lg:p-20 p-10"><Image src={project.images[3]} alt={project.name} width={500} height={500} className="w-full h-full object-fill shadow-xl" /></div>
            <div className="lg:col-span-1 col-span-1 bg-[#8db593] lg:p-20 p-10"><Image src={project.images[4]} alt={project.name} width={500} height={500} className="w-full h-full object-fill shadow-xl" /></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
