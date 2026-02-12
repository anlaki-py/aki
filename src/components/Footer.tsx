const links = [
  { name: "github", href: "https://github.com/anlaki-py" },
  { name: "huggingface", href: "https://huggingface.co/anlaki" },
  { name: "instagram", href: "https://instagram.com/anlaki.dev" },
];

const Footer = () => (
  <footer>
    <div className="footer-divider" />
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {link.name}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;