import { type ITechnologyData } from "../utils/interfaces.ts";

function CloudItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center py-4 items-center`}
    >
      <img width={"50%"} height={"50%"} src={src} alt={alt} title={alt} />
    </div>
  );
}

export default function Technology({
  technologies,
}: {
  technologies: ITechnologyData[];
}) {
  return (
    <div className="xl:mx-48 flex flex-wrap">
      {technologies.map((technology, index) => (
        <CloudItem key={index} src={technology.src} alt={technology.alt} />
      ))}
    </div>
  );
}
