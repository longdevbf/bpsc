"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Star,
  Award,
  Users,
  Handshake,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedDivider } from "@/components/ui/animated-section";

// Mock data cho đối tác
const partnersData = [
  {
    id: 1,
    name: "Công ty Công nghệ Blockchain A",
    logo: "/placeholder.svg?height=100&width=200&text=Partner+1",
    type: "Công nghệ",
    description:
      "Đối tác chiến lược trong lĩnh vực phát triển công nghệ Blockchain và Web3",
    website: "https://example.com",
    email: "contact@example.com",
    phone: "+84 123 456 789",
    address: "Hà Nội, Việt Nam",
    achievements: [
      "Top 10 công ty công nghệ Blockchain hàng đầu Việt Nam",
      "Đối tác chiến lược của nhiều dự án Web3 lớn",
      "Đơn vị đào tạo chuyên sâu về Blockchain",
    ],
    collaboration: [
      "Tổ chức workshop và seminar",
      "Cung cấp cơ hội thực tập",
      "Hỗ trợ dự án nghiên cứu",
    ],
    status: "active",
  },
  {
    id: 2,
    name: "Tập đoàn Tài chính B",
    logo: "/placeholder.svg?height=100&width=200&text=Partner+2",
    type: "Tài chính",
    description:
      "Đối tác trong lĩnh vực tài chính và đầu tư vào công nghệ Blockchain",
    website: "https://example.com",
    email: "contact@example.com",
    phone: "+84 123 456 789",
    address: "TP. Hồ Chí Minh, Việt Nam",
    achievements: [
      "Top 5 công ty tài chính công nghệ",
      "Đầu tư vào nhiều dự án Blockchain tiềm năng",
      "Đối tác chiến lược của các sàn giao dịch lớn",
    ],
    collaboration: [
      "Tài trợ cho các sự kiện",
      "Mentoring cho dự án khởi nghiệp",
      "Cung cấp học bổng cho sinh viên",
    ],
    status: "active",
  },
  {
    id: 3,
    name: "Viện Nghiên cứu Công nghệ C",
    logo: "/placeholder.svg?height=100&width=200&text=Partner+3",
    type: "Nghiên cứu",
    description: "Đối tác nghiên cứu và phát triển công nghệ Blockchain",
    website: "https://example.com",
    email: "contact@example.com",
    phone: "+84 123 456 789",
    address: "Đà Nẵng, Việt Nam",
    achievements: [
      "Viện nghiên cứu hàng đầu về Blockchain",
      "Nhiều công trình nghiên cứu được công bố quốc tế",
      "Đối tác của nhiều trường đại học lớn",
    ],
    collaboration: [
      "Hợp tác nghiên cứu",
      "Tổ chức hội thảo khoa học",
      "Đào tạo chuyên sâu",
    ],
    status: "active",
  },
];

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<
    (typeof partnersData)[0] | null
  >(null);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lọc đối tác theo type và search query
  const filteredPartners = partnersData.filter((partner) => {
    const matchesType = selectedType === "all" || partner.type === selectedType;
    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
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

  // Infinite scroll animation for hero section
  const infiniteScrollVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
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
          {/* Animated blobs */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Đối tác & Nhà tài trợ
            </motion.h1>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cùng với các đối tác chiến lược, chúng tôi xây dựng cộng đồng
              Blockchain mạnh mẽ
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
        <div className="container px-4 md:px-6">
          {/* Filters and Search */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              {/* Search */}
              <motion.div
                className="relative w-full md:w-96"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Tìm kiếm đối tác..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent transition-all duration-300"
                />
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </motion.div>

              {/* Type Filter */}
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {["all", "Công nghệ", "Tài chính", "Nghiên cứu"].map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className="transition-all duration-300"
                  >
                    {type === "all" ? "Tất cả" : type}
                  </Button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Logo */}
                <div className="relative h-48 bg-gray-100 overflow-hidden group">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-[#004987] text-white rounded-full">
                      {partner.type}
                    </span>
                    {partner.status === "active" && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Đang hợp tác
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#004987] mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.collaboration.slice(0, 2).map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                      onClick={() => setSelectedPartner(partner)}
                    >
                      Xem chi tiết
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href={partner.website} target="_blank">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-[#004987] transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredPartners.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                Không tìm thấy đối tác phù hợp với tiêu chí tìm kiếm.
              </p>
            </motion.div>
          )}

          {/* Become Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#004987] to-[#0070b8] rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Trở thành đối tác của chúng tôi
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Hãy cùng chúng tôi xây dựng cộng đồng Blockchain mạnh mẽ và phát
                triển bền vững
              </p>
              <Button
                size="lg"
                className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-48 bg-gray-100 relative">
                  <Image
                    src={selectedPartner.logo}
                    alt={selectedPartner.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-colors duration-300"
                  onClick={() => setSelectedPartner(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 text-sm font-medium bg-[#004987] text-white rounded-full">
                    {selectedPartner.type}
                  </span>
                  {selectedPartner.status === "active" && (
                    <span className="px-2 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                      Đang hợp tác
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-[#004987] mb-4">
                  {selectedPartner.name}
                </h3>

                <p className="text-gray-600 mb-6">
                  {selectedPartner.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#004987] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Thành tựu nổi bật
                    </h4>
                    <ul className="space-y-2">
                      {selectedPartner.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <Star className="w-4 h-4 text-[#004987] mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#004987] mb-3 flex items-center gap-2">
                      <Handshake className="w-5 h-5" />
                      Hợp tác
                    </h4>
                    <ul className="space-y-2">
                      {selectedPartner.collaboration.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <Users className="w-4 h-4 text-[#004987] mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe className="w-4 h-4 text-[#004987]" />
                    <Link
                      href={selectedPartner.website}
                      target="_blank"
                      className="hover:text-[#004987] transition-colors duration-300"
                    >
                      {selectedPartner.website}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-[#004987]" />
                    <a
                      href={`mailto:${selectedPartner.email}`}
                      className="hover:text-[#004987] transition-colors duration-300"
                    >
                      {selectedPartner.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-[#004987]" />
                    <a
                      href={`tel:${selectedPartner.phone}`}
                      className="hover:text-[#004987] transition-colors duration-300"
                    >
                      {selectedPartner.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#004987]" />
                  <span>{selectedPartner.address}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
