"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const directionMap = {
  up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold,
    triggerOnce: once,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionMap[direction].initial}
      animate={isInView ? directionMap[direction].animate : directionMap[direction].initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedHeading({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: AnimatedHeadingProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedDividerProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedDivider({
  className = "w-20 h-1 bg-[#004987] mx-auto mb-6",
  delay = 0.3,
  duration = 0.8,
}: AnimatedDividerProps) {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    />
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  index?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`${className} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: delay + index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
  duration = 0.5,
}: AnimatedImageProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  onClick?: () => void;
}

export function AnimatedButton({
  children,
  className = "",
  delay = 0,
  duration = 0.3,
  onClick,
}: AnimatedButtonProps) {
  return (
    <motion.button
      className={`${className} transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
} 