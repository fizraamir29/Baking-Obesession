import Link from "next/link";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-[#FED2C7] border-t mt-12 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#1A1D26]">Baking Obsession</h3>
            <p className="text-sm text-[#6E7489]">Bringing sweetness to your day, one bite at a time.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#1A1D26]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#6E7489] hover:text-[#FE724C]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-[#6E7489] hover:text-[#FE724C]">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-[#6E7489] hover:text-[#FE724C]">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-[#6E7489] hover:text-[#FE724C]">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#1A1D26]">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-[#6E7489]">Power House Baking Street</li>
              <li className="text-sm text-[#6E7489]">Karachi, Pakistan</li>
              <li className="text-sm text-[#6E7489]">Phone: +92 318 391 074</li>
              <li className="text-sm text-[#6E7489]">Email: info@bakingobsession.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#1A1D26]">Newsletter</h4>
            <p className="text-sm text-[#6E7489] mb-2">Subscribe to our newsletter for sweet deals!</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm border rounded-md"
            />
            <button className="mt-2 w-full bg-[#FE724C] text-white py-2 rounded-md text-sm hover:bg-[#FE8160]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-[#6E7489]">
          © 2025 Baking Obsession. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
