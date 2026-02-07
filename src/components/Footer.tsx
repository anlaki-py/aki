const socialLinks = [
  { name: "github", href: "https://github.com/anlaki-py" },
  { name: "huggingface", href: "https://huggingface.co/anlaki" },
  { name: "instagram", href: "https://instagram.com/anlaki.dev" },
];

const Footer = () => (
  <footer className="w-full max-w-lg p-8 md:p-12 relative z-20">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4"></div>
    <div className="flex justify-center gap-6 text-xs font-medium opacity-60">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] hover:scale-110 transition-all duration-200 uppercase tracking-wider">
          {link.name}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
