export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|landmark-solid.svg|user-regular.svg|github-mark.svg|pen-to-square-regular.svg).*)",
  ],
};
