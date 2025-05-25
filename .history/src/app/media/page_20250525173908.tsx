"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Image as ImageIcon,
  Video,
  FileText,
  Download,
  Share2,
  ChevronRight,
  Play,
  X,
  ArrowRight,
  Grid,
  List,
  Eye,
  Calendar,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedDivider } from "@/components/ui/animated-section";

// Định nghĩa types cho media
type BaseMedia = {
  id: number;
  title: string;
  type: "image" | "video" | "document";
  url: string;
  thumbnail: string;
  category: string;
  date: string;
  views: number;
  tags: string[];
};

type ImageMedia = BaseMedia & {
  type: "image";
  downloads: number;
};

type VideoMedia = BaseMedia & {
  type: "video";
  duration: string;
};

type DocumentMedia = BaseMedia & {
  type: "document";
  downloads: number;
  fileSize: string;
};

type Media = ImageMedia | VideoMedia | DocumentMedia;

// Mock data cho thư viện media
const mediaData: Media[] = [
  {
    id: 1,
    title: "Workshop Blockchain Fundamentals 2024",
    type: "image",
    url: "/placeholder.svg?height=400&width=600&text=Workshop+2024",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Workshop+2024",
    category: "Sự kiện",
    date: "20/04/2024",
    views: 1234,
    downloads: 89,
    tags: ["Workshop", "Blockchain", "Education"],
  },
  {
    id: 2,
    title: "Hackathon Blockchain UTC 2024",
    type: "image",
    url: "/placeholder.svg?height=400&width=600&text=Hackathon+2024",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Hackathon+2024",
    category: "Sự kiện",
    date: "15/04/2024",
    views: 856,
    downloads: 45,
    tags: ["Hackathon", "Blockchain", "Competition"],
  },
  {
    id: 3,
    title: "Giới thiệu về CLB Blockchain UTC",
    type: "video",
    url: "https://www.youtube.com/watch?v=example",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Intro+Video",
    category: "Giới thiệu",
    date: "10/04/2024",
    views: 2345,
    duration: "5:30",
    tags: ["Introduction", "Club", "Overview"],
  },
  {
    id: 4,
    title: "Tài liệu học Blockchain cơ bản",
    type: "document",
    url: "/documents/blockchain-basics.pdf",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Document",
    category: "Tài liệu",
    date: "05/04/2024",
    views: 567,
    downloads: 234,
    fileSize: "2.5 MB",
    tags: ["Document", "Learning", "Blockchain"],
  },
];

export default function MediaPage() {
  const [selectedType, setSelectedType] = useState<Media["type"] | "all">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lọc media theo type, category và search query
  const filteredMedia = mediaData.filter((media) => {
    const matchesType = selectedType === "all" || media.type === selectedType;
    const matchesCategory =
      selectedCategory === "all" || media.category === selectedCategory;
    const matchesSearch =
      media.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      media.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesType && matchesCategory && matchesSearch;
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
              Thư viện Media
            </motion.h1>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Khám phá hình ảnh, video và tài liệu về hoạt động của CLB
              Blockchain UTC
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Media Section */}
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
                  placeholder="Tìm kiếm media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </motion.div>

              {/* View Mode Toggle */}
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="transition-all duration-300"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="transition-all duration-300"
                >
                  <List className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Type and Category Filters */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Type Filter */}
              <div className="flex gap-2">
                {["all", "image", "video", "document"].map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() =>
                      setSelectedType(type as Media["type"] | "all")
                    }
                    className="flex items-center gap-2 transition-all duration-300"
                  >
                    {type === "all" ? (
                      <Filter className="w-4 h-4" />
                    ) : type === "image" ? (
                      <ImageIcon className="w-4 h-4" />
                    ) : type === "video" ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                    {type === "all"
                      ? "Tất cả"
                      : type === "image"
                      ? "Hình ảnh"
                      : type === "video"
                      ? "Video"
                      : "Tài liệu"}
                  </Button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {["all", "Sự kiện", "Giới thiệu", "Tài liệu"].map(
                  (category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                      className="transition-all duration-300"
                    >
                      {category === "all" ? "Tất cả danh mục" : category}
                    </Button>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Media Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-4"
            }
          >
            {filteredMedia.map((media) => (
              <motion.div
                key={media.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  viewMode === "list" ? "flex gap-4" : ""
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative ${
                    viewMode === "list" ? "w-48" : "h-48"
                  } overflow-hidden group`}
                >
                  <Image
                    src={media.thumbnail}
                    alt={media.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-[#004987] text-white rounded-full">
                      {media.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {media.type === "image" ? (
                      <ImageIcon className="w-4 h-4 text-gray-500" />
                    ) : media.type === "video" ? (
                      <Video className="w-4 h-4 text-gray-500" />
                    ) : (
                      <FileText className="w-4 h-4 text-gray-500" />
                    )}
                    <span className="text-sm text-gray-500">
                      {media.type === "image"
                        ? "Hình ảnh"
                        : media.type === "video"
                        ? "Video"
                        : "Tài liệu"}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#004987] mb-2 line-clamp-2">
                    {media.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{media.date}</span>
                    </div>
                    {media.type === "video" && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{media.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {media.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{media.views} lượt xem</span>
                      </div>
                      {media.type === "image" && (
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          <span>{media.downloads} lượt tải</span>
                        </div>
                      )}
                      {media.type === "document" && (
                        <>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            <span>{media.downloads} lượt tải</span>
                          </div>
                          <span>{media.fileSize}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.type === "video" ? "Xem video" : "Xem chi tiết"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-[#004987] transition-colors duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      {(media.type === "image" ||
                        media.type === "document") && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-[#004987] transition-colors duration-300"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredMedia.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                Không tìm thấy media phù hợp với tiêu chí tìm kiếm.
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
              className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Xem thêm
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Media Preview Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedMedia.type === "video" ? (
                  <div className="aspect-video bg-black">
                    <iframe
                      src={selectedMedia.url}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative h-[60vh]">
                    <Image
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-colors duration-300"
                  onClick={() => setSelectedMedia(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#004987] mb-4">
                  {selectedMedia.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{selectedMedia.date}</span>
                  </div>
                  {selectedMedia.type === "video" && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{selectedMedia.duration}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMedia.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{selectedMedia.views} lượt xem</span>
                    </div>
                    {selectedMedia.type === "image" && (
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{selectedMedia.downloads} lượt tải</span>
                      </div>
                    )}
                    {selectedMedia.type === "document" && (
                      <>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          <span>{selectedMedia.downloads} lượt tải</span>
                        </div>
                        <span>{selectedMedia.fileSize}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
