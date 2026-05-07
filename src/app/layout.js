import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
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
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body>
        <CartProvider>
          {children}
          <ToastContainer position="top-center"/>
        </CartProvider>
        
      </body>
    </html>
  );
}