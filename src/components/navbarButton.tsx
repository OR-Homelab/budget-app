import Link from "next/link";
import Image from "next/image";

export default function NavbarButton(
  buttonText: string,
  imagePath: string,
  imageAltText: string,
  url: string,
  styling: string
) {
  return (
    <Link href={url} className={styling}>
      <Image
        src={imagePath}
        width={0}
        height={0}
        alt={imageAltText}
        className="h-[6vh] w-auto"
      ></Image>
      <p className="content-center pl-[.6vw] text-[3vh] text-[--text-color]">
        {buttonText}
      </p>
    </Link>
  );
}
