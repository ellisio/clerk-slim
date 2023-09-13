import "@snowtrek/ui/styles.css";
import "focus-visible";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@snowtrek/ui";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Snowtrek",
    template: "%s | Snowtrek",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body
          className={`antialised h-full bg-white dark:bg-stone-900 ${inter.className}`}
        >
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
