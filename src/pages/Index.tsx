
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-gold-50"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23f3e8ff\" fillOpacity=\"0.3\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <Sparkles className="mx-auto mb-6 text-rose-400" size={48} />
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Lumière</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Where elegance meets craftsmanship
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted jewelry, 
              each piece telling a unique story of beauty and timeless design.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover-lift group"
              >
                Enter Our Shop
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 glass-effect text-gray-700 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover-lift"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-4 h-4 bg-rose-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-3 h-3 bg-gold-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <div className="w-5 h-5 bg-rose-200 rounded-full opacity-60"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
