import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./globals.css";

export const metadata = {
  title: "AskHonestly",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
