import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navber from "@/componet/Navber";
import Footer from "@/componet/Footer";


const OpenSent = Open_Sans({
  subsets: ["latin"],
});


export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
    ],
  },
  title: 'Tiles Gallert'
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme = "light"
      className={`${OpenSent.className} h-full antialiased`}
    >
      <body className="">
        
        {children}
        
      </body>
    </html>
  );
}
