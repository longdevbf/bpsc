"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  CheckCircle,
  User,
  AtSign,
  FileText,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedDivider } from "@/components/ui/animated-section";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-[#004987] via-[#0070b8] to-[#00a1e0] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0  bg-cover bg-center" />
        </div>
        {/* Hero SVG Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white opacity-10 rounded-full filter blur-3xl animate-float"></div>

        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight animate-fade-in">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Liên hệ
            </span>
          </h1>
          <AnimatedDivider className="w-24 h-1 bg-white mx-auto mb-8" />
          <p
            className="text-lg max-w-2xl animate-slide-in"
            style={{ animationDelay: "200ms" }}
          >
            Kết nối với CLB Blockchain UTC - Chúng tôi luôn sẵn sàng lắng nghe
            và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full h-24 overflow-hidden bg-white">
        <svg
          className="absolute bottom-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient1)"
            fillOpacity="0.2"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                     M0,288L48,250C96,213,192,138,288,117.3C384,96,480,128,576,170.7C672,213,768,267,864,261.3C960,256,1056,192,1152,176C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                     M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004987" />
              <stop offset="50%" stopColor="#0070b8" />
              <stop offset="100%" stopColor="#00a1e0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#004987" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Decorative SVG Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none animate-float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#gradient2)"
              d="M47.5,-57.2C59.9,-46.8,67.5,-30.9,71.5,-13.7C75.5,3.5,75.8,22,68.1,36.1C60.3,50.2,44.5,59.9,27.7,65.2C10.9,70.5,-6.9,71.4,-23.1,66.5C-39.4,61.6,-54.2,50.9,-63.3,36.1C-72.4,21.3,-75.8,2.4,-71.7,-14.7C-67.6,-31.8,-56,-47.2,-42,-57.1C-28,-67,-14,-71.4,1.3,-73C16.5,-74.6,33.1,-73.4,47.5,-57.2Z"
              transform="translate(100 100)"
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#004987" />
                <stop offset="100%" stopColor="#00a1e0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#gradient3)"
              d="M42.8,-62.2C54.9,-54.3,63.6,-40.9,69.7,-26.2C75.8,-11.5,79.3,4.6,75.9,19.5C72.5,34.4,62.2,48.2,49.1,57.1C36,66,20.1,70,3.2,66.5C-13.7,63,-31.6,52,-44.9,38.5C-58.2,25,-66.9,9,-67.8,-8.1C-68.7,-25.2,-61.8,-43.5,-49.4,-51.8C-37,-60.1,-18.5,-58.4,-1.3,-56.7C15.9,-55,30.7,-53.3,42.8,-62.2Z"
              transform="translate(100 100)"
            />
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00a1e0" />
                <stop offset="100%" stopColor="#004987" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  {/* Contact Info Card SVG Background */}
                  <div className="absolute top-0 right-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-300">
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="url(#gradient4)"
                        d="M39.5,31.7C36.7,38.7,17.8,41.5,9.7,48.5C1.6,55.5,4.2,66.7,4.3,76.8C4.4,86.9,1.9,95.8,5.5,102.5C9.1,109.1,18.9,113.5,27.8,119.2C36.7,124.9,44.7,132,54.1,135.9C63.5,139.8,74.3,140.6,83.8,138.3C93.3,136,101.5,130.7,110.1,126.3C118.7,121.9,127.6,118.5,133.8,112.2C140,105.9,143.4,96.7,147.4,87.8C151.4,78.9,156,70.3,155.8,61.2C155.6,52.1,150.7,42.4,144.1,34.8C137.5,27.2,129.2,21.7,119.7,17.3C110.2,12.9,99.5,9.7,89.1,9.2C78.7,8.7,68.6,10.9,59.4,15.1C50.2,19.3,42.3,24.7,39.5,31.7Z"
                      />
                      <defs>
                        <linearGradient
                          id="gradient4"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#004987" />
                          <stop offset="100%" stopColor="#00a1e0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-[#004987] mb-8 flex items-center">
                    <span className="relative">
                      Thông tin liên hệ
                      <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-[#004987] to-[#00a1e0] rounded-full"></span>
                    </span>
                  </h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                          Địa chỉ
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Phòng 305, Nhà A9, Trường Đại học Giao thông Vận tải,
                          Số 3 Cầu Giấy, Hà Nội
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                          Email
                        </h3>
                        <p className="text-gray-600">
                          <Link
                            href="mailto:blockchain.utc@gmail.com"
                            className="hover:text-[#00a1e0] transition-colors underline decoration-dotted underline-offset-4"
                          >
                            blockchain.utc@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                          Điện thoại
                        </h3>
                        <p className="text-gray-600">
                          <Link
                            href="tel:+84987654321"
                            className="hover:text-[#00a1e0] transition-colors underline decoration-dotted underline-offset-4"
                          >
                            +84 987 654 321
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Kết nối với chúng tôi
                    </h3>
                    <div className="flex gap-4">
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="w-10 h-10 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="w-10 h-10 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="w-10 h-10 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://youtube.com"
                        target="_blank"
                        className="w-10 h-10 bg-gradient-to-br from-[#004987] to-[#00a1e0] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Youtube"
                      >
                        <Youtube className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Giờ làm việc
                    </h3>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 shadow-inner">
                      <p className="text-gray-600 mb-2 flex justify-between">
                        <span>Thứ Hai - Thứ Sáu:</span>
                        <span className="font-medium">9:00 - 17:00</span>
                      </p>
                      <p className="text-gray-600 flex justify-between">
                        <span>Thứ Bảy, Chủ Nhật:</span>
                        <span className="font-medium">Đóng cửa</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden relative hover:shadow-2xl transition-shadow duration-300">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004987]/5 via-white to-[#00a1e0]/5"></div>

                  {/* Form SVG Background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="smallGrid"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="url(#gridGradient)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <linearGradient
                          id="gridGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#004987" />
                          <stop offset="100%" stopColor="#00a1e0" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                  </div>

                  {/* Success message overlay */}
                  {isSubmitted && (
                    <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-20 animate-fade-in">
                      <div className="text-[#00a1e0] mb-4 animate-bounce-once">
                        <CheckCircle className="h-16 w-16" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Cảm ơn bạn!
                      </h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ
                        phản hồi trong thời gian sớm nhất.
                      </p>
                      {/* Success SVG */}
                      <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
                        <Image
                          src="/success-illustration.svg"
                          alt="Success"
                          width={200}
                          height={120}
                          className="drop-shadow-md"
                        />
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 p-8">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#004987] to-[#00a1e0] mb-8 flex items-center">
                      <span className="relative">
                        Gửi tin nhắn cho chúng tôi
                        <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-[#004987] to-[#00a1e0] rounded-full"></span>
                      </span>
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 relative">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
                          >
                            <User className="h-4 w-4 text-[#004987]" />
                            Họ và tên
                          </label>
                          <div
                            className={`relative transition-all duration-300 ${
                              focusedField === "name" ? "scale-[1.02]" : ""
                            }`}
                          >
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              placeholder="Nhập họ và tên của bạn"
                              className="pl-10 pr-4 py-2 border-gray-200 focus:border-[#00a1e0] focus:ring-2 focus:ring-[#00a1e0]/20 transition-all duration-300 shadow-sm rounded-lg"
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              required
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              <User className="h-4 w-4" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 relative">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
                          >
                            <AtSign className="h-4 w-4 text-[#004987]" />
                            Email
                          </label>
                          <div
                            className={`relative transition-all duration-300 ${
                              focusedField === "email" ? "scale-[1.02]" : ""
                            }`}
                          >
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              placeholder="Nhập địa chỉ email của bạn"
                              className="pl-10 pr-4 py-2 border-gray-200 focus:border-[#00a1e0] focus:ring-2 focus:ring-[#00a1e0]/20 transition-all duration-300 shadow-sm rounded-lg"
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              required
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              <AtSign className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 relative">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
                        >
                          <FileText className="h-4 w-4 text-[#004987]" />
                          Tiêu đề
                        </label>
                        <div
                          className={`relative transition-all duration-300 ${
                            focusedField === "subject" ? "scale-[1.02]" : ""
                          }`}
                        >
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleInputChange}
                            placeholder="Nhập tiêu đề tin nhắn"
                            className="pl-10 pr-4 py-2 border-gray-200 focus:border-[#00a1e0] focus:ring-2 focus:ring-[#00a1e0]/20 transition-all duration-300 shadow-sm rounded-lg"
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                            required
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <FileText className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 relative">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
                        >
                          <MessageSquare className="h-4 w-4 text-[#004987]" />
                          Nội dung tin nhắn
                        </label>
                        <div
                          className={`relative transition-all duration-300 ${
                            focusedField === "message" ? "scale-[1.02]" : ""
                          }`}
                        >
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            placeholder="Nhập nội dung tin nhắn của bạn"
                            rows={5}
                            className="pl-10 pr-4 py-2 border-gray-200 focus:border-[#00a1e0] focus:ring-2 focus:ring-[#00a1e0]/20 transition-all duration-300 shadow-sm resize-none rounded-lg"
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className={`w-full bg-gradient-to-r from-[#004987] to-[#00a1e0] hover:from-[#003b6d] hover:to-[#0081c2] text-white py-2.5 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group transform hover:scale-[1.02] hover:shadow-lg ${
                            isSubmitting ? "animate-pulse" : ""
                          }`}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Đang gửi...
                              </>
                            ) : (
                              <>
                                Gửi tin nhắn
                                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#003b6d] to-[#0081c2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                        </Button>
                      </div>
                    </form>

                    <div className="mt-8 text-sm text-gray-500 text-center">
                      <p>Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.</p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#004987]/10 to-[#00a1e0]/10 rounded-full -mr-16 -mt-16 z-0 animate-pulse-slow"></div>
                  <div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#00a1e0]/10 to-[#004987]/10 rounded-full -ml-12 -mb-12 z-0 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient5)"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                     M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,106.7C672,85,768,107,864,144C960,181,1056,235,1152,224C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                     M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </path>
          <defs>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004987" />
              <stop offset="50%" stopColor="#0070b8" />
              <stop offset="100%" stopColor="#00a1e0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Map */}
      <section className="py-16 bg-white relative">
        {/* Map SVG Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="mapPattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="url(#gradient6)" />
              </pattern>
              <linearGradient
                id="gradient6"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#004987" />
                <stop offset="100%" stopColor="#00a1e0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapPattern)" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#004987] to-[#00a1e0] mb-4 inline-block">
              Bản đồ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#004987] to-[#00a1e0] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Tìm đường đến CLB Blockchain UTC
            </p>
          </div>

          <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-xl relative transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
            {/* Map Pin SVG */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="animate-bounce-slow">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    fill="url(#pinGradient)"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    fill="url(#pinGradient)"
                  />
                  <path
                    d="M12 22C14.5 17 20 14.5 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.5 9.5 17 12 22Z"
                    stroke="url(#pinGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="pinGradient"
                      x1="4"
                      y1="2"
                      x2="20"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#004987" />
                      <stop offset="1" stopColor="#00a1e0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265586961897!2d105.7999313!3d21.028513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab424a50fff9%3A0xbe3a7f3670c0a45f!2zVHLGsOG7nW5nIMSQYcyjaSBob8yjYyBHaWFvIHRob8yBbmcgVsOqzKNuIHRhzJlp!5e0!3m2!1svi!2s!4v1650123456789!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ đến CLB Blockchain UTC"
              className="rounded-lg"
            ></iframe>

            {/* Map overlay with gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#004987]/10 via-transparent to-[#00a1e0]/10"></div>
          </div>

          {/* Quick contact button */}
          <div className="mt-6 text-center">
            <Link href="https://goo.gl/maps/1234" target="_blank">
              <Button className="bg-gradient-to-r from-[#004987] to-[#00a1e0] hover:from-[#003b6d] hover:to-[#0081c2] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <span className="flex items-center gap-2">
                  Xem chỉ đường
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 relative">
        {/* FAQ SVG Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="faqPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="url(#gradient7)"
                  strokeWidth="0.5"
                />
              </pattern>
              <linearGradient
                id="gradient7"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#004987" />
                <stop offset="100%" stopColor="#00a1e0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqPattern)" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#004987] to-[#00a1e0] mb-4 inline-block">
              Câu hỏi thường gặp
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#004987] to-[#00a1e0] mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question:
                  "CLB Blockchain UTC hoạt động vào những ngày nào trong tuần?",
                answer:
                  "CLB thường tổ chức các buổi sinh hoạt vào tối thứ 4 và sáng thứ 7 hàng tuần. Ngoài ra, còn có các sự kiện đặc biệt được thông báo trước trên các kênh truyền thông của CLB.",
              },
              {
                question: "Làm thế nào để tôi có thể tham gia CLB?",
                answer:
                  "Bạn có thể đăng ký tham gia CLB thông qua mẫu đơn trực tuyến trên trang web của chúng tôi hoặc liên hệ trực tiếp với Ban chủ nhiệm CLB qua email hoặc số điện thoại được cung cấp.",
              },
              {
                question:
                  "CLB có yêu cầu kiến thức nền tảng về Blockchain không?",
                answer:
                  "Không, CLB chào đón tất cả sinh viên có đam mê và quan tâm đến công nghệ Blockchain, bất kể trình độ kiến thức. Chúng tôi có các khóa học và workshop từ cơ bản đến nâng cao phù hợp với mọi đối tượng.",
              },
              {
                question: "Làm thế nào để trở thành đối tác của CLB?",
                answer:
                  "Các tổ chức, doanh nghiệp quan tâm đến việc hợp tác với CLB có thể liên hệ trực tiếp với Ban chủ nhiệm qua email hoặc điền form liên hệ trên trang web của chúng tôi.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] hover:bg-gradient-to-r hover:from-white hover:to-blue-50/30 group"
              >
                <h3 className="text-lg font-semibold text-[#004987] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#004987] group-hover:to-[#00a1e0] transition-all duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button className="bg-gradient-to-r from-[#004987] to-[#00a1e0] hover:from-[#003b6d] hover:to-[#0081c2] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <span className="flex items-center gap-2">
                  Xem tất cả câu hỏi
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
