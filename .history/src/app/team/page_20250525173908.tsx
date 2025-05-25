"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  X,
  Search,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedDivider,
  AnimatedCard,
  AnimatedImage,
} from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail } from "lucide-react";

// Định nghĩa type cho member và team
type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
};

type Team = {
  title: string;
  description: string;
  members: Member[];
};

export default function TeamPage() {
  const [advisorsPage, setAdvisorsPage] = useState(1);
  const [technicalPage, setTechnicalPage] = useState(1);
  const [communicationPage, setCommPage] = useState(1);
  const [logisticsPage, setLogisticsPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 9; // Hiển thị 9 thành viên mỗi trang (3x3 grid)

  // Số lượng thành viên hiển thị trên mỗi trang
  const advisorsPerPage = 2;
  const itemsPerPage = 6;

  // Dữ liệu thành viên
  const advisors = [
    {
      name: "TS. Nguyễn Văn R",
      role: "Giảng viên Khoa CNTT",
      org: "Trường Đại học Giao thông Vận tải",
    },
    {
      name: "TS. Trần Thị S",
      role: "Chuyên gia Blockchain",
      org: "Viện Nghiên cứu Công nghệ",
    },
    {
      name: "TS. Lê Văn A1",
      role: "Giảng viên Khoa CNTT",
      org: "Trường Đại học Bách Khoa Hà Nội",
    },
    {
      name: "TS. Phạm Thị A2",
      role: "Chuyên gia Blockchain",
      org: "Viện Công nghệ Thông tin",
    },
    {
      name: "TS. Hoàng Văn A3",
      role: "Giảng viên",
      org: "Đại học Quốc gia Hà Nội",
    },
    {
      name: "TS. Vũ Thị A4",
      role: "Chuyên gia Tài chính",
      org: "Ngân hàng Nhà nước",
    },
  ];

  const technicalMembers = [
    { name: "Nguyễn Văn E", role: "Phó ban Kỹ thuật" },
    { name: "Trần Văn F", role: "Thành viên" },
    { name: "Lê Thị G", role: "Thành viên" },
    { name: "Phạm Văn H", role: "Thành viên" },
    { name: "Hoàng Thị I", role: "Thành viên" },
    { name: "Vũ Văn K", role: "Thành viên" },
    { name: "Nguyễn Văn X1", role: "Thành viên" },
    { name: "Trần Văn X2", role: "Thành viên" },
    { name: "Lê Thị X3", role: "Thành viên" },
    { name: "Phạm Văn X4", role: "Thành viên" },
    { name: "Hoàng Thị X5", role: "Thành viên" },
    { name: "Vũ Văn X6", role: "Thành viên" },
  ];

  const commMembers = [
    { name: "Nguyễn Thị L", role: "Phó ban Truyền thông" },
    { name: "Trần Văn M", role: "Thành viên" },
    { name: "Lê Văn N", role: "Thành viên" },
    { name: "Phạm Thị O", role: "Thành viên" },
    { name: "Hoàng Văn P", role: "Thành viên" },
    { name: "Vũ Thị Q", role: "Thành viên" },
    { name: "Nguyễn Thị Y1", role: "Thành viên" },
    { name: "Trần Văn Y2", role: "Thành viên" },
    { name: "Lê Văn Y3", role: "Thành viên" },
    { name: "Phạm Thị Y4", role: "Thành viên" },
    { name: "Hoàng Văn Y5", role: "Thành viên" },
    { name: "Vũ Thị Y6", role: "Thành viên" },
  ];

  const logisticsMembers = [
    { name: "Nguyễn Văn R", role: "Trưởng ban Hậu cần" },
    { name: "Trần Thị S", role: "Phó ban Hậu cần" },
    { name: "Lê Văn T", role: "Thành viên" },
    { name: "Phạm Thị U", role: "Thành viên" },
    { name: "Hoàng Văn V", role: "Thành viên" },
    { name: "Vũ Thị X", role: "Thành viên" },
    { name: "Nguyễn Văn Z1", role: "Thành viên" },
    { name: "Trần Thị Z2", role: "Thành viên" },
    { name: "Lê Văn Z3", role: "Thành viên" },
    { name: "Phạm Thị Z4", role: "Thành viên" },
    { name: "Hoàng Văn Z5", role: "Thành viên" },
    { name: "Vũ Thị Z6", role: "Thành viên" },
  ];

  // Tính toán số trang
  const totalAdvisorsPages = Math.ceil(advisors.length / advisorsPerPage);
  const totalTechnicalPages = Math.ceil(technicalMembers.length / itemsPerPage);
  const totalCommPages = Math.ceil(commMembers.length / itemsPerPage);
  const totalLogisticsPages = Math.ceil(logisticsMembers.length / itemsPerPage);

  // Lấy dữ liệu cho trang hiện tại
  const currentAdvisors = advisors.slice(
    (advisorsPage - 1) * advisorsPerPage,
    advisorsPage * advisorsPerPage
  );
  const currentTechnical = technicalMembers.slice(
    (technicalPage - 1) * itemsPerPage,
    technicalPage * itemsPerPage
  );
  const currentComm = commMembers.slice(
    (communicationPage - 1) * itemsPerPage,
    communicationPage * itemsPerPage
  );
  const currentLogistics = logisticsMembers.slice(
    (logisticsPage - 1) * itemsPerPage,
    logisticsPage * itemsPerPage
  );

  const teams: Team[] = [
    {
      title: "Ban Chủ nhiệm",
      description: "Đội ngũ lãnh đạo CLB Blockchain UTC nhiệm kỳ 2023-2024",
      members: [
        {
          name: "Nguyễn Văn A",
          role: "Chủ nhiệm CLB",
          image: "/placeholder.svg?height=400&width=300&text=Nguyen+Van+A",
          bio: "Sinh viên năm 4 ngành Công nghệ thông tin, chuyên sâu về Blockchain Development và Smart Contracts. Đam mê nghiên cứu và phát triển các ứng dụng phi tập trung (dApps).",
          achievements: [
            "Top 10 cuộc thi Hackathon Blockchain 2023",
            "Chứng chỉ AWS Certified Blockchain Developer",
            "Speaker tại các sự kiện Blockchain lớn",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
        {
          name: "Trần Thị B",
          role: "Phó Chủ nhiệm",
          image: "/placeholder.svg?height=400&width=300&text=Tran+Thi+B",
          bio: "Sinh viên năm 3 ngành Kỹ thuật phần mềm, chuyên sâu về Smart Contracts và DeFi. Có kinh nghiệm trong việc tổ chức và điều hành các sự kiện về Blockchain.",
          achievements: [
            "Giải Nhì cuộc thi Blockchain UTC 2023",
            "Chứng chỉ Ethereum Developer",
            "Thành viên tích cực trong các dự án DeFi",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
      ],
    },
    {
      title: "Ban Kỹ thuật",
      description: "Đội ngũ phát triển và nghiên cứu công nghệ Blockchain",
      members: [
        {
          name: "Lê Văn C",
          role: "Trưởng ban Kỹ thuật",
          image: "/placeholder.svg?height=400&width=300&text=Le+Van+C",
          bio: "Sinh viên năm 4 ngành Công nghệ thông tin, chuyên về Blockchain Development và Web3. Có kinh nghiệm trong việc phát triển các dự án NFT và DeFi.",
          achievements: [
            "Phát triển dApp NFT Marketplace",
            "Chứng chỉ Solidity Developer",
            "Mentor cho các workshop Blockchain",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
        {
          name: "Phạm Thị D",
          role: "Phó ban Kỹ thuật",
          image: "/placeholder.svg?height=400&width=300&text=Pham+Thi+D",
          bio: "Sinh viên năm 3 ngành Kỹ thuật phần mềm, chuyên về dApp Development và Smart Contract Security. Đam mê nghiên cứu về bảo mật trong Blockchain.",
          achievements: [
            "Chứng chỉ Smart Contract Auditor",
            "Top 5 cuộc thi CTF Blockchain",
            "Speaker tại các workshops về Smart Contract Security",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
      ],
    },
    {
      title: "Ban Truyền thông",
      description: "Đội ngũ phụ trách truyền thông, sự kiện và đối ngoại",
      members: [
        {
          name: "Hoàng Văn E",
          role: "Trưởng ban Truyền thông",
          image: "/placeholder.svg?height=400&width=300&text=Hoang+Van+E",
          bio: "Sinh viên năm 3 ngành Marketing, chuyên về Digital Marketing và Content Creation. Có kinh nghiệm trong việc tổ chức các sự kiện về Blockchain và Web3.",
          achievements: [
            "Quản lý cộng đồng Blockchain UTC",
            "Tổ chức thành công 10+ sự kiện lớn",
            "Chuyên gia Digital Marketing",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
        {
          name: "Đỗ Thị F",
          role: "Phó ban Truyền thông",
          image: "/placeholder.svg?height=400&width=300&text=Do+Thi+F",
          bio: "Sinh viên năm 3 ngành Truyền thông, chuyên về Social Media và Event Planning. Có kinh nghiệm trong việc xây dựng chiến lược truyền thông cho các dự án Blockchain.",
          achievements: [
            "Quản lý các kênh truyền thông của CLB",
            "Tổ chức workshop Blockchain cho 500+ sinh viên",
            "Content Creator về Blockchain và Web3",
          ],
          social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:example@email.com",
          },
        },
      ],
    },
  ];

  // Thêm dữ liệu thành viên đầy đủ cho mỗi ban
  const allMembers = {
    "Ban Chủ nhiệm": [
      // Chỉ giữ lại thành viên chính của Ban Chủ nhiệm
      {
        name: "Nguyễn Văn A",
        role: "Chủ nhiệm CLB",
        image: "/placeholder.svg?height=400&width=300&text=Nguyen+Van+A",
        bio: "Sinh viên năm 4 ngành Công nghệ thông tin, chuyên sâu về Blockchain Development và Smart Contracts. Đam mê nghiên cứu và phát triển các ứng dụng phi tập trung (dApps).",
        achievements: [
          "Top 10 cuộc thi Hackathon Blockchain 2023",
          "Chứng chỉ AWS Certified Blockchain Developer",
          "Speaker tại các sự kiện Blockchain lớn",
        ],
        social: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          email: "mailto:example@email.com",
        },
      },
      {
        name: "Trần Thị B",
        role: "Phó Chủ nhiệm",
        image: "/placeholder.svg?height=400&width=300&text=Tran+Thi+B",
        bio: "Sinh viên năm 3 ngành Kỹ thuật phần mềm, chuyên sâu về Smart Contracts và DeFi. Có kinh nghiệm trong việc tổ chức và điều hành các sự kiện về Blockchain.",
        achievements: [
          "Giải Nhì cuộc thi Blockchain UTC 2023",
          "Chứng chỉ Ethereum Developer",
          "Thành viên tích cực trong các dự án DeFi",
        ],
        social: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          email: "mailto:example@email.com",
        },
      },
    ],
    "Ban Kỹ thuật": [
      ...teams[1].members,
      // Thêm nhiều thành viên mẫu cho Ban Kỹ thuật
      ...Array.from({ length: 25 }, (_, i) => ({
        name: `Trần Văn ${String.fromCharCode(65 + i)}`,
        role: "Thành viên",
        image: `/placeholder.svg?height=400&width=300&text=Tech+${i + 1}`,
        bio: "Sinh viên chuyên ngành Công nghệ thông tin, đam mê phát triển ứng dụng Blockchain.",
        achievements: [
          "Phát triển Smart Contract",
          "Tham gia hackathon Blockchain",
        ],
        social: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          email: "mailto:example@email.com",
        },
      })),
    ],
    "Ban Truyền thông": [
      ...teams[2].members,
      // Thêm nhiều thành viên mẫu cho Ban Truyền thông
      ...Array.from({ length: 15 }, (_, i) => ({
        name: `Lê Thị ${String.fromCharCode(65 + i)}`,
        role: "Thành viên",
        image: `/placeholder.svg?height=400&width=300&text=Comm+${i + 1}`,
        bio: "Sinh viên chuyên ngành Marketing, đam mê truyền thông và tổ chức sự kiện.",
        achievements: ["Quản lý fanpage", "Tổ chức workshop"],
        social: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          email: "mailto:example@email.com",
        },
      })),
    ],
  };

  // Hàm tìm kiếm và lọc thành viên
  const filteredMembers = useMemo(() => {
    if (!selectedTeam) return [];
    const members =
      allMembers[selectedTeam.title as keyof typeof allMembers] || [];
    if (!searchQuery) return members;

    const query = searchQuery.toLowerCase();
    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.bio.toLowerCase().includes(query)
    );
  }, [selectedTeam, searchQuery]);

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const paginatedMembers = useMemo(() => {
    const start = (currentPage - 1) * membersPerPage;
    return filteredMembers.slice(start, start + membersPerPage);
  }, [filteredMembers, currentPage]);

  const openModal = (team: Team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#004987] to-[#0070b8] text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Đội ngũ của chúng tôi
            </AnimatedHeading>
            <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Gặp gỡ những người đang xây dựng và phát triển cộng đồng
              Blockchain UTC
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Sections */}
      {teams.map((team, teamIndex) => (
        <section
          key={teamIndex}
          className={`py-16 md:py-24 ${
            teamIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container px-4 md:px-6">
            <AnimatedSection className="text-center mb-12">
              <AnimatedHeading className="text-2xl md:text-3xl font-bold text-[#004987] mb-4">
                {team.title}
              </AnimatedHeading>
              <AnimatedDivider />
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {team.description}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.members.map((member, memberIndex) => (
                <AnimatedCard
                  key={memberIndex}
                  index={memberIndex}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Phần ảnh */}
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Phần thông tin */}
                    <div className="flex-1 p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-[#004987] mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 mb-3">{member.role}</p>
                        <p className="text-sm text-gray-600 mb-4">
                          {member.bio}
                        </p>
                      </div>

                      {/* Thành tích */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#004987] mb-2">
                          Thành tích nổi bật:
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-[#004987] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3 mt-4">
                        <Link
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-4 h-4 text-[#004987]" />
                          </motion.div>
                        </Link>
                        <Link
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-[#004987]" />
                          </motion.div>
                        </Link>
                        <Link href={member.social.email}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Mail className="w-4 h-4 text-[#004987]" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Nút Xem thêm thành viên */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="text-[#004987] border-[#004987] hover:bg-[#004987] hover:text-white transition-all duration-300"
                onClick={() => openModal(team)}
              >
                Xem thêm thành viên
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* Modal hiển thị danh sách thành viên đầy đủ */}
      <AnimatePresence>
        {isModalOpen && selectedTeam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-[#004987]">
                    {selectedTeam.title} - Danh sách thành viên
                  </h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm thành viên..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Ẩn thanh tìm kiếm và phân trang cho Ban Chủ nhiệm */}
                {selectedTeam.title !== "Ban Chủ nhiệm" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {paginatedMembers.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative h-48">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-[#004987]">
                              {member.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {member.role}
                            </p>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {member.bio}
                            </p>
                            <div className="flex gap-2">
                              <Link
                                href={member.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                  <Github className="w-4 h-4 text-[#004987]" />
                                </motion.div>
                              </Link>
                              <Link
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                  <Linkedin className="w-4 h-4 text-[#004987]" />
                                </motion.div>
                              </Link>
                              <Link href={member.social.email}>
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                  <Mail className="w-4 h-4 text-[#004987]" />
                                </motion.div>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pagination - chỉ hiển thị cho các ban khác */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-2 mt-8">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                          }
                          disabled={currentPage === 1}
                          className="flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Trước
                        </Button>

                        <div className="flex items-center gap-1">
                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() => setCurrentPage(page)}
                              className="w-8 h-8"
                            >
                              {page}
                            </Button>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                          }
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-1"
                        >
                          Sau
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {/* Thông tin số lượng thành viên - chỉ hiển thị cho các ban khác */}
                    <div className="text-center text-sm text-gray-500 mt-4">
                      Hiển thị {paginatedMembers.length} trong tổng số{" "}
                      {filteredMembers.length} thành viên
                    </div>
                  </>
                )}

                {/* Hiển thị đặc biệt cho Ban Chủ nhiệm */}
                {selectedTeam.title === "Ban Chủ nhiệm" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {allMembers["Ban Chủ nhiệm"].map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative h-64">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[#004987] mb-2">
                            {member.name}
                          </h3>
                          <p className="text-lg text-gray-600 mb-4">
                            {member.role}
                          </p>
                          <p className="text-gray-600 mb-4">{member.bio}</p>
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-[#004987] mb-2">
                              Thành tích nổi bật:
                            </h4>
                            <ul className="space-y-2">
                              {member.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-sm text-gray-600"
                                >
                                  <span className="w-1.5 h-1.5 bg-[#004987] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex gap-3">
                            <Link
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Github className="w-5 h-5 text-[#004987]" />
                              </motion.div>
                            </Link>
                            <Link
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Linkedin className="w-5 h-5 text-[#004987]" />
                              </motion.div>
                            </Link>
                            <Link href={member.social.email}>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Mail className="w-5 h-5 text-[#004987]" />
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Team CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#004987] to-[#0070b8] text-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <AnimatedHeading className="text-2xl md:text-3xl font-bold mb-4">
              Muốn trở thành một phần của đội ngũ?
            </AnimatedHeading>
            <p className="text-lg mb-8 text-white/90">
              Chúng tôi luôn tìm kiếm những tài năng trẻ đam mê công nghệ
              Blockchain và Web3. Hãy tham gia cùng chúng tôi để xây dựng tương
              lai của công nghệ!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-white text-[#004987] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Đăng ký tham gia
                  <ChevronRight className="ml-2 h-4 w-4" />
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
