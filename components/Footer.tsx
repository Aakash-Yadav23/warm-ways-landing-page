'use client';

export default function Footer() {
  const footerLinks = {
    product: ['Features', 'Pricing', 'Changelog', 'Contact'],
    company: ['Privacy', 'Terms'],
    social: ['Twitter', 'LinkedIn', 'GitHub'],
  };

  return (
    <footer className="bg-accent/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Alter
            </div>
            <p className="text-sm sm:text-base text-foreground/70 max-w-md mb-4 sm:mb-6">
              Build AI-powered marketing websites quickly and efficiently with
              our professional template.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-foreground/60 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Alter Template. Made by Framebase.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:alter@support.com"
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-xs sm:text-sm"
            >
              alter@support.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
