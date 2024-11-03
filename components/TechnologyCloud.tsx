import { CloudData } from "../utils/interfaces.ts";

function CloudItem(
  { src, alt }: { src: string; alt: string },
) {
  return (
    <div
      className={`w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center py-4 items-center`}
    >
      <img width={"50%"} height={"50%"} src={src} alt={alt} title={alt} />
    </div>
  );
}

export default function TechnologyCloud(
  { technologies }: { technologies: CloudData[] },
) {
  return (
    <div className="container mx-auto">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-sans mb-5 pt-4">
          <b>Technologies in My Toolkit</b>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-sans xl:w-10/12 xl:mx-auto">
          From backend frameworks to frontend libraries, these are the
          technologies I rely on to bring ideas to life. Each tool in my toolkit
          has played a role in my journey, enabling me to build robust,
          scalable, and user-centric solutions.
        </p>
      </div>
      <div className="px-48 flex flex-wrap">
        {technologies.map((technology, index) => (
          <CloudItem
            key={index}
            src={technology.src}
            alt={technology.alt}
          />
        ))}
      </div>
    </div>
  );
}
