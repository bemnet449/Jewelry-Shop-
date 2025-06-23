
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface JewelryItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  materials: string[];
  dimensions: string;
}

const ItemDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<JewelryItem | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch('/items.json');
        const items: JewelryItem[] = await response.json();
        const foundItem = items.find(item => item.id === parseInt(id || ''));
        
        if (foundItem) {
          setItem(foundItem);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-gray-600 mb-4">
              Item not found
            </h2>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/shop"
              className="inline-flex items-center text-gray-600 hover:text-rose-600 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Shop
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                {item.featured && (
                  <div className="absolute top-6 left-6 px-3 py-2 bg-gold-400 text-white font-medium rounded-full flex items-center">
                    <Star className="mr-1" size={16} />
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="text-sm font-medium text-rose-500 uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {item.name}
              </h1>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl lg:text-4xl font-bold gradient-text">
                  ${item.price}
                </span>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full transition-colors ${
                    isFavorite
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-rose-500 hover:text-white'
                  }`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {item.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Dimensions</h3>
                <p className="text-gray-600">{item.dimensions}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover-lift">
                  Add to Cart
                </button>
                <button className="w-full px-8 py-4 glass-effect text-gray-700 rounded-full font-medium hover:bg-white/90 transition-all duration-300">
                  Add to Wishlist
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-rose-50 rounded-2xl">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Care Instructions</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Store in a cool, dry place away from direct sunlight</li>
                  <li>• Clean gently with a soft cloth after each use</li>
                  <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                  <li>• Professional cleaning recommended annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemDetails;
