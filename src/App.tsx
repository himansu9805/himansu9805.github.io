import { useState, useEffect } from "react";
import Footer from "@/components/Footer.tsx";
import Projects from "@/components/Projects.tsx";
import Technology from "@/components/Technology";
import Timeline from "@/components/Timeline.tsx";
import { experienceEvents, projects, names } from "@/utils/const.ts";
import { educationEvents, technologies } from "@/utils/const.ts";

export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setName(prev => {
        const currentIndex = names.findIndex(nameObj => nameObj.name === prev);
        const nextIndex = (currentIndex + 1) % names.length;
        return names[nextIndex].name;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setName(names[0].name);
  }, []);

  return (
    <div>
      <div className="p-8">
        <div className="flex flex-col items-center justify-between">
          <section className="flex flex-col items-center justify-center mt-10">
            <span className="font-mono text-6xl">Hey there!</span>
            <div className="flex flex-col justify-center mt-2 font-mono">
              <span className="text-center text-gray-600 text-4xl">You can call me</span>
              <span className="relative inline-block h-15 w-full text-center mt-4 text-[#006eff] text-6xl">
                {names.map((nameObj) => (
                  <span
                    key={nameObj.name}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out whitespace-nowrap flex items-center justify-center ${nameObj.name === name
                      ? 'opacity-100 transform translate-y-0 blur-0'
                      : 'opacity-0 transform translate-y-4 blur-sm'
                      }`}
                  >
                    {nameObj.name}
                  </span>
                ))}
              </span>
              <span className="text-center text-gray-400 mt-4">(If you forget, just look up at the night sky for a hint.)</span>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600  font-sans xl:w-10/12 xl:mx-auto mt-8">
              I'm a software engineer based in India, crafting amazing websites,
              applications, and everything in between. When I'm not coding, you
              might find me exploring the latest tech trends, playing video games,
              or enjoying a good cup of coffee. Let's build something awesome
              together!
            </p>
          </section>
          <section className="mt-10">
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
              <b>Work Experience</b>
            </h1>
            <Timeline events={experienceEvents} />
          </section>
          <section className="mt-10">
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
              <b>Academic Journey</b>
            </h1>
            <Timeline events={educationEvents} />
          </section>
          <section className="mt-10">
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
              <b>Projects</b>
            </h1>
            <Projects projects={projects} />
          </section>
          <section className="mt-10">
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
              <b>Technologies in My Toolkit</b>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600  font-sans xl:w-10/12 xl:mx-auto mt-10">
              From backend frameworks to frontend libraries, these are the
              technologies I rely on to bring ideas to life. Each tool in my toolkit
              has played a role in my journey, enabling me to build robust,
              scalable, and user-centric solutions.
            </p>
            <Technology technologies={technologies} />
          </section>
        </div>
      </div >
      <Footer />
    </div >
  );
}
