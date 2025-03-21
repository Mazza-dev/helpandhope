'use client';

import {
  Heart,
  Users,
  Leaf,
  Send,
  Instagram,
  Facebook,
  Mail,
  Menu,
  Globe,
  Award,
  Info,
  Target,
  Lightbulb,
  Building2,
  Phone
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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
                { href: '/activities', label: 'Activités' },
                { href: '#orphans', label: 'Orphelins' },
                { href: '#education', label: 'Éducation' },
                { href: '#health', label: 'Santé' },
                { href: '#immigration', label: 'Immigration' },
                { href: '#environment', label: 'Environnement' },
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

      {/* Mobile Navigation Menu - Hidden by default */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl md:hidden z-40 hidden">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {[
              { href: '#orphans', label: 'Orphelins' },
              { href: '#education', label: 'Éducation' },
              { href: '#health', label: 'Santé' },
              { href: '#immigration', label: 'Immigration' },
              { href: '#environment', label: 'Environnement' },
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
                href="https://helpandhope.gumroad.com/l/uhpiq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full
                  hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300
                  flex items-center justify-center gap-2 font-medium">
                <Heart className="w-4 h-4" />
                <span>Faire un Don</span>
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
            className="font-dancing-script text-6xl mb-4 text-white">Faire la Différence</motion.h1>
          <motion.p 
            initial={fadeIn.hidden}
            animate={fadeIn.visible}
            transition={{ delay: 0.8 }}
            className="text-3xl mb-8">Ensemble, Nous Pouvons Changer des Vies</motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://helpandhope.gumroad.com/l/uhpiq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-flex items-center gap-2">
              Faire un Don <Send className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About & Mission Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] p-12
              bg-gradient-to-br from-blue-50/90 to-white/80 backdrop-blur-sm
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-blue-100/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-50 opacity-50 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 text-blue-600">
                  <Info />
                </div>
                <h2 className="text-4xl font-dancing-script text-blue-600">À Propos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Help & Hope est une organisation à but non lucratif dédiée à créer un changement 
                positif dans plusieurs secteurs de la société. Nous croyons en la force de l&apos;action 
                collective et des solutions durables pour répondre aux défis les plus pressants 
                auxquels nos communautés font face aujourd&apos;hui.
              </p>
              <div className="flex gap-6 mt-8">
                <Heart className="w-8 h-8 text-blue-500/70" />
                <Users className="w-8 h-8 text-blue-500/70" />
                <Globe className="w-8 h-8 text-blue-500/70" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] p-12
              bg-gradient-to-br from-blue-50/90 to-white/80 backdrop-blur-sm
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-blue-100/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-50 opacity-50 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 text-blue-600">
                  <Target />
                </div>
                <h2 className="text-4xl font-dancing-script text-blue-600">Notre Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                La vision de l&apos;ONG est de contribuer à la construction d&apos;un monde où toute personne 
                puisse se satisfaire des besoins fondamentaux de base inhérents à l&apos;être humain 
                sans trop de dépendances.
              </p>
              <div className="flex gap-6 mt-8">
                <Lightbulb className="w-8 h-8 text-blue-500/70" />
                <Building2 className="w-8 h-8 text-blue-500/70" />
                <Heart className="w-8 h-8 text-blue-500/70" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-6xl mx-auto py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-dancing-script text-blue-600 text-center mb-12">
          Ce Que Nous Faisons
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-white/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-[88px] h-[88px] bg-gradient-to-br from-orange-100 to-orange-50 rounded-[1.5rem] 
                flex items-center justify-center flex-shrink-0 relative
                shadow-lg group-hover:shadow-orange-200/50 transition-shadow duration-500">
                <Users className="w-[44px] h-[44px] text-orange-500" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Protection des Orphelins</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous nous engageons à donner de l&apos;espoir aux enfants vulnérables, notamment les orphelins. 
                En collaboration avec des partenaires locaux, nous développons des programmes de soutien pour 
                améliorer leurs conditions de vie et leur offrir un avenir meilleur.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-white/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-[88px] h-[88px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-[1.5rem] 
                flex items-center justify-center flex-shrink-0 relative
                shadow-lg group-hover:shadow-blue-200/50 transition-shadow duration-500">
                <Award className="w-[44px] h-[44px] text-blue-500" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Formation et Éducation</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous facilitons la scolarisation et l&apos;accès aux kits scolaires et manuels pour les enfants défavorisés. 
                Nos programmes éducatifs visent à créer des opportunités d&apos;apprentissage durables et à améliorer les 
                conditions de vie de la couche juvénile.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-white/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-[88px] h-[88px] bg-gradient-to-br from-red-100 to-red-50 rounded-[1.5rem] 
                flex items-center justify-center flex-shrink-0 relative
                shadow-lg group-hover:shadow-red-200/50 transition-shadow duration-500">
                <Heart className="w-[44px] h-[44px] text-red-500" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Soins de Santé</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous offrons une assistance sociale et médicale aux couches défavorisées de la population. 
                Nos initiatives de santé visent à améliorer l&apos;accès aux soins essentiels et à promouvoir le 
                bien-être des communautés les plus vulnérables.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-white/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-[88px] h-[88px] bg-gradient-to-br from-purple-100 to-purple-50 rounded-[1.5rem] 
                flex items-center justify-center flex-shrink-0 relative
                shadow-lg group-hover:shadow-purple-200/50 transition-shadow duration-500">
                <Globe className="w-[44px] h-[44px] text-purple-500" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Soutien à l&apos;Immigration</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous travaillons pour l&apos;intégration et l&apos;insertion des personnes dans la sphère sociale, 
                avec une attention particulière aux immigrants. Nos programmes offrent un accompagnement 
                juridique et social pour faciliter leur adaptation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
              shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
              transform hover:-translate-y-2 transition-all duration-500 group
              border border-white/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-[88px] h-[88px] bg-gradient-to-br from-green-100 to-green-50 rounded-[1.5rem] 
                flex items-center justify-center flex-shrink-0 relative
                shadow-lg group-hover:shadow-green-200/50 transition-shadow duration-500">
                <Leaf className="w-[44px] h-[44px] text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Protection de l&apos;Environnement</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous menons des initiatives écologiques visant à préserver notre environnement pour les 
                générations futures. Nos programmes de sensibilisation encouragent le développement durable 
                et la responsabilité environnementale au sein des communautés.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-dancing-script text-blue-600 text-center mb-16"
          >
            Notre Équipe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* CEO - President */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-[3/4]">
                <Image
                  src="/team/team1.jpg"
                  alt="Fanta Fofana"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Fanta Fofana</h3>
                <p className="text-blue-600 mb-2">CEO-President</p>
                <p className="text-gray-600 italic">&ldquo;An attitude of gratitude brings opportunities&rdquo;</p>
              </div>
            </motion.div>

            {/* Secretary General */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-[3/4]">
                <Image
                  src="/team/team2.jpg"
                  alt="Nounké Kouyaté"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Nounké Kouyaté</h3>
                <p className="text-blue-600 mb-2">Secretary General</p>
                <p className="text-gray-600 italic">&ldquo;Aider et Assister, me sont un sacerdoce&rdquo;</p>
              </div>
            </motion.div>

            {/* CFO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-[3/4]">
                <Image
                  src="/team/team3.jpg"
                  alt="Ibrahim Bella Sow"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Ibrahim Bella Sow</h3>
                <p className="text-blue-600 mb-2">CFO</p>
                <p className="text-gray-600 italic">&ldquo;Be the change you wish to see in the world&rdquo;</p>
              </div>
            </motion.div>

            {/* Supervisor/Recruiter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-[3/4]">
                <Image
                  src="/team/team4.jpg"
                  alt="Cheick Oumar Keita"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Cheick Oumar Keita</h3>
                <p className="text-blue-600 mb-2">Supervisor/Recruiter</p>
                <p className="text-gray-600 italic">&ldquo;We all deserve to smile and together we can&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="w-full md:w-1/2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg transform animate-pulse"></div>
                  <Users className="w-10 h-10 text-blue-600 relative" />
                </div>
                <h2 className="text-4xl font-dancing-script text-blue-600">Orphelins</h2>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                }}>
                <p className="text-lg text-gray-700 mb-6">
                  Nous fournissons soutien, soins et amour aux enfants orphelins, en veillant à ce qu&apos;ils aient accès à l&apos;éducation,
                  aux soins de santé et à un environnement propice à leur épanouissement. Nos programmes se concentrent sur:
                </p>
                <ul className="list-none space-y-3 text-gray-700">
                  {[
                    'Des foyers sûrs et bienveillants',
                    'Soutien éducatif et mentorat',
                    'Soutien médical et psychologique',
                    'Développement des compétences de vie'
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
        <div className="absolute inset-0 bg-white/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <div className="w-full h-full relative">
                  <Image
                    src="/education.jpg"
                    alt="Education Programs"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
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
                <h2 className="text-4xl font-dancing-script text-green-600">Éducation</h2>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                }}>
                <p className="text-lg text-gray-700 mb-6">
                  L&apos;éducation est la clé du développement. Nous croyons en l&apos;importance d&apos;offrir des opportunités d&apos;apprentissage.
                </p>
                <ul className="list-none space-y-3 text-gray-700">
                  {[
                    'Éducation primaire et secondaire de qualité',
                    'Programmes de formation professionnelle',
                    'Initiatives de littératie numérique',
                    'Formation et développement des enseignants'
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
                <h2 className="text-4xl font-dancing-script text-blue-600">Santé</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                L&apos;accès aux services de santé est primordial. Nous œuvrons pour améliorer l&apos;accès aux soins médicaux.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Services de santé primaires</li>
                <li>Soins médicaux spécialisés</li>
                <li>Éducation et sensibilisation à la santé</li>
                <li>Programmes de santé communautaire</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <Image
                  src="/health.jpg"
                  alt="Healthcare Programs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 to-blue-50/10 mix-blend-multiply" />
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
        <div className="absolute inset-0 bg-white/95" /> 
        <div className="container mx-auto px-4 relative z-10"> 
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
                L&apos;immigration doit être accompagnée. Nous guidons vers l&apos;intégration.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                {[
                  'Assistance juridique et plaidoyer',
                  'Programmes linguistiques et culturels',
                  'Formation professionnelle et placement',
                  "Soutien à l&apos;intégration communautaire"
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
                <h2 className="text-4xl font-dancing-script text-green-600">Environnement</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                L&apos;environnement est notre responsabilité commune. Ensemble, nous pouvons créer un avenir durable.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                {[
                  'Conservation et protection de la biodiversité',
                  'Pratiques durables et énergies renouvelables',
                  'Éducation et sensibilisation environnementale',
                  'Initiatives et projets communautaires'
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

      {/* Sponsors Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 justify-center mb-16">
            <Award className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-dancing-script text-blue-600">Nos Partenaires</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: 'UNICEF', logo: '/sponsors/unicef.png' },
              { name: 'WHO', logo: '/sponsors/who.png' },
              { name: 'Red Cross', logo: '/sponsors/red-cross.png' },
              { name: 'UNESCO', logo: '/sponsors/unesco.png' },
              { name: 'Doctors Without Borders', logo: '/sponsors/msf.png' },
              { name: 'Save the Children', logo: '/sponsors/save-children.png' },
              { name: 'World Food Programme', logo: '/sponsors/wfp.png' },
              { name: 'UNHCR', logo: '/sponsors/unhcr.png' }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                className="group relative w-40 h-40">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 rounded-lg" />
              </motion.div>
            ))}
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
        <div className="absolute inset-0 bg-white/98" /> 
        <div className="container mx-auto px-4 relative z-10"> 
          <div className="flex items-center gap-3 justify-center mb-16">
            <Send className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-dancing-script text-blue-600">Restez Connecté</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Adresse Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Votre Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Envoyer le Message <Send className="w-4 h-4" />
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
                Faire la différence dans la vie des personnes dans le besoin à travers l&apos;éducation,
                la santé et le soutien communautaire.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#orphans" className="text-gray-400 hover:text-white transition-colors">
                    Orphelins
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
                    Éducation
                  </Link>
                </li>
                <li>
                  <Link href="#health" className="text-gray-400 hover:text-white transition-colors">
                    Santé
                  </Link>
                </li>
                <li>
                  <Link href="#immigration" className="text-gray-400 hover:text-white transition-colors">
                    Immigration
                  </Link>
                </li>
                <li>
                  <Link href="#environment" className="text-gray-400 hover:text-white transition-colors">
                    Environnement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="relative z-10"> 
              <h3 className="text-xl font-semibold mb-4">Connectez-Vous</h3>
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
                <span>Contactez-Nous</span>
              </a>
            </div>
            <a 
              href="tel:+224628252102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-2">
              <Phone className="w-5 h-5" />
              <span>+224-628-25-21-02</span>
            </a>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Help & Hope. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
