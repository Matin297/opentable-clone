import cn from "classnames";

interface PhotosProps {
  images: string[];
  as: "header" | "section";
  className: string;
}

export default function Photos({
  as: Element,
  images,
  className,
}: PhotosProps) {
  return (
    <Element
      className={cn(
        className,
        "grid grid-cols-4 grid-rows-2 gap-1 bg-zinc-700 px-1 text-white"
      )}
    >
      <div className="col-span-2 row-span-2">
        <img
          className="w-full h-full object-cover"
          src={images[0]}
          alt="food example"
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src={images[1]}
          alt="food example"
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src={images[2]}
          alt="food example"
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src={images[3]}
          alt="food example"
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src={images[4]}
          alt="food example"
        />
      </div>
    </Element>
  );
}
