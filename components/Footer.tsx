'use client';

export default function Footer() {
  const footerLinks = {
    product: ['Features', 'Pricing', 'Changelog', 'Contact'],
    company: ['Privacy', 'Terms'],
    social: ['Twitter', 'LinkedIn', 'GitHub'],
  };

  return (
    <footer className="bg-accent/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">Alter</div>
            <p className="text-foreground/70 max-w-md mb-6">
              Build AI-powered marketing websites quickly and efficiently with
              our professional template.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 Alter Template. Made by Framebase.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:alter@support.com"
              className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm"
            >
              alter@support.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
