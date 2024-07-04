import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/Theme/theme-provider";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import GlobalState from "@/context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brighter Bee",
  description: "BrighterBee is a platform for project Management",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} md:overflow-hidden`}>
        <NextTopLoader color="var(--themeColor)" showSpinner={false} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <GlobalState>{children}</GlobalState>
        </ThemeProvider>
      </body>
    </html>
  );
}
