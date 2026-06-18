import { COFFEE_ITEMS } from "@/lib/mockData";
import CoffeeCard from "@/components/CoffeeCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Experience the Finest Coffee
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            From the high altitudes of Ethiopia to the lush hills of Colombia, 
            we bring you the world's most exquisite beans, roasted to perfection.
          </p>
          <a 
            href="#menu" 
            className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition-colors"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Featured Coffee Grid */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Brews
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COFFEE_ITEMS.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Artisan Coffee House. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
