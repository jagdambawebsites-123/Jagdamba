import { Libre_Baskerville, Libre_Franklin } from "next/font/google";
import "./globals.css";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-franklin",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={franklin.className}>
        {children}
      </body>
    </html>
  );
}