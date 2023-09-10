import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = localStorage.access_token;
  let url = req.url;
  const uri = "http://localhost:3000/";

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(uri + "/");
  }
  if (!verify && url.includes("/edit")) {
    return NextResponse.redirect(uri + "/");
  }
  if (!verify && url.includes("/topup")) {
    return NextResponse.redirect(uri + "/");
  }
  if (!verify && url.includes("/transaction")) {
    return NextResponse.redirect(uri + "/");
  }
  if (!verify && url.includes("/account")) {
    return NextResponse.redirect(uri + "/");
  }

  if (verify && url.includes("/")) {
    return NextResponse.redirect(uri + "/dashboard");
  }

  if (verify && url.includes("/register")) {
    return NextResponse.redirect(uri + "/dashboard");
  }
}
