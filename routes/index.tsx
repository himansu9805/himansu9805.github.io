import Projects from "../components/Projects.tsx";
import TechnologyCloud from "../components/TechnologyCloud.tsx";
import Timeline from "../components/Timeline.tsx";
import { experienceEvents, projects } from "../utils/const.ts";
import { educationEvents, technologies } from "../utils/const.ts";

export default function Home() {
  return (
    <div class="p-8">
      <div class="flex flex-col items-center justify-between">
        <section class="flex flex-col items-center justify-center">
          <span className="font-mono text-6xl">Hey there</span>
          <span className="font-mono text-[#006eff] text-6xl mt-2">
            I'm Himansu
          </span>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-sans xl:w-10/12 xl:mx-auto mt-10">
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
        <section class="mt-10">
          <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
            <b>Academic Journey</b>
          </h1>
          <Timeline events={educationEvents} />
        </section>
        <section class="mt-10">
          <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
            <b>Projects</b>
          </h1>
          <Projects projects={projects} />
        </section>
        <section className="mt-10">
          <TechnologyCloud technologies={technologies} />
        </section>
      </div>
    </div>
  );
}
