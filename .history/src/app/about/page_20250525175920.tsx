"use client";

import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedDivider,
  AnimatedCard,
  AnimatedImage,
} from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BookOpen, Award, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#004987] to-[#0070b8] text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Về Câu lạc bộ Blockchain UTC
            </AnimatedHeading>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Nơi kết nối và phát triển cộng đồng sinh viên đam mê công nghệ
              Blockchain tại Trường Đại học Giao thông Vận tải
            </p>
            <AnimatedSection delay={0.3}>
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Tham gia cùng chúng tôi
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <AnimatedHeading className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
                Sứ mệnh của chúng tôi
              </AnimatedHeading>
              <AnimatedDivider />
              <p className="text-gray-600 mb-6">
                Chúng tôi cam kết tạo ra một môi trường học tập và thực hành
                chất lượng, giúp sinh viên tiếp cận và làm chủ công nghệ
                Blockchain. Thông qua các hoạt động đa dạng, chúng tôi mong muốn
                xây dựng một cộng đồng sinh viên năng động, sáng tạo và sẵn sàng
                đón đầu xu hướng công nghệ mới.
              </p>
              <ul className="space-y-3">
                {[
                  "Đào tạo kiến thức Blockchain từ cơ bản đến nâng cao",
                  "Tổ chức các sự kiện, workshop thực tế",
                  "Kết nối với doanh nghiệp và chuyên gia trong ngành",
                  "Tạo cơ hội thực tập và việc làm cho sinh viên",
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={0.2 * index}>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#004987] rounded-full mr-3" />
                      {item}
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <AnimatedHeading className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
                Tầm nhìn
              </AnimatedHeading>
              <AnimatedDivider />
              <p className="text-gray-600 mb-6">
                Hướng đến việc trở thành một trong những câu lạc bộ Blockchain
                hàng đầu trong cộng đồng sinh viên Việt Nam, nơi ươm mầm những
                tài năng trẻ trong lĩnh vực công nghệ Blockchain và Web3.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Thành viên" },
                  { number: "50+", label: "Sự kiện" },
                  { number: "20+", label: "Đối tác" },
                  { number: "10+", label: "Dự án" },
                ].map((stat, index) => (
                  <AnimatedCard
                    key={index}
                    index={index}
                    className="bg-gray-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-[#004987] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <AnimatedHeading className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Giá trị cốt lõi
            </AnimatedHeading>
            <AnimatedDivider />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Học hỏi",
                description:
                  "Không ngừng học tập và cập nhật kiến thức mới về Blockchain và Web3",
              },
              {
                icon: Users,
                title: "Cộng đồng",
                description:
                  "Xây dựng môi trường hỗ trợ và phát triển lẫn nhau",
              },
              {
                icon: Award,
                title: "Sáng tạo",
                description:
                  "Khuyến khích tư duy đổi mới và phát triển các giải pháp sáng tạo",
              },
            ].map((value, index) => (
              <AnimatedCard
                key={index}
                index={index}
                className="bg-white p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-[#004987]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#004987]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#004987]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <AnimatedHeading className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Hành trình phát triển
            </AnimatedHeading>
            <AnimatedDivider />
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#004987]/20" />
            {[
              {
                year: "2023",
                title: "Thành lập CLB",
                description: "CLB Blockchain UTC chính thức được thành lập",
              },
              {
                year: "2023",
                title: "Workshop đầu tiên",
                description: "Tổ chức workshop Blockchain Fundamentals",
              },
              {
                year: "2024",
                title: "Mở rộng cộng đồng",
                description: "Đạt 500+ thành viên và tổ chức 20+ sự kiện",
              },
            ].map((milestone, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.2 * index}
                className="relative mb-12"
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-sm text-[#004987] font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#004987] to-[#0070b8] text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng tham gia cùng chúng tôi?
            </AnimatedHeading>
            <p className="text-lg mb-8 text-white/90">
              Hãy trở thành một phần của cộng đồng Blockchain UTC và cùng chúng
              tôi xây dựng tương lai của công nghệ Blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Đăng ký tham gia
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Liên hệ với chúng tôi
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
