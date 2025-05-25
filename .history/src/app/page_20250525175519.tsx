"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Calendar,
  BookOpen,
  Users,
  Award,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activitiesRef, activitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="w-full relative overflow-hidden py-20 md:py-40 min-h-[500px] md:min-h-[650px]">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/a8fd3637dcec6fb236fd.jpg?height=1080&width=1920')] bg-cover bg-center bg-fixed" />
          {/* Animated decorative blobs */}
          <motion.div
            className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-white opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-500 opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6" ref={heroRef}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* LEFT: Content */}
            <div className="text-white text-center md:text-left">
              <motion.p
                className="text-sm md:text-base text-[#b3d8f5] uppercase tracking-widest mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cộng đồng Web3 tiên phong của sinh viên Việt Nam
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#ffffff] drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Blockchain Pioneer Student
              </motion.h1>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-[#d8e5f7] mb-6 max-w-lg mx-auto md:mx-0 drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Khám phá, học hỏi và phát triển cùng cộng đồng Blockchain tại
                Trường Đại học Giao thông Vận tải.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/join">
                  <Button
                    size="lg"
                    className="bg-white text-[#004987] hover:bg-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Đăng ký tham gia CLB
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Animation */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Player
                autoplay
                loop
                src="/animations/blockchain.json"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-12 md:py-16 bg-white" ref={introRef}>
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Giới thiệu về CLB Blockchain UTC
            </h2>
            <motion.div
              className="w-20 h-1 bg-[#004987] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={introInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
              Câu lạc bộ Blockchain UTC là nơi quy tụ những sinh viên đam mê
              công nghệ Blockchain và Web3. Chúng tôi tạo ra môi trường học tập,
              nghiên cứu và thực hành, giúp các bạn sinh viên tiếp cận với công
              nghệ đang thay đổi tương lai.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Học tập",
                description:
                  "Workshop, seminar và khóa học từ cơ bản đến chuyên sâu về Blockchain, Crypto và Web3",
              },
              {
                icon: Users,
                title: "Cộng đồng",
                description:
                  "Kết nối với cộng đồng sinh viên, chuyên gia và doanh nghiệp trong lĩnh vực Blockchain",
              },
              {
                icon: Award,
                title: "Thực hành",
                description:
                  "Tham gia các dự án thực tế, hackathon và cơ hội thực tập tại các công ty công nghệ hàng đầu",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="w-16 h-16 bg-[#004987]/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
                  <item.icon className="h-8 w-8 text-[#004987]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#004987]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-12 md:py-16 bg-gray-50" ref={activitiesRef}>
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Hoạt động nổi bật
            </h2>
            <motion.div
              className="w-20 h-1 bg-[#004987] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={activitiesInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Event+${item}`}
                    alt={`Event ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>20/04/2023</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#004987]">
                    {item === 1 && "Workshop: Blockchain Fundamentals"}
                    {item === 2 && "Hackathon: Build Your First dApp"}
                    {item === 3 && "Seminar: Crypto Market Insights"}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {item === 1 &&
                      "Tìm hiểu về công nghệ Blockchain từ cơ bản đến nâng cao với các chuyên gia hàng đầu."}
                    {item === 2 &&
                      "Thử thách xây dựng ứng dụng phi tập trung đầu tiên của bạn trong 48 giờ."}
                    {item === 3 &&
                      "Phân tích thị trường tiền điện tử và xu hướng đầu tư 2023."}
                  </p>
                  <Link href={`/events/${item}`}>
                    <Button
                      variant="outline"
                      className="w-full text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                    >
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/events">
              <Button
                variant="outline"
                className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Xem tất cả sự kiện
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-12 md:py-16 bg-gradient-to-r from-[#004987] to-[#0070b8] text-white"
        ref={ctaRef}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng tham gia cùng chúng tôi?
            </h2>
            <p className="text-base md:text-lg mb-8 text-white/80">
              Đăng ký ngay hôm nay để trở thành thành viên của CLB Blockchain
              UTC và bắt đầu hành trình khám phá công nghệ đột phá này!
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Đăng ký tham gia CLB
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                  Click đi ngại gì
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white via-white/80 to-white/20"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Đối tác & Nhà tài trợ
            </h2>
            <motion.div
              className="w-20 h-1 bg-[#004987] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="overflow-hidden whitespace-nowrap relative">
            <motion.div
              className="inline-flex"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(32)].map((_, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 mx-4 w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner+${
                      index + 1
                    }`}
                    alt={`Partner ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
