import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#FED2C7] border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#6A1B1A]">Baking Obsession</h1>
          <NavBar className="hidden md:flex" />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer className="hidden md:block" />
      <NavBar className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FED2C7]" />
    </div>
  );
}
