import cn from "classnames";

export default function PhotosPlaceholder({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 grid-rows-2 gap-1 bg-slate-200 px-1",
        className
      )}
    >
      <div className="bg-slate-300 col-span-2 row-span-2"></div>
      <div className="bg-slate-300"></div>
      <div className="bg-slate-300"></div>
      <div className="bg-slate-300"></div>
      <div className="bg-slate-300"></div>
    </div>
  );
}
