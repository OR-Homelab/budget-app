import Image from "next/image";

export default function Navbar() {
    return (
        <div className="bg-[--nav-bar] h-[8vh] w-full absolute drop-shadow-md select-none">
            <nav>
                <a href="/" className="w-[20vh] mt-[1vh] ml-[1vw] fixed flex">
                    <Image src="landmark-solid.svg" width={0} height={0} alt="Logo" className="h-[6vh] w-auto fill-white"></Image>
                    <p className="content-center pl-[.6vw] text-[3vh] text-[--text-color]">Budgeting</p>
                </a>
                <a href="/" className="w-[20vh] mt-[1.5vh] ml-[90vw] fixed flex">
                    <Image src="user-regular.svg" width={0} height={0} alt="Logo" className="h-[5vh] w-auto"></Image>
                    <p className="content-center pl-[1vw] text-[3vh] text-[--text-color]">Sign In</p>
                </a>
            </nav>
        </div>
    );
}