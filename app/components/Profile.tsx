import { User } from "@/utils/prisma";

export default function Profile({ first_name, last_name }: User) {
  return (
    <h3 className="font-bold">
      <span className="text-sm font-normal">Hello,</span>{" "}
      <span className="capitalize">{first_name}</span>{" "}
      <span className="capitalize">{last_name}</span>
    </h3>
  );
}
