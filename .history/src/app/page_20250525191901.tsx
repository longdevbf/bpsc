"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

// Dynamic import cho Lottie Player để tránh lỗi SSR
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => ({ default: mod.Player })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-lg w-full h-64"></div>
      </div>
    )
  }
);

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

      {/* ...existing code... */}
    </div>
  );
}