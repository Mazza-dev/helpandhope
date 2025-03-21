'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Menu } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
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
                { href: '/', label: 'Accueil' },
                { href: '/#orphans', label: 'Orphelins' },
                { href: '/#education', label: 'Éducation' },
                { href: '/#health', label: 'Santé' },
                { href: '/#immigration', label: 'Immigration' },
                { href: '/#environment', label: 'Environnement' },
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
                href="https://helpandhope.gumroad.com/l/uhpiq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full
                  hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300
                  flex items-center gap-2 font-medium">
                <Heart className="w-4 h-4" />
                <span>Faire un Don</span>
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

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-dancing-script text-blue-600 mb-4">Nos Activités</h1>
            <p className="text-gray-600 text-lg">
              Découvrez nos différentes initiatives et programmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="aspect-square relative overflow-hidden rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
                  transform hover:-translate-y-4 transition-all duration-500 group"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={`/activities/activity${num}.jpg`}
                  alt={`Activity ${num}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}