import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Ishant Pathania | Data Analyst & Product Engineer",
  description: "Portfolio of Ishant Pathania. Specializing in Python, SQL, and Interactive Data Visualization. View case studies and live dashboards.",
  keywords: ["Data Analyst", "Data Science Portfolio", "Next.js", "Interactive Dashboards", "React"],
  openGraph: {
    title: "Ishant Pathania | Data Analyst & Product Engineer",
    description: "Visualizing complex data through interactive narratives.",
    url: "https://ishant.dev", // Update with your actual domain
    siteName: "Ishant Pathania Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Add this file to /public
        width: 1200,
        height: 630,
        alt: "Ishant Pathania Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishant Pathania | Data Analyst & Product Engineer",
    description: "Visualizing complex data through interactive narratives.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
