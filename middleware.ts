export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",   // protect vendor dashboard
    "/admin/:path*",       // protect admin pages
    "/account/:path*",     // protect customer account
  ],
};