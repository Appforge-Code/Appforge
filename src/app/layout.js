import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import HeroUIWrapper from "./HeroUIWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["500"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Appforge",
  description: "AppForge is a forward-thinking software development agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        className={`${geistSans.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <HeroUIWrapper>{children}</HeroUIWrapper>
        <Footer />
      </body>
    </html>
  );
}
