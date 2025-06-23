
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-gold-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over three decades, Lumière has been crafting exceptional jewelry pieces 
              that celebrate life's most precious moments. Our passion for beauty, quality, 
              and craftsmanship drives everything we do.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">
                  Crafting Dreams into Reality
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Lumière, we believe that jewelry is more than just an accessory—it's a 
                  reflection of your personality, a celebration of your milestones, and a 
                  testament to your unique story.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every piece in our collection is meticulously handcrafted by skilled artisans 
                  who share our commitment to excellence. We use only the finest materials, 
                  sourced ethically and responsibly, to create jewelry that will be treasured 
                  for generations.
                </p>
              </div>
              <div className="animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop"
                  alt="Jewelry crafting"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide every decision we make and every piece we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for perfection in every detail, from design to craftsmanship
                </p>
              </div>

              <div className="text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  Passion
                </h3>
                <p className="text-gray-600">
                  Our love for jewelry and artistry is evident in every piece we create
                </p>
              </div>

              <div className="text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We blend traditional techniques with modern design to create timeless pieces
                </p>
              </div>

              <div className="text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  Community
                </h3>
                <p className="text-gray-600">
                  We're committed to ethical sourcing and supporting our local artisan community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-gold-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                Milestones that shaped Lumière into what we are today
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center animate-fade-in">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="w-4 h-4 bg-rose-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-rose-600">1990</span>
                </div>
                <div className="ml-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                    The Beginning
                  </h3>
                  <p className="text-gray-600">
                    Founded by master jeweler Marie Dubois in a small atelier in Paris, 
                    with a vision to create jewelry that tells stories.
                  </p>
                </div>
              </div>

              <div className="flex items-center animate-fade-in">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="w-4 h-4 bg-gold-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gold-600">2005</span>
                </div>
                <div className="ml-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                    International Recognition
                  </h3>
                  <p className="text-gray-600">
                    Our "Celestial Dreams" collection wins the International Jewelry Design Award, 
                    establishing Lumière as a global brand.
                  </p>
                </div>
              </div>

              <div className="flex items-center animate-fade-in">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="w-4 h-4 bg-rose-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-rose-600">2015</span>
                </div>
                <div className="ml-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                    Sustainable Luxury
                  </h3>
                  <p className="text-gray-600">
                    Launch of our ethical sourcing program, ensuring all materials are 
                    responsibly sourced and supporting local communities.
                  </p>
                </div>
              </div>

              <div className="flex items-center animate-fade-in">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="w-4 h-4 bg-gold-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-semibold text-gold-600">2024</span>
                </div>
                <div className="ml-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                    Digital Renaissance
                  </h3>
                  <p className="text-gray-600">
                    Launching our online boutique to share our passion for fine jewelry 
                    with customers around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Meet Our Artisans
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The talented individuals who bring our designs to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b142?w=300&h=300&fit=crop&crop=face"
                  alt="Marie Dubois"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                  Marie Dubois
                </h3>
                <p className="text-rose-600 font-medium mb-2">Founder & Creative Director</p>
                <p className="text-gray-600 text-sm">
                  With over 30 years of experience, Marie's vision continues to inspire every collection.
                </p>
              </div>

              <div className="text-center hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="James Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                  James Chen
                </h3>
                <p className="text-rose-600 font-medium mb-2">Master Craftsman</p>
                <p className="text-gray-600 text-sm">
                  James specializes in intricate metalwork and stone setting techniques.
                </p>
              </div>

              <div className="text-center hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
                  alt="Sofia Rodriguez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                  Sofia Rodriguez
                </h3>
                <p className="text-rose-600 font-medium mb-2">Design Lead</p>
                <p className="text-gray-600 text-sm">
                  Sofia brings fresh perspectives and contemporary flair to our classic designs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
