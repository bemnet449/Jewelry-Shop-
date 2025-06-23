
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Filter } from 'lucide-react';
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

const Shop = () => {
  const [items, setItems] = useState<JewelryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<JewelryItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Necklace', 'Ring', 'Earrings', 'Bracelet'];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/items.json');
        const data: JewelryItem[] = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    let filtered = items;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, searchTerm]);

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Jewelry Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of exquisite jewelry pieces, each crafted with passion and attention to detail
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 glass-effect rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {/* Filter Button (Mobile) */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="sm:hidden flex items-center px-4 py-3 glass-effect rounded-full text-gray-700 hover:bg-white/90"
              >
                <Filter size={20} className="mr-2" />
                Filter
              </button>

              {/* Category Filter (Desktop) */}
              <div className="hidden sm:flex items-center space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
                        : 'glass-effect text-gray-700 hover:bg-white/90'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter Menu */}
            {isFilterOpen && (
              <div className="sm:hidden mt-4 p-4 glass-effect rounded-lg animate-fade-in">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredItems.length} of {items.length} items
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group hover-lift animate-fade-in">
                <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <Link to={`/item/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
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
                    {item.featured && (
                      <div className="absolute top-4 left-4 px-2 py-1 bg-gold-400 text-white text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-rose-500 uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search className="mx-auto text-gray-400" size={64} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
