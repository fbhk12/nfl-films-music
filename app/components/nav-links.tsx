'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  const navItems = [
    // Music-related links
    { href: '/songs', icon: Music, label: 'Songs' },
    { href: '/artists', icon: Mic2, label: 'Artists' },
    { href: '/albums', icon: Disc, label: 'Albums' },
    { href: '/labels', icon: Building2, label: 'Record Labels' },
    // Film-related links
    { href: '/teams', icon: Trophy, label: 'Teams' },
    { href: '/seasons', icon: Calendar, label: 'Seasons' },
    { href: '/specials', icon: Film, label: 'Specials' },
    { href: '/other-films', icon: Video, label: 'Non-Football Films' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <div className="flex justify-center gap-4 px-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center group hover:transform hover:scale-105 transition-all"
          >
            <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
              <item.icon size={24} className="text-blue-900" />
            </div>
            <span className="mt-1 text-white text-center font-semibold text-sm">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
