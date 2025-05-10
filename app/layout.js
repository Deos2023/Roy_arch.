

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <Navbar />
        {children}
        <ScrollToTopButton/>
        <Footer />
      </body>
    </html>
  );
}
