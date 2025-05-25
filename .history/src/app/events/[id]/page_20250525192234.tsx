"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  Share2,
  BookmarkPlus
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Mock data cho các sự kiện (trong thực tế sẽ lấy từ API/database)
const eventsData = [
  {
    id: 1,
    title: "Workshop: Blockchain Fundamentals",
    date: "20/04/2024",
    time: "14:00 - 17:00",
    location: "Phòng A1.1, Trường Đại học Giao thông Vận tải",
    image: "/placeholder.svg?height=400&width=600&text=Workshop+Blockchain",
    description: "Tìm hiểu về công nghệ Blockchain từ cơ bản đến nâng cao với các chuyên gia hàng đầu.",
    fullDescription: `Trong workshop này, chúng ta sẽ đi sâu vào các khái niệm cơ bản của công nghệ Blockchain và cách nó đang thay đổi thế giới tài chính và công nghệ.

Các nội dung chính:
• Tổng quan về Blockchain và công nghệ sổ cái phân tán
• Cơ chế hoạt động của Bitcoin và Ethereum
• Smart Contracts và ứng dụng thực tế
• Bảo mật và bảo vệ tài sản số
• Xu hướng phát triển của Blockchain trong tương lai

Đối tượng tham gia:
• Sinh viên đam mê công nghệ Blockchain
• Nhà phát triển muốn tìm hiểu về Web3
• Người mới bắt đầu trong lĩnh vực Crypto

Diễn giả:
• TS. Nguyễn Văn A - Chuyên gia Blockchain
• ThS. Trần Thị B - Nhà phát triển Smart Contract`,
    category: "Workshop",
    attendees: 50,
    status: "upcoming",
    registrationLink: "/events/register/1",
    speakers: [
      {
        name: "TS. Nguyễn Văn A",
        role: "Chuyên gia Blockchain",
        image: "/placeholder.svg?height=100&width=100&text=Speaker+1",
        bio: "Chuyên gia với 5 năm kinh nghiệm trong lĩnh vực Blockchain và DeFi"
      },
      {
        name: "ThS. Trần Thị B",
        role: "Nhà phát triển Smart Contract",
        image: "/placeholder.svg?height=100&width=100&text=Speaker+2",
        bio: "Chuyên gia phát triển Smart Contract với nhiều dự án thành công"
      }
    ],
    schedule: [
      {
        time: "14:00 - 14:30",
        title: "Đăng ký và khai mạc",
        description: "Check-in và phát tài liệu"
      },
      {
        time: "14:30 - 15:30",
        title: "Tổng quan về Blockchain",
        description: "Giới thiệu các khái niệm cơ bản"
      },
      {
        time: "15:30 - 15:45",
        title: "Nghỉ giải lao",
        description: "Coffee break"
      },
      {
        time: "15:45 - 16:45",
        title: "Smart Contracts và ứng dụng",
        description: "Thực hành và demo"
      },
      {
        time: "16:45 - 17:00",
        title: "Q&A và kết thúc",
        description: "Hỏi đáp và tổng kết"
      }
    ]
  },
  // Thêm các sự kiện khác tương tự...
];

export default function EventDetailPage() {
  const params = useParams();
  const eventId = parseInt(params.id as string);
  const [event, setEvent] = useState<any>(null);
  const [relatedEvents, setRelatedEvents] = useState<any[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Trong thực tế sẽ gọi API để lấy dữ liệu
    const currentEvent = eventsData.find(e => e.id === eventId);
    if (currentEvent) {
      setEvent(currentEvent);
      // Lấy các sự kiện liên quan (cùng category)
      const related = eventsData
        .filter(e => e.id !== eventId && e.category === currentEvent.category)
        .slice(0, 3);
      setRelatedEvents(related);
    }
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Đang tải thông tin sự kiện...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#004987] to-[#0070b8] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004987]/90 to-[#0070b8]/90" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/events">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại danh sách sự kiện
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  event.status === "upcoming" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {event.status === "upcoming" ? "Sắp diễn ra" : "Đã kết thúc"}
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  {event.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {event.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center text-white/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} người tham gia</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href={event.registrationLink}>
                  <Button
                    size="lg"
                    className="bg-white text-[#004987] hover:bg-gray-100"
                  >
                    Đăng ký tham gia
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Chia sẻ
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Lưu lại
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-[#004987] mb-6">
                  Giới thiệu sự kiện
                </h2>
                <div className="prose max-w-none">
                  {event.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Schedule */}
                <h2 className="text-2xl font-bold text-[#004987] mt-12 mb-6">
                  Lịch trình
                </h2>
                <div className="space-y-4">
                  {event.schedule.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-32 flex-shrink-0">
                        <span className="text-sm font-medium text-[#004987]">
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Speakers */}
                <h2 className="text-2xl font-bold text-[#004987] mt-12 mb-6">
                  Diễn giả
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker: any, index: number) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {speaker.name}
                        </h3>
                        <p className="text-sm text-[#004987] mb-2">
                          {speaker.role}
                        </p>
                        <p className="text-sm text-gray-600">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-8"
              >
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#004987] mb-4">
                    Thông tin sự kiện
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Thời gian
                      </p>
                      <p className="text-gray-900">
                        {event.date} | {event.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Địa điểm
                      </p>
                      <p className="text-gray-900">
                        {event.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Số lượng tham gia
                      </p>
                      <p className="text-gray-900">
                        {event.attendees} người
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Danh mục
                      </p>
                      <p className="text-gray-900">
                        {event.category}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href={event.registrationLink}>
                      <Button
                        className="w-full bg-[#004987] text-white hover:bg-[#003d6d]"
                      >
                        Đăng ký tham gia
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004987] mb-8">
              Sự kiện liên quan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent) => (
                <motion.div
                  key={relatedEvent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={relatedEvent.image}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        relatedEvent.status === "upcoming" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {relatedEvent.status === "upcoming" ? "Sắp diễn ra" : "Đã kết thúc"}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {relatedEvent.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#004987] mb-3">
                      {relatedEvent.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{relatedEvent.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{relatedEvent.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="line-clamp-1">{relatedEvent.location}</span>
                      </div>
                    </div>

                    <Link href={`/events/${relatedEvent.id}`}>
                      <Button
                        variant="outline"
                        className="w-full text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-colors duration-300"
                      >
                        Xem chi tiết
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 