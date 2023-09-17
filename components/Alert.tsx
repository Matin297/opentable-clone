import cn from "classnames";

export default function Alert({
  message,
  className,
}: {
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-red-100 text-red-500 text-xs p-1 rounded", className)}
    >
      {message}
    </div>
  );
}
