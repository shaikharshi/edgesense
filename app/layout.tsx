import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export const metadata: Metadata = {
  title: "Edge Sense",
  description: "One Stop Solution with - Edge Sense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={notoSans.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Provider>
    </html >
  );
}
