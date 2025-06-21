'use client';

import { TwitterLogo, LinkedinLogo, GithubLogo, TelegramLogo } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Trading Guide', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: TwitterLogo, href: '#' },
    { name: 'LinkedIn', icon: LinkedinLogo, href: '#' },
    { name: 'GitHub', icon: GithubLogo, href: '#' },
    { name: 'Telegram', icon: TelegramLogo, href: '#' },
  ];

  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Lunexa</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Revolutionizing cryptocurrency trading with advanced AI technology. 
                Trade smarter, not harder, with institutional-grade algorithms.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon size={18} weight="light" className="text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white font-medium mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get the latest updates on new features, market insights, and trading tips.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="neuro-button px-6 py-2 text-white text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Lunexa. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <span>🔒 Bank-grade security</span>
            <span>⚡ 99.9% uptime</span>
            <span>🛡️ GDPR compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 