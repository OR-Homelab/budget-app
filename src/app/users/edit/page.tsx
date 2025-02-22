import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="pt-[12vh] pl-[2vw] text-[--text-color]">
      <p>Hej {session?.user?.name}</p>
    </div>
  );
}
