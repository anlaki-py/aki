const socialLinks = [
  {
    name: "gh",
    href: "https://github.com/anlaki-py",
  },
  {
    name: "hf",
    href: "https://huggingface.co/anlaki",
  },
  {
    name: "ig",
    href: "https://instagram.com/aki.fuun",
  },
];

const Footer = () => {
  return (
    <footer className="w-full max-w-lg p-8 md:p-12">
      <div className="h-px w-full bg-slate-700 mb-4"></div>
      <div className="flex justify-center gap-6 text-xs font-medium opacity-50">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-100 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
