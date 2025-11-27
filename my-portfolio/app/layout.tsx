import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Srinivas Gundali | Product Engineering Associate Manager",
    template: "%s | Srinivas Gundali"
  },
  description: "Experienced IT professional with 10+ years of expertise in designing, developing, and managing software solutions. Skilled in PHP, Java, Spring Boot, Laravel, Vue.js, React.js, and Cloud Services.",
  keywords: ["Srinivas Gundali", "Product Engineering Manager", "Full Stack Developer", "Software Engineer", "React.js", "Vue.js", "Spring Boot", "Laravel", "PHP", "Java", "Cloud Services", "Kuala Lumpur", "Malaysia"],
  authors: [{ name: "Srinivas Gundali" }],
  creator: "Srinivas Gundali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-kr9hch9vb-srinivas-projects-2913b213.vercel.app",
    title: "Srinivas Gundali | Product Engineering Associate Manager",
    description: "Experienced IT professional with 10+ years of expertise in designing, developing, and managing software solutions.",
    siteName: "Srinivas Gundali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srinivas Gundali Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinivas Gundali | Product Engineering Associate Manager",
    description: "Experienced IT professional with 10+ years of expertise in designing, developing, and managing software solutions.",
    creator: "@srinivasgundali",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
          <LoadingScreen />
          <CustomCursor />
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
