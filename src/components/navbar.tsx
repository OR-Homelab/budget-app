import Link from "next/link";
import Image from "next/image";

import Logout from "@/components/logout";

import { Session } from "next-auth";

import NavbarButton from "@/components/navbarButton";

export default function Navbar(session: Session | null) {
  return (
    <div className="bg-[--nav-bar] h-[8vh] w-full absolute drop-shadow-md select-none">
      <nav>
        {/* Home button/logo */}
        {NavbarButton(
          "Budgeting",
          "/landmark-solid.svg",
          "Logo",
          "/",
          "w-[20vh] mt-[1vh] ml-[1vw] fixed flex"
        )}

        <div className="w-[.2vw] h-[6vh] mt-[1vh] ml-[12vw] fixed flex bg-[--text-color] rounded-md"></div>

        {/* Edit button */}
        {NavbarButton(
          "Edit",
          "/pen-to-square-regular.svg",
          "Edit button",
          "/users/edit",
          "w-[20vh] mt-[1vh] ml-[15vw] fixed flex"
        )}

        {/* Previous budgets button */}
        {NavbarButton(
          "Previous Budgets",
          "/credit-card-solid.svg",
          "Previous budgets overview",
          "/users/previous-budgets",
          "w-[30vh] mt-[1vh] ml-[23vw] fixed flex"
        )}

        {/* Login/logout button */}
        {session?.user ? (
          <div className="w-[20vh] mt-[1vh] ml-[90vw] fixed flex">
            <Image
              src={session.user.image || "/user-regular.svg"}
              width={0}
              height={0}
              alt="User avatar"
              className="h-[6vh] w-auto rounded-full"
            ></Image>
            <Logout></Logout>
          </div>
        ) : (
          <Link
            href="/login"
            className="w-[20vh] mt-[1vh] ml-[90vw] fixed flex"
          >
            <Image
              src="/user-regular.svg"
              width={0}
              height={0}
              alt="User avatar"
              className="h-[6vh] w-auto"
            ></Image>
            <p className="content-center pl-[1vw] text-[3vh] text-[--text-color]">
              Sign In
            </p>
          </Link>
        )}
      </nav>
    </div>
  );
}
