import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const LandscapingWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      title: 'Lawn Mowing',
      description: 'Professional lawn care with precision cutting and edge trimming for a perfectly manicured finish.',
      icon: '🌱'
    },
    {
      title: 'Hedge Trimming',
      description: 'Expert hedge shaping and maintenance to keep your property boundaries looking neat and attractive.',
      icon: '✂️'
    },
    {
      title: 'Garden Clearance',
      description: 'Complete garden waste removal and clearance services to transform overgrown spaces.',
      icon: '🍂'
    },
    {
      title: 'Pressure Washing',
      description: 'High-quality cleaning for driveways, patios, and exterior surfaces to restore their original beauty.',
      icon: '💧'
    },
    {
      title: 'General Maintenance',
      description: 'Comprehensive garden upkeep including weeding, planting, and seasonal care programs.',
      icon: '🛠️'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '£45',
      period: 'per visit',
      features: [
        'Lawn mowing (up to 100m²)',
        'Edge trimming',
        'Grass collection',
        'Monthly service'
      ]
    },
    {
      name: 'Standard',
      price: '£85',
      period: 'per visit',
      features: [
        'Lawn mowing (up to 250m²)',
        'Hedge trimming',
        'Weeding',
        'Grass collection',
        'Bi-weekly service',
        'Priority scheduling'
      ],
      featured: true
    },
    {
      name: 'Premium',
      price: '£150',
      period: 'per visit',
      features: [
        'Complete garden maintenance',
        'Lawn care (unlimited size)',
        'Hedge & shrub care',
        'Pressure washing',
        'Garden clearance',
        'Weekly service available'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      text: 'Green Horizon transformed our overgrown garden into a beautiful outdoor space. Highly professional service!',
      rating: 5
    },
    {
      name: 'James Patterson',
      text: 'Ethan and Thomas are fantastic. Always on time, great attention to detail, and reasonably priced.',
      rating: 5
    },
    {
      name: 'Linda Roberts',
      text: 'We\'ve been using their services for over a year now. Consistently excellent work every time.',
      rating: 5
    }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const Header = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              GH
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">Green Horizon</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 text-base font-medium ${
                  currentPage === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Green Horizon Landscaping</h3>
            <p className="text-gray-400">
              Professional landscaping services in Lowestoft and surrounding areas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                01502 123 4567
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                info@greenhorizon.co.uk
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Lowestoft, Suffolk
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Green Horizon Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Professional landscaping services tailored to your needs. 
              From regular maintenance to complete garden transformations.
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              Get Free Quote
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive landscaping solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
                >
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Green Horizon?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Team</h3>
              <p className="text-gray-600">Experienced and qualified landscapers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                ★
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Satisfaction guaranteed on every job</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                £
              </div>
              <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent and competitive rates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                ♻
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable practices and waste disposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Professional landscaping solutions for every outdoor space</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="mt-6 text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                Get a Quote
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your garden maintenance needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                tier.featured ? 'ring-4 ring-green-600 transform scale-105' : ''
              }`}
            >
              {tier.featured && (
                <div className="bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-green-600">{tier.price}</span>
                <span className="text-gray-600 ml-2">{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.featured
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Green Horizon</h1>
          <p className="text-xl text-gray-600">Passionate about creating beautiful outdoor spaces</p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-green-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              At Green Horizon Landscaping, our mission is to transform outdoor spaces into beautiful, 
              sustainable environments that enhance quality of life. We believe every garden has potential, 
              and we're committed to delivering exceptional results through professional craftsmanship, 
              attention to detail, and outstanding customer service.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-40 h-40 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
                E
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ethan</h3>
              <p className="text-green-600 font-semibold mb-4">Co-Founder & Lead Landscaper</p>
              <p className="text-gray-600 leading-relaxed">
                With over 10 years of experience in landscaping, Ethan brings expertise in garden design 
                and project management. His passion for creating outdoor spaces drives the company's 
                commitment to excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
                T
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thomas</h3>
              <p className="text-green-600 font-semibold mb-4">Co-Founder & Operations Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Thomas specializes in maintenance programs and customer relations. His dedication to 
                quality and attention to detail ensures every project meets the highest standards and 
                exceeds client expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain the highest professional standards in every aspect of our work. From initial 
                consultation to project completion, we ensure quality craftsmanship and reliable service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                Environmental responsibility is at the core of our operations. We use eco-friendly methods, 
                proper waste disposal, and sustainable landscaping techniques.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-700 leading-relaxed">
                Your satisfaction is our priority. We work closely with clients to understand their vision 
                and deliver results that exceed expectations, backed by our quality guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-700 leading-relaxed">
                We stay current with industry best practices and invest in training and equipment to 
                provide the most efficient and effective landscaping services.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear about your landscaping project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                onClick={handleFormSubmit}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-green-600 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">01502 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-green-600 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@greenhorizon.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-green-600 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Lowestoft, Suffolk<br/>Serving all surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Area</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-3 text-green-600" />
                  <p className="font-semibold">Google Maps Embed</p>
                  <p className="text-sm">Map showing service area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default LandscapingWebsite;