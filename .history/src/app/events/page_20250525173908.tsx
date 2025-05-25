"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronRight,
  ExternalLink,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedDivider,
  AnimatedCard,
} from "@/components/ui/animated-section";

// Mock data cho các sự kiện
const events = [
  {
    id: 1,
    title: "Workshop: Blockchain Fundamentals",
    date: "20/04/2024",
    time: "14:00 - 17:00",
    location: "Phòng A1.1, Trường Đại học Giao thông Vận tải",
    image: "/placeholder.svg?height=400&width=600&text=Workshop+Blockchain",
    description:
      "Tìm hiểu về công nghệ Blockchain từ cơ bản đến nâng cao với các chuyên gia hàng đầu.",
    category: "Workshop",
    attendees: 50,
    status: "upcoming",
    registrationLink: "/events/register/1",
  },
  {
    id: 2,
    title: "Hackathon: Build Your First dApp",
    date: "15/05/2024",
    time: "08:00 - 20:00",
    location: "Phòng Lab CNTT, Trường Đại học Giao thông Vận tải",
    image: "/placeholder.svg?height=400&width=600&text=Hackathon+dApp",
    description:
      "Thử thách xây dựng ứng dụng phi tập trung đầu tiên của bạn trong 48 giờ.",
    category: "Hackathon",
    attendees: 100,
    status: "upcoming",
    registrationLink: "/events/register/2",
  },
  {
    id: 3,
    title: "Seminar: Crypto Market Insights",
    date: "10/03/2024",
    time: "09:00 - 11:30",
    location: "Hội trường A, Trường Đại học Giao thông Vận tải",
    image: "/placeholder.svg?height=400&width=600&text=Crypto+Market",
    description: "Phân tích thị trường tiền điện tử và xu hướng đầu tư 2024.",
    category: "Seminar",
    attendees: 150,
    status: "past",
    registrationLink: "/events/register/3",
  },
  // Thêm các sự kiện khác...
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lọc sự kiện theo category và search query
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#004987] to-[#0070b8] text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sự kiện Blockchain UTC
            </AnimatedHeading>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Khám phá các sự kiện, workshop và hackathon về Blockchain và Web3
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
        <div className="container px-4 md:px-6">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Tìm kiếm sự kiện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {["all", "Workshop", "Hackathon", "Seminar"].map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === "all" ? "Tất cả" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{event.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        event.status === "upcoming"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.status === "upcoming"
                        ? "Sắp diễn ra"
                        : "Đã kết thúc"}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#004987] mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees} người tham gia</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={event.registrationLink}>
                      <Button
                        variant="outline"
                        className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                      >
                        Đăng ký tham gia
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    {event.status === "past" && (
                      <Link href={`/events/${event.id}`}>
                        <Button
                          variant="ghost"
                          className="text-gray-600 hover:text-[#004987] transition-colors duration-300"
                        >
                          Xem chi tiết
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                Không tìm thấy sự kiện phù hợp với tiêu chí tìm kiếm.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#004987] to-[#0070b8] text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-2xl md:text-3xl font-bold mb-4">
              Muốn tổ chức sự kiện với chúng tôi?
            </AnimatedHeading>
            <p className="text-lg mb-8 text-white/90">
              Liên hệ ngay để hợp tác tổ chức các sự kiện về Blockchain và Web3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Liên hệ ngay
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
