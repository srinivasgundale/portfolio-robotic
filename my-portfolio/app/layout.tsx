import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
  description: portfolioData.personalInfo.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
