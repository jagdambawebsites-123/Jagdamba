// app/layout.js
import { Libre_Baskerville, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif", // We name the variable here
});

const libreFranklin = Libre_Franklin({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans", // We name the variable here
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${libreFranklin.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}