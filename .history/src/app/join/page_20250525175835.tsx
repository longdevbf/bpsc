import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, BookOpen, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-[#004987] to-[#0070b8] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0  bg-cover bg-center" />
        </div>
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tham gia CLB
          </h1>
          <p className="text-lg max-w-2xl">
            Trở thành thành viên của CLB Blockchain UTC và bắt đầu hành trình
            khám phá công nghệ đột phá
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004987] mb-4">
              Tại sao nên tham gia CLB?
            </h2>
            <div className="w-20 h-1 bg-[#004987] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Tham gia CLB Blockchain UTC mang đến cho bạn nhiều cơ hội học tập,
              phát triển và kết nối
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004987]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#004987]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004987]">
                Học tập & Phát triển
              </h3>
              <p className="text-gray-600">
                Tiếp cận kiến thức mới nhất về Blockchain và Web3 thông qua các
                workshop, seminar và khóa học do chuyên gia trong ngành giảng
                dạy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004987]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#004987]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004987]">
                Kết nối & Networking
              </h3>
              <p className="text-gray-600">
                Gặp gỡ và kết nối với cộng đồng sinh viên, chuyên gia và doanh
                nghiệp trong lĩnh vực Blockchain và công nghệ.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#004987]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#004987]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004987]">
                Cơ hội việc làm
              </h3>
              <p className="text-gray-600">
                Tiếp cận với các cơ hội thực tập, việc làm và dự án thực tế từ
                các đối tác doanh nghiệp của CLB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004987] mb-4">
              Đăng ký tham gia
            </h2>
            <div className="w-20 h-1 bg-[#004987] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Điền thông tin vào mẫu đơn dưới đây để đăng ký trở thành thành
              viên CLB Blockchain UTC
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#004987]">
                  Thông tin cá nhân
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Họ và tên</Label>
                    <Input id="fullName" placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Mã sinh viên</Label>
                    <Input
                      id="studentId"
                      placeholder="Nhập mã sinh viên của bạn"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Nhập địa chỉ email của bạn"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="faculty">Khoa/Ngành</Label>
                  <Select>
                    <SelectTrigger id="faculty">
                      <SelectValue placeholder="Chọn khoa/ngành của bạn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cntt">Công nghệ thông tin</SelectItem>
                      <SelectItem value="dtvt">Điện tử viễn thông</SelectItem>
                      <SelectItem value="ktxd">Kỹ thuật xây dựng</SelectItem>
                      <SelectItem value="ktct">Kinh tế vận tải</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Năm học</Label>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Chọn năm học của bạn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Năm 1</SelectItem>
                      <SelectItem value="2">Năm 2</SelectItem>
                      <SelectItem value="3">Năm 3</SelectItem>
                      <SelectItem value="4">Năm 4</SelectItem>
                      <SelectItem value="5">Năm 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#004987]">
                  Thông tin bổ sung
                </h3>

                <div className="space-y-2">
                  <Label>Bạn quan tâm đến lĩnh vực nào trong Blockchain?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-dev" />
                      <label
                        htmlFor="interest-dev"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phát triển (Development)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-research" />
                      <label
                        htmlFor="interest-research"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nghiên cứu (Research)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-defi" />
                      <label
                        htmlFor="interest-defi"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tài chính phi tập trung (DeFi)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-nft" />
                      <label
                        htmlFor="interest-nft"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        NFT & Metaverse
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-trading" />
                      <label
                        htmlFor="interest-trading"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Giao dịch (Trading)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-other" />
                      <label
                        htmlFor="interest-other"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Khác
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Bạn muốn tham gia ban nào trong CLB?</Label>
                  <RadioGroup defaultValue="tech">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tech" id="team-tech" />
                      <Label htmlFor="team-tech">Ban Kỹ thuật</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comm" id="team-comm" />
                      <Label htmlFor="team-comm">Ban Truyền thông</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="event" id="team-event" />
                      <Label htmlFor="team-event">Ban Sự kiện</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="team-any" />
                      <Label htmlFor="team-any">
                        Bất kỳ (theo sự phân công của CLB)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">
                    Kinh nghiệm về Blockchain (nếu có)
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Chia sẻ kinh nghiệm của bạn về Blockchain (nếu có)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    Lý do bạn muốn tham gia CLB
                  </Label>
                  <Textarea
                    id="motivation"
                    placeholder="Chia sẻ lý do bạn muốn tham gia CLB Blockchain UTC"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Tôi đồng ý với{" "}
                    <Link
                      href="/terms"
                      className="text-[#004987] hover:underline"
                    >
                      điều khoản và điều kiện
                    </Link>{" "}
                    của CLB Blockchain UTC
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#004987] hover:bg-[#003b6d]"
              >
                Gửi đơn đăng ký
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004987] mb-4">
              Câu hỏi thường gặp
            </h2>
            <div className="w-20 h-1 bg-[#004987] mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Ai có thể tham gia CLB Blockchain UTC?",
                answer:
                  "Tất cả sinh viên đang học tại Trường Đại học Giao thông Vận tải đều có thể đăng ký tham gia CLB, không phân biệt khoa, ngành hay năm học.",
              },
              {
                question:
                  "Tôi cần có kiến thức về Blockchain để tham gia không?",
                answer:
                  "Không, CLB chào đón tất cả sinh viên có đam mê và quan tâm đến công nghệ Blockchain, bất kể trình độ kiến thức. Chúng tôi có các khóa học và workshop từ cơ bản đến nâng cao phù hợp với mọi đối tượng.",
              },
              {
                question: "Quy trình đăng ký tham gia CLB như thế nào?",
                answer:
                  "Bạn cần điền đầy đủ thông tin vào mẫu đơn đăng ký trực tuyến. Sau đó, Ban chủ nhiệm CLB sẽ xem xét đơn và liên hệ với bạn để phỏng vấn ngắn (nếu cần). Cuối cùng, bạn sẽ nhận được thông báo kết quả qua email.",
              },
              {
                question: "CLB có thu phí thành viên không?",
                answer:
                  "CLB có thu một khoản phí thành viên nhỏ hàng năm để duy trì hoạt động và tổ chức các sự kiện. Tuy nhiên, chúng tôi có chính sách miễn giảm phí cho sinh viên có hoàn cảnh khó khăn.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#004987] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button
                variant="outline"
                className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white"
              >
                Xem tất cả câu hỏi
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
