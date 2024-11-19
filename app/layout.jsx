import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Transistion from "@/components/ui/Transistion";
import PageTransition from "@/components/ui/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Serene",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}
      >
        <Transistion />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
