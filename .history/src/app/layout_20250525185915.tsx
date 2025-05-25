import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import dynamic from "next/dynamic";

// Dynamic import ThemeProvider to avoid hydration mismatch
const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => ({ default: mod.ThemeProvider })),
  {
    ssr: false,
    loading: () => <div className="relative flex min-h-screen flex-col">Loading...</div>
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain Pioneer Student",
  description: "Câu lạc bộ Blockchain thuộc Trường Đại học Giao thông Vận tải",
  generator: "theanh.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}Ecmascript file had an error

./src/app/layout.tsx (9:23)

Ecmascript file had an error
   7 |
   8 | // Dynamic import ThemeProvider to avoid hydration mismatch
>  9 | const ThemeProvider = dynamic(
     |                       ^^^^^^^^
> 10 |   () => import("@/components/theme-provider").then((mod) => ({ default: mod.ThemeProvider })),
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 11 |   {
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 12 |     ssr: false,
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 13 |     loading: () => <div className="relative flex min-h-screen flex-col">Loading...</div>
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 14 |   }
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 15 | );
     | ^^
  16 |
  17 | const inter = Inter({ subsets: ["latin"] });
  18 |

`ssr: false` is not allowed with `next/dynamic` in Server Components. Please move it into a client component.
1
2
This error occurred during the build process and can only be dismissed by fixing the error.