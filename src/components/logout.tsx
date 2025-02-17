import { signOut } from "@/auth"
 
export default function Logout() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo: "/login"});
      }}
    >
      <button className="content-center pl-[1vw] text-[3vh] text-[--text-color]" type="submit">Logout</button>
    </form>
  )
}