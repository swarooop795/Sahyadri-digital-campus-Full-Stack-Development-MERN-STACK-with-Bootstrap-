import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Star, Users, Utensils, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Fresh & Quality Food',
      description: 'Nutritious meals prepared with fresh ingredients daily'
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Order online and skip the queue with our digital system'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing for all transactions'
    },
    {
      icon: Star,
      title: '5-Star Rating',
      description: 'Highly rated by students and faculty members'
    }
  ];

  const stats = [
    { number: '2000+', label: 'Happy Students' },
    { number: '50+', label: 'Menu Items' },
    { number: '100+', label: 'Daily Orders' },
    { number: '4.8', label: 'Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(data:image/jpeg;base64,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)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="data:image/jpeg;base64,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"
              alt="Sahyadri College Logo" 
              className="h-20 w-20 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Sahyadri Digital Canteen
            </h1>
            <div className="text-lg md:text-xl mb-2 opacity-90">
              Sahyadri College of Engineering and Management
            </div>
            <div className="text-sm md:text-base mb-8 opacity-80">
              Adyar, Mangalore - 575007, Karnataka
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Experience the future of campus dining with our digital ordering system
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Browse Menu</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/admin/login"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Digital Canteen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the campus dining experience with modern technology and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <feature.icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Info Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Sahyadri College
              </h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Sahyadri College of Engineering and Management is a premier educational institution 
                committed to excellence in technical education and research. Located in the vibrant 
                city of Mangalore, we foster innovation and provide world-class facilities to our students.
              </p>
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin size={20} />
                <span>Adyar, Mangalore - 575007, Karnataka</span>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Campus Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Modern Digital Canteen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>State-of-the-art Laboratories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Wi-Fi Enabled Campus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Sports & Recreation Center</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Join thousands of students and faculty who enjoy our convenient digital ordering system
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users size={20} />
            <span>Start Ordering Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;