import "./globals.css";
import { fontHeading, fontSans, fontUrban } from "../assets/fonts";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@/components/analytics";
import { cn, constructMetadata } from "@/lib/utils";

import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "../components/layout/footer";
import { NavMobile } from "../components/layout/mobile-nav";
import { Toaster } from "../components/ui/sonner";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontUrban.variable,
        fontHeading.variable,
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <NavMobile />
            <NavBar scroll={true} />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster richColors closeButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
