import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Amerind Nation | Strategic Funding & Infrastructure Delivery",
    template: "%s | Amerind Nation",
  },
  description:
    "Native-owned strategic funding and infrastructure delivery for rural, Tribal, nonprofit, and public-benefit projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">

      <body
        className="h-full flex flex-col antialiased"
      >
        <Navigation />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
