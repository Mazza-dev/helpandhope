'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Image as ImageIcon, Newspaper, Download, Calendar, Users, MapPin, ArrowLeft } from 'lucide-react';

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState('summaries');

  const tabs = [
    { 
      id: 'summaries', 
      label: 'Résumés des Activités',
      icon: FileText,
      color: 'blue'
    },
    { 
      id: 'album', 
      label: 'Galerie de Photos',
      icon: ImageIcon,
      color: 'orange'
    },
    { 
      id: 'news', 
      label: 'Actualités',
      icon: Newspaper,
      color: 'green'
    },
  ];

  const getTabColors = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        gradient: 'from-blue-100 to-blue-50',
        shadow: 'shadow-blue-200/50',
        text: 'text-blue-500'
      },
      orange: {
        bg: 'bg-orange-100',
        gradient: 'from-orange-100 to-orange-50',
        shadow: 'shadow-orange-200/50',
        text: 'text-orange-500'
      },
      green: {
        bg: 'bg-green-100',
        gradient: 'from-green-100 to-green-50',
        shadow: 'shadow-green-200/50',
        text: 'text-green-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Fixed Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-blue-100/50">
        <div className="container mx-auto px-4">
          {/* Mobile Header */}
          <div className="lg:hidden py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour</span>
              </Link>
              <h1 className="text-3xl font-dancing-script text-blue-600">Nos Activités</h1>
            </div>
            <nav className="flex justify-between mt-4 bg-gray-50/50 p-2 rounded-xl">
              {tabs.map((tab) => {
                const colors = getTabColors(tab.color);
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex-1
                      ${activeTab === tab.id
                        ? `bg-gradient-to-br ${colors.gradient} ${colors.text} shadow-lg ${colors.shadow}`
                        : 'text-gray-600 hover:bg-white hover:text-blue-600'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour</span>
              </Link>
              <h1 className="text-4xl font-dancing-script text-blue-600">Nos Activités</h1>
            </div>
            <nav className="flex space-x-4">
              {tabs.map((tab) => {
                const colors = getTabColors(tab.color);
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300
                      ${activeTab === tab.id
                        ? `bg-gradient-to-br ${colors.gradient} ${colors.text} shadow-lg ${colors.shadow} transform scale-105`
                        : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Activity Summaries */}
          {activeTab === 'summaries' && (
            <div className="grid grid-cols-1 gap-8">
              {/* Featured Activity - Prison Sanitation Program */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 flex flex-col md:flex-row gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
                  transform hover:-translate-y-2 transition-all duration-500 group
                  border border-white/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="w-[120px] h-[120px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-[2rem] 
                    flex items-center justify-center relative
                    shadow-lg group-hover:shadow-blue-200/50 transition-shadow duration-500">
                    <FileText className="w-16 h-16 text-blue-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Distribution des Kits Sanitaires - Prison Centrale de Conakry</h3>
                    <a 
                      href="/activities/reports/Rapport Help and Hope Activity 1.pdf" 
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger le Rapport</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span>24 Avril 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span>21 Membres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Conakry, Guinée</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Pendant la pandémie de COVID-19, l&apos;ONG Help and Hope a identifié et soutenu une population vulnérable souvent négligée : les prisonniers. 
                      Notre équipe a fourni des kits sanitaires essentiels comprenant désinfectants, masques, gants et autres équipements de protection.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Impact</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Réduction des risques de contamination</li>
                          <li>Protection des droits des prisonniers</li>
                          <li>Soutien à une population vulnérable</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Ressources Mobilisées</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Budget total: 17,000,000 GNF</li>
                          <li>Équipements sanitaires distribués</li>
                          <li>Couverture médiatique RTG</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured Activity - School Supplies Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 flex flex-col md:flex-row gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
                  transform hover:-translate-y-2 transition-all duration-500 group
                  border border-white/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-orange-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="w-[120px] h-[120px] bg-gradient-to-br from-orange-100 to-orange-50 rounded-[2rem] 
                    flex items-center justify-center relative
                    shadow-lg group-hover:shadow-orange-200/50 transition-shadow duration-500">
                    <FileText className="w-16 h-16 text-orange-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Distribution de Fournitures Scolaires - Orphelinats</h3>
                    <a 
                      href="/activities/reports/Rapport Help and Hope Activity 2.pdf" 
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger le Rapport</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>09 Janvier 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span>70 Participants (50 Enfants)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Guinée</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      La première activité historique de Help and Hope, axée sur l&apos;éducation des enfants orphelins et démunis. 
                      Distribution de manuels scolaires (français, histoire, géographie, sciences) et fournitures, accompagnée 
                      d&apos;une séance de lecture et remise de prix d&apos;excellence.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Impact</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Soutien éducatif aux orphelins</li>
                          <li>Amélioration du niveau scolaire</li>
                          <li>Réduction de la délinquance</li>
                          <li>Promotion de la lecture</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Ressources Mobilisées</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Budget total: 27,000,000 GNF</li>
                          <li>Manuels et fournitures distribués</li>
                          <li>Partenariat: PAM, RTG</li>
                          <li>Support du Ministère de l&apos;Action Sociale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured Activity - Magic Park Excursion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 flex flex-col md:flex-row gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
                  transform hover:-translate-y-2 transition-all duration-500 group
                  border border-white/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-green-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="w-[120px] h-[120px] bg-gradient-to-br from-green-100 to-green-50 rounded-[2rem] 
                    flex items-center justify-center relative
                    shadow-lg group-hover:shadow-green-200/50 transition-shadow duration-500">
                    <FileText className="w-16 h-16 text-green-500" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Excursion Magic Park</h3>
                    <a 
                      href="/activities/reports/Rapport Help and Hope Activity 3 (1).pdf" 
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger le Rapport</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-500" />
                      <span>01 Janvier 2021</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-500" />
                      <span>110 Participants (100 Enfants)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <span>Magic Parc, Guinée</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Pour débuter l&apos;année 2021, Help and Hope a organisé une journée de divertissement au Magic Parc. 
                      Les enfants ont pu profiter des diverses attractions (balançoires, toboggans, jeux) sous la supervision 
                      attentive des membres de l&apos;ONG, assurant à la fois leur amusement et leur sécurité.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Impact</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Divertissement et détente</li>
                          <li>Socialisation entre enfants</li>
                          <li>Découverte de nouveaux jeux</li>
                          <li>Enrichissement culturel</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Ressources Mobilisées</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Budget total: 6,000,000 GNF</li>
                          <li>Transport en autobus</li>
                          <li>Équipements (T-shirts, badges)</li>
                          <li>Partenariat: Guinée Énergie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Assembly Members */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 p-8 bg-gradient-to-br from-purple-50 to-white backdrop-blur-sm rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(147,51,234,0.25)]
                  transform hover:-translate-y-2 transition-all duration-500 group
                  border border-purple-100/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="w-[120px] h-[120px] bg-gradient-to-br from-purple-100 to-purple-50 rounded-[2rem] 
                      flex items-center justify-center relative
                      shadow-lg group-hover:shadow-purple-200/50 transition-shadow duration-500">
                      <Users className="w-16 h-16 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-dancing-script text-purple-600 mb-2">Membres de l&apos;Assemblée</h3>
                  <p className="text-gray-600">Les membres dévoués qui guident notre mission avec passion et détermination</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Sory Mane Traore",
                    "Ndiame Mbaye",
                    "Nounke Kouyaté",
                    "Mariame Balde",
                    "Aissatou Diallo",
                    "Kadiatou Kebe",
                    "Amadou Oury Bangoura",
                    "Aminatou Cherif Diallo",
                    "Mamyan Keita",
                    "Moussa Fofana",
                    "Mohamed Sy Savane",
                    "Cheick Oumar Keita",
                    "Mory Sano",
                    "Fanta Fofana",
                    "Ibrahima Bella Sow",
                    "Saran Camara"
                  ].map((member, index) => (
                    <motion.div
                      key={member}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-md 
                        transition-all duration-300 hover:bg-purple-50/50 group/member
                        border border-purple-100/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 group-hover/member:scale-150 transition-transform" />
                        <span className="text-gray-700 group-hover/member:text-purple-700 transition-colors">
                          {member}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {/* Photo Album */}
          {activeTab === 'album' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-square relative overflow-hidden rounded-[2rem] 
                    shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgb(59,130,246,0.25)]
                    transform hover:-translate-y-2 transition-all duration-500 group
                    border border-white/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={`/activities/activity${index}.jpg`}
                    alt={`Activity ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          )}

          {/* News */}
          {activeTab === 'news' && (
            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 p-8 bg-white/90 backdrop-blur-sm rounded-[2rem] 
                  shadow-[0_10px_40px_rgb(0,0,0,0.15)]
                  border border-white/50 text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="relative flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl 
                      flex items-center justify-center mx-auto
                      shadow-lg">
                      <Newspaper className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aucune actualité pour le moment</h3>
                  <p className="text-gray-600">
                    Revenez bientôt pour découvrir les dernières actualités de Help and Hope.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}