
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface JewelryItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  featured: boolean;
}

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState<JewelryItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await fetch('/items.json');
        const items: JewelryItem[] = await response.json();
        setFeaturedItems(items.filter(item => item.featured).slice(0, 4));
      } catch (error) {
        console.error('Error fetching featured items:', error);
      }
    };

    fetchFeaturedItems();
  }, []);

  const toggle
  = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-gold-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop&opacity=0.1')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Timeless <span className="gradient-text">Elegance</span>
                <br />
                Crafted for You
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover our exclusive collection of handcrafted jewelry, where each piece 
                tells a story of passion, artistry, and timeless beauty. From delicate 
                necklaces to statement rings, find the perfect piece to express your unique style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover-lift group"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 glass-effect text-gray-700 rounded-full font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop"
                  alt="Featured Jewelry"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="text-gold-400 mr-2" size={24} />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
                Featured Collection
              </h2>
              <Star className="text-gold-400 ml-2" size={24} />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces that showcase our finest craftsmanship and design excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="group hover-lift">
                <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                        favorites.includes(item.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-rose-500 hover:text-white'
                      }`}
                    >
                      <Heart size={16} fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">
                        ${item.price}
                      </span>
                      <Link
                        to={`/item/${item.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full text-sm font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 glass-effect text-gray-700 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover-lift group"
            >
              View All Items
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Explore our complete collection and discover jewelry that speaks to your soul
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-white text-rose-600 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover-lift group"
          >
            Start Shopping
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
