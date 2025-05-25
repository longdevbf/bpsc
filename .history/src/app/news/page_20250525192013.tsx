"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Tag,
  Share2,
  BookmarkPlus,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedDivider } from "@/components/ui/animated-section";
// Mock data cho tin tức
const newsData = [
  {
    id: 1,
    title:
      "CLB Blockchain UTC tổ chức thành công Workshop Blockchain Fundamentals",
    slug: "workshop-blockchain-fundamentals",
    date: "20/04/2024",
    time: "14:00",
    image: "/placeholder.svg?height=400&width=600&text=Workshop+Success",
    excerpt:
      "Workshop Blockchain Fundamentals đã thu hút hơn 100 sinh viên tham gia, mang đến những kiến thức cơ bản về công nghệ Blockchain và ứng dụng thực tế.",
    content: `CLB Blockchain UTC vừa tổ chức thành công Workshop Blockchain Fundamentals với sự tham gia của hơn 100 sinh viên đến từ các trường đại học trên địa bàn Hà Nội.

Workshop đã mang đến những kiến thức cơ bản về công nghệ Blockchain, từ lý thuyết đến thực hành, giúp các bạn sinh viên có cái nhìn tổng quan về công nghệ đang làm mưa làm gió này.

Các nội dung chính của workshop:
• Tổng quan về Blockchain và công nghệ sổ cái phân tán
• Cơ chế hoạt động của Bitcoin và Ethereum
• Smart Contracts và ứng dụng thực tế
• Demo xây dựng Smart Contract đơn giản

Đặc biệt, workshop có sự tham gia của các diễn giả là chuyên gia trong lĩnh vực Blockchain, mang đến những chia sẻ thực tế và hữu ích cho các bạn sinh viên.`,
    category: "Sự kiện",
    tags: ["Workshop", "Blockchain", "Education"],
    author: {
      name: "Nguyễn Văn A",
      role: "Ban Truyền thông",
      image: "/placeholder.svg?height=100&width=100&text=Author+1",
    },
    readTime: "5 phút",
    views: 1234,
    likes: 89,
    comments: 23,
  },
  {
    id: 2,
    title: "CLB Blockchain UTC ký kết hợp tác với công ty công nghệ hàng đầu",
    slug: "partnership-announcement",
    date: "15/04/2024",
    time: "10:00",
    image: "/placeholder.svg?height=400&width=600&text=Partnership",
    excerpt:
      "CLB Blockchain UTC vừa ký kết thỏa thuận hợp tác chiến lược với một công ty công nghệ hàng đầu trong lĩnh vực Blockchain.",
    category: "Tin tức",
    tags: ["Partnership", "Collaboration", "Business"],
    author: {
      name: "Trần Thị B",
      role: "Ban Đối ngoại",
      image: "/placeholder.svg?height=100&width=100&text=Author+2",
    },
    readTime: "3 phút",
    views: 856,
    likes: 45,
    comments: 12,
  },
  // Thêm các tin tức khác...
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lọc tin tức theo category và search query
  const filteredNews = newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "all" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Tin tức & Sự kiện
            </h1>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />

            <p className="text-lg md:text-xl text-white/90 mb-8">
              Cập nhật những tin tức mới nhất về hoạt động của CLB Blockchain
              UTC
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
        <div className="container px-4 md:px-6">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {["all", "Tin tức", "Sự kiện", "Thông báo"].map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "Tất cả" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* News Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((news) => (
              <motion.div
                key={news.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-[#004987] text-white rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-10 h-10">
                      <Image
                        src={news.author.image}
                        alt={news.author.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {news.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {news.author.role}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#004987] mb-3 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{news.views} lượt xem</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={`/news/${news.slug}`}>
                      <Button
                        variant="outline"
                        className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                      >
                        Đọc tiếp
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-[#004987]"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-[#004987]"
                      >
                        <BookmarkPlus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                Không tìm thấy tin tức phù hợp với tiêu chí tìm kiếm.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-all duration-300"
            >
              Xem thêm tin tức
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
              Đăng ký nhận tin tức
            </h2>
            <p className="text-gray-600 mb-8">
              Nhận thông báo về tin tức và sự kiện mới nhất từ CLB Blockchain
              UTC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent"
              />
              <Button className="bg-[#004987] text-white hover:bg-[#003d6d]">
                Đăng ký
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
