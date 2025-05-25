import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  MessageCircle,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#004987] text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/[Logo] Artboard 1.png?height=50&width=50"
                alt="Blockchain UTC Club Logo"
                width={50}
                height={50}
                className="bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">Blockchain UTC Club</span>
            </div>
            <p className="text-white/80 text-sm">
              Câu lạc bộ Blockchain UTC là nơi quy tụ những sinh viên đam mê
              công nghệ Blockchain và Web3 tại Trường Đại học Giao thông Vận
              tải.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/bpsclub.utc"
                target="_blank"
                className="hover:text-white/80"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/106421064/"
                target="_blank"
                className="hover:text-white/80"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" target="_blank" className="hover:text-white/80">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@BlockchainPioneerStudent"
                target="_blank"
                className="hover:text-white/80"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white">
                  Sự kiện & Dự án
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/80 hover:text-white">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-white/80 hover:text-white">
                  Thư viện
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-white/80 hover:text-white"
                >
                  Đối tác
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/80 hover:text-white">
                  Thành viên
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Tham gia</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join" className="text-white/80 hover:text-white">
                  Đăng ký thành viên
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Phòng 305, Nhà A9, Trường Đại học Giao thông Vận tải, Số 3 Cầu
                  Giấy, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <Link
                  href="mailto:blockchain.utc@gmail.com"
                  className="text-white/80 hover:text-white"
                >
                  blockchain.utc@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <Link
                  href="tel:+84987654321"
                  className="text-white/80 hover:text-white"
                >
                  +84 987 654 321
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Blockchain UTC Club. Tất cả các quyền
            được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
