import { type ICardData } from "@/utils/interfaces.ts";

function Card({
  title,
  description,
  technologies,
  startDate,
  endDate,
}: ICardData) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700  bg-white border dark:border-none rounded-lg max-w-96 font-sans">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          {startDate && endDate && (
            <div className="ml-4 text-sm font-light text-gray-500">
              {startDate} - {endDate}
            </div>
          )}
        </div>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
        {technologies && (
          <div className="mt-4">
            <h6 className="font-sans text-sm font-semibold">Technologies:</h6>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
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

export default function Projects({ projects }: { projects: ICardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
