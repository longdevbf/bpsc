"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function SiteHeader() {
  const isMobile = useMobile();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-[0_4px_20px_rgba(0,73,135,0.29)] ">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/[Logo] Artboard 1.png?height=60&width=60"
              alt="Blockchain UTC Club Logo"
              width={60}
              height={60}
            />
            <span className="hidden md:inline-block font-bold text-[#004987]">
              Blockchain Pioneer Student
            </span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/about" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/events"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/events" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Sự kiện & Dự án
                </Link>
                <Link
                  href="/news"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/news" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Tin tức
                </Link>
                <Link
                  href="/media"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/media" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Thư viện
                </Link>
                <Link
                  href="/partners"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/partners" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Đối tác
                </Link>
                <Link
                  href="/team"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/team" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Thành viên
                </Link>
                <Link
                  href="/contact"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/contact" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Liên hệ
                </Link>
                <Link
                  href="/join"
                  scroll={true}
                  className={`text-lg font-medium hover:text-[#004987] ${
                    pathname === "/join" ? "text-[#004987] font-bold" : ""
                  }`}
                >
                  Tham gia CLB
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <div className="flex-1 flex justify-center">
              <nav className="flex items-center gap-6">
                <Link
                  href="/"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/about"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/events"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/events"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Sự kiện & Dự án
                </Link>
                <Link
                  href="/news"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/news"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Tin tức
                </Link>
                <Link
                  href="/media"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/media"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Thư viện
                </Link>
                <Link
                  href="/partners"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/partners"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Đối tác
                </Link>
                <Link
                  href="/team"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/team"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Thành viên
                </Link>
                <Link
                  href="/contact"
                  scroll={true}
                  className={`text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-[#003b6d] active:text-[#002b52] ${
                    pathname === "/contact"
                      ? "text-[#003b6d] font-bold"
                      : "text-[#004987]"
                  }`}
                >
                  Liên hệ
                </Link>
              </nav>
            </div>
            <div>
              <Link href="/join">
                <Button
                  className={`${
                    pathname === "/join" ? "bg-[#003b6d]" : "bg-[#004987]"
                  } hover:bg-[#003b6d]`}
                >
                  Tham gia CLB
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
