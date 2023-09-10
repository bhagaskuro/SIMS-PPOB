"use client";
import "../style/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={reduxStore}>
      <html lang="en">
        <head>
          <title>SIMS PPOB</title>
          <meta name="Nutech Technical Test" content="Description" />
          <link rel="icon" type="image/x-icon" href="/logo.png" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
