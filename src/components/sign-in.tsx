import { signIn } from "@/auth";

import Image from "next/image";
 
export default function SignIn() {
  return (
    <div className="w-full place-items-center">
      <form
        action={async () => {
          "use server"
          await signIn("github", { redirectTo: "/" })
        }}
      >
        <button className="text-[--text-color] font-[--font] text-[1.5vw] w-[16vw] h-[4.5vh] place-items-center rounded-md bg-[--button] hover:bg-[--button-focus] drop-shadow-lg flex place-content-center" type="submit">
          <Image src="/github-mark.svg" width={0} height={0} alt="Logo" className="h-[3vh] w-auto fill-white pr-[.5vw]"></Image>
          Sign in with Github
        </button>
      </form>
    </div>
  )
} 