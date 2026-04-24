import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.amerindnation.com"),
  title: {
    default: "Amerind Nation | Strategic Funding & Infrastructure Delivery",
    template: "%s | Amerind Nation",
  },
  description:
    "Native-owned strategic funding and infrastructure delivery for rural, Tribal, nonprofit, and public-benefit projects.",
  openGraph: {
    title: "Amerind Nation | Strategic Funding & Infrastructure Delivery",
    description:
      "Native-owned strategic funding and infrastructure delivery for rural, Tribal, nonprofit, and public-benefit projects.",
    url: "https://www.amerindnation.com",
    siteName: "Amerind Nation",
    images: [
      {
        url: "/solarFarm.jpeg",
        width: 1200,
        height: 630,
        alt: "Amerind Nation strategic funding and infrastructure delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amerind Nation | Strategic Funding & Infrastructure Delivery",
    description:
      "Native-owned strategic funding and infrastructure delivery for rural, Tribal, nonprofit, and public-benefit projects.",
    images: ["/solarFarm.jpeg"],
  },
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
