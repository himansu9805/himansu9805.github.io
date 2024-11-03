import { CardData } from "../utils/interfaces.ts";

function Card(
  { title, description, technologies, startDate, endDate }: CardData,
) {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 dark:text-gray-300 bg-white border dark:border-none dark:bg-gray-800 rounded-lg w-96 font-sans">
      <div class="p-6">
        <div class="flex justify-between items-center">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          {startDate && endDate && (
            <div class="ml-4 text-sm font-light text-gray-500">
              {startDate} - {endDate}
            </div>
          )}
        </div>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
        {technologies && (
          <div class="mt-4">
            <h6 class="font-sans text-sm font-semibold">Technologies:</h6>
            <div class="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  class="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: CardData[] }) {
  return (
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      ))}
    </div>
  );
}
