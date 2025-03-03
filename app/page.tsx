'use client';

import {
  Heart,
  Users,
  Leaf,
  Send,
  Instagram,
  Facebook,
  Mail,
  Menu
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function HomePage() {
  const heroRef = useRef(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-md animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="Help & Hope Logo"
                  width={150}
                  height={40}
                  className="object-contain relative"
                  priority
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { href: '#orphans', label: 'Orphan Care' },
                { href: '#education', label: 'Education' },
                { href: '#health', label: 'Health' },
                { href: '#immigration', label: 'Immigration' },
                { href: '#environment', label: 'Environment' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Donate Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full
                  hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300
                  flex items-center gap-2 font-medium">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom Border Gradient */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </header>

      {/* Mobile Navigation Menu - Hidden by default */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl md:hidden z-40 hidden">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {[
              { href: '#orphans', label: 'Orphan Care' },
              { href: '#education', label: 'Education' },
              { href: '#health', label: 'Health' },
              { href: '#immigration', label: 'Immigration' },
              { href: '#environment', label: 'Environment' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50">
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full
                  hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300
                  flex items-center justify-center gap-2 font-medium">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Light dark overlay for text readability */}
        </motion.div>
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Glass effect overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-dancing-script text-6xl mb-4 text-white">Making a Difference</motion.h1>
          <motion.p 
            initial={fadeIn.hidden}
            animate={fadeIn.visible}
            transition={{ delay: 0.8 }}
            className="text-3xl mb-8">Together We Can Change Lives</motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link href="#donate" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-flex items-center gap-2">
              Donate Now <Send className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About & Mission Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* About */}
          <motion.div 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-dancing-script text-blue-600 mb-6">About Us</motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-700 mb-8">
              Help & Hope is a dedicated non-profit organization committed to creating positive change
              across multiple sectors of society. We believe in the power of collective action and
              sustainable solutions to address some of the most pressing challenges facing our communities today.
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="border-b-2 border-blue-600 mx-auto">
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-dancing-script text-blue-600 mb-6">Our Mission</motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700">
              To empower communities through comprehensive support in key areas of social development,
              fostering sustainable change and creating opportunities for those in need.
            </motion.p>
          </motion.div>

          {/* Focus Areas Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Orphans Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Orphan Care</h3>
              <p className="text-gray-600 text-center">
                Providing loving homes, education, and support for orphaned children to ensure they have
                the opportunity to thrive and reach their full potential.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">Education</h3>
              <p className="text-gray-600 text-center">
                Empowering through knowledge with quality education programs, vocational training,
                and digital literacy initiatives.
              </p>
            </motion.div>

            {/* Health Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-4 text-center">Healthcare</h3>
              <p className="text-gray-600 text-center">
                Ensuring access to quality healthcare services and promoting community wellness through
                comprehensive health programs.
              </p>
            </motion.div>

            {/* Immigration Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4 text-center">Immigration Support</h3>
              <p className="text-gray-600 text-center">
                Assisting immigrants and refugees with legal aid, integration programs, and resources
                for successful settlement in new communities.
              </p>
            </motion.div>

            {/* Environment Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 text-center">Environmental Protection</h3>
              <p className="text-gray-600 text-center">
                Promoting environmental sustainability through conservation efforts, education,
                and community-based green initiatives.
              </p>
            </motion.div>

            {/* Impact Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-600 mb-4 text-center">Our Impact</h3>
              <p className="text-gray-600 text-center">
                Making measurable differences in communities through sustainable programs
                and collaborative partnerships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Orphans Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="orphans" 
        className="relative py-20 overflow-hidden bg-gradient-cool">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-pattern-dots" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center">
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="w-full md:w-1/2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg transform animate-pulse" />
                  <Users className="w-10 h-10 text-blue-600 relative" />
                </div>
                <h2 className="text-4xl font-dancing-script text-blue-600">Orphan Care</h2>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                }}>
                <p className="text-lg text-gray-700 mb-6">
                  We provide support, care, and love to orphaned children, ensuring they have access to education,
                  healthcare, and a nurturing environment to grow and thrive. Our programs focus on:
                </p>
                <ul className="list-none space-y-3 text-gray-700">
                  {[
                    'Safe and nurturing homes',
                    'Educational support and mentorship',
                    'Healthcare and psychological support',
                    'Life skills development'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { delay: 0.3 + index * 0.1 } }
                      }}
                      className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform group">
                <div className="w-full h-full relative">
                  <Image
                    src="/orphans.jpg"
                    alt="Orphan Care"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-green-50/10 mix-blend-multiply" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="education" 
        className="relative py-20 overflow-hidden bg-pattern-waves">
        <div className="absolute inset-0 bg-white/90" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center">
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform group">
                <div className="w-full h-full relative">
                  <Image
                    src="/education.jpg"
                    alt="Education Programs"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 to-blue-50/10 mix-blend-multiply" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="w-full md:w-1/2 pl-8 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full blur-lg transform animate-pulse" />
                  <Leaf className="w-10 h-10 text-green-600 relative" />
                </div>
                <h2 className="text-4xl font-dancing-script text-green-600">Education</h2>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                }}>
                <p className="text-lg text-gray-700 mb-6">
                  Through our educational initiatives, we empower individuals with knowledge and skills,
                  creating opportunities for a brighter future and sustainable development.
                </p>
                <ul className="list-none space-y-3 text-gray-700">
                  {[
                    'Quality primary and secondary education',
                    'Vocational training programs',
                    'Digital literacy initiatives',
                    'Teacher training and development'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { delay: 0.3 + index * 0.1 } }
                      }}
                      className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Health Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="health" 
        className="relative py-20 overflow-hidden bg-gradient-cool">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-subtle-grid" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-blue-600" />
                <h2 className="text-4xl font-dancing-script text-blue-600">Health</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We work to improve access to quality healthcare services and promote wellness
                through various health initiatives and medical support programs. Our focus areas include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Primary healthcare services</li>
                <li>Specialized medical care</li>
                <li>Health education and awareness</li>
                <li>Community health programs</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform group">
                <div className="w-full h-full relative">
                  <Image
                    src="/health.jpg"
                    alt="Healthcare Programs"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 to-blue-50/10 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Immigration Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="immigration" 
        className="relative py-20 overflow-hidden bg-pattern-waves">
        <div className="absolute inset-0 bg-white/95" /> {/* Increased opacity */}
        <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 */}
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <div className="w-full h-full relative">
                  <Image
                    src="/immigration.jpg"
                    alt="Immigration Support"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/10 to-blue-50/10 mix-blend-multiply" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-8 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg transform animate-pulse" />
                  <Users className="w-10 h-10 text-purple-600 relative" />
                </div>
                <h2 className="text-4xl font-dancing-script text-purple-600">Immigration</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Supporting immigrants and refugees with legal aid, integration programs,
                and resources to help them build a new life in their adopted communities.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                {[
                  'Legal assistance and advocacy',
                  'Language and cultural programs',
                  'Job training and placement',
                  'Community integration support'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.3 + index * 0.1 } }
                    }}
                    className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Environment Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="environment" 
        className="relative py-20 overflow-hidden bg-gradient-cool">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-pattern-dots" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full blur-lg transform animate-pulse" />
                  <Leaf className="w-10 h-10 text-green-600 relative" />
                </div>
                <h2 className="text-4xl font-dancing-script text-green-600">Environment</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Dedicated to protecting our planet through conservation efforts, sustainability
                initiatives, and environmental education programs.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                {[
                  'Conservation and wildlife preservation',
                  'Sustainable practices and renewable energy',
                  'Environmental education and awareness',
                  'Community-based initiatives and projects'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.3 + index * 0.1 } }
                    }}
                    className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <Image
                  src="/environment.jpg"
                  alt="Environmental Programs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 to-blue-50/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        id="contact" 
        className="relative py-20 overflow-hidden bg-subtle-grid">
        <div className="absolute inset-0 bg-white/98" /> {/* Increased opacity */}
        <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 */}
          <div className="flex items-center gap-3 justify-center mb-16">
            <Send className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-dancing-script text-blue-600">Stay Connected</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-2xl font-dancing-script mb-4">Help & Hope</h3>
              <p className="text-gray-400">
                Making a difference in the lives of those in need through education,
                healthcare, and community support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#orphans" className="text-gray-400 hover:text-white transition-colors">
                    Orphan Care
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#health" className="text-gray-400 hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#immigration" className="text-gray-400 hover:text-white transition-colors">
                    Immigration
                  </Link>
                </li>
                <li>
                  <Link href="#environment" className="text-gray-400 hover:text-white transition-colors">
                    Environment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="relative z-10"> {/* Added z-10 */}
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.instagram.com/helpandhope224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full">
                    <Instagram className="w-6 h-6" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/share/14v7SKm2zP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-2 rounded-full">
                    <Facebook className="w-6 h-6" />
                  </div>
                </a>
              </div>
              <a 
                href="mailto:helpandhope224@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Help & Hope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
