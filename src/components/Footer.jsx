const Footer = () => {
  return (
    <footer className="py-12 bg-[var(--bg)] border-t border-[var(--border)] text-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ship or Be Shipped — Built by and for builders.</p>
        <div className="flex items-center gap-4">
          <a href="#faq" className="hover:text-[var(--text)]">FAQ</a>
          <a href="#community" className="hover:text-[var(--text)]">Community</a>
          <a href="#register" className="hover:text-[var(--text)]">Register</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
