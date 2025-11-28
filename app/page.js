"use client"
import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, MapPin, ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

export default function BridgeEducation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const activities = [
    {
      type: 'PTE Session',
      title: 'MEC Presents: Executive Info Session with UK Education Experts',
      date: 'Dec 15, 2024',
      location: 'Kathmandu (Offline)'
    },
    {
      type: 'Workshop',
      title: 'Hands-on Workshop on Application Process for UK Universities',
      date: 'Jan 25, 2025',
      location: 'Virtual Event'
    },
    {
      type: 'Scholarship',
      title: 'Outstanding Achievement Scholarship',
      date: 'Feb 10, 2025',
      location: 'Online'
    }
  ];

  const testimonials = [
    {
      name: 'Fos Dusless',
      university: 'University of Southampton',
      rating: 5,
      text: "I'm grateful to Bridge International for their support and expert advice during my study abroad journey. They guided me through the visa process and helped me choose the right university. I highly recommend them to anyone seeking international education opportunities."
    },
    {
      name: 'Brandon Saris',
      university: 'University of Roehampton',
      rating: 5,
      text: "Bridge International Educational Consultancy truly enhanced my experience. Their personalized service and dedicated consultants made studying abroad enjoyable and seamless. I felt confident and well-prepared from application to university to applying for my visa.",
      image: true
    },
    {
      name: 'Samuel Johnson',
      university: 'University of Manchester',
      rating: 5,
      text: "I strongly recommend Bridge International for their outstanding services. They offered me comprehensive guidance and support that assisted me in securing scholarships I never thought I could get. Their expertise is invaluable!"
    },
    {
      name: 'Jessica Lee',
      university: 'University of Sydney',
      rating: 5,
      text: "The team at Bridge International is highly professional and responsive. They not only helped me select the right program but also coached me on interview skills, boosting my confidence. I'm grateful for their role in achieving my studies!"
    },
    {
      name: 'Cindy Chen',
      university: 'University of California, Berkeley',
      rating: 5,
      text: "The team at Bridge International is highly professional and responsive. They not only helped me select the right program but also coached me on interview skills, boosting my confidence. I'm grateful for their role in achieving my studies!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
      <div className="min-h-screen bg-white">
        {/* Top Bar */}
        <div className="bg-green-800 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +977 9876543211
            </span>
              <span className="flex items-center gap-2">
              <Mail size={14} />
              info@bridgeinl.com
            </span>
            </div>
            <div className="flex gap-4">
              <Facebook size={16} />
              <Instagram size={16} />
              <Linkedin size={16} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-green-600">bridge</span>
                <div className="text-xs text-gray-600">INTERNATIONAL</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-green-600">Study Abroad</a>
              <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Resources</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Contact Us</a>
              <a href="#" className="text-gray-700 hover:text-green-600">FAQs</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Check Eligibility
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Your Gateway to<br />
                <span className="text-green-600">World-Class Education</span>
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Expert study abroad consultancy services helping students achieve their dreams of international education. From university selection to visa guidance, were with you every step.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Explore Our Services
              </button>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Partner Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">10,000+</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="Students learning"
                  className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <div>
                    <div className="text-xs">Study Globally</div>
                    <div className="font-semibold">25+ Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="bg-green-600 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-gray-200 text-sm mb-2">Recent</h3>
                <h2 className="text-4xl font-bold text-white">Activities</h2>
              </div>
              <button className="bg-white text-green-600 px-6 py-2 rounded hover:bg-gray-100">
                See More Events
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {activities.map((activity, idx) => (
                  <div key={idx} className="bg-green-700 rounded-lg p-6 text-white">
                <span className="inline-block bg-green-800 px-3 py-1 rounded text-sm mb-4">
                  {activity.type}
                </span>
                    <h3 className="text-lg font-semibold mb-4">{activity.title}</h3>
                    <div className="text-sm text-green-100 space-y-2">
                      <div>📅 {activity.date}</div>
                      <div>📍 {activity.location}</div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-40"></div>

          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Student Say</h2>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left testimonial */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-6">{testimonials[currentTestimonial].text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm">{testimonials[currentTestimonial].name}</div>
                    <div className="text-xs text-gray-500">{testimonials[currentTestimonial].university}</div>
                  </div>
                </div>
              </div>

              {/* Center video testimonial */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                      alt="Brandon Saris"
                      className="w-full h-96 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play fill="#16a34a" stroke="#16a34a" />
                    </div>
                  </button>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-800">Brandon Saris</h3>
                  <p className="text-sm text-gray-600">📍 University of Roehampton</p>
                </div>
              </div>

              {/* Right testimonial */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-6">{testimonials[(currentTestimonial + 1) % testimonials.length].text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm">{testimonials[(currentTestimonial + 1) % testimonials.length].name}</div>
                    <div className="text-xs text-gray-500">{testimonials[(currentTestimonial + 1) % testimonials.length].university}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">Our</h2>
            <h2 className="text-4xl font-bold text-green-600 mb-12">Locations</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <svg viewBox="0 0 600 400" className="w-full">
                  <path
                      d="M50,100 L150,80 L250,90 L350,100 L450,110 L550,100 L550,300 L450,310 L350,290 L250,300 L150,310 L50,300 Z"
                      fill="#cbd5e1"
                      stroke="#94a3b8"
                      strokeWidth="1"
                  />
                  {/* Green location markers */}
                  <circle cx="150" cy="250" r="20" fill="#16a34a" />
                  <circle cx="280" cy="270" r="20" fill="#16a34a" />
                  <circle cx="350" cy="260" r="20" fill="#16a34a" />
                  <circle cx="420" cy="250" r="20" fill="#16a34a" />
                  <circle cx="520" cy="280" r="20" fill="#16a34a" />
                  <circle cx="450" cy="300" r="20" fill="#16a34a" />
                </svg>
              </div>

              <div className="bg-green-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Corporate Office - New Baneshwor</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <MapPin size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Bridge Building, 2nd Floor, Near to Civil Hospital, Bagiya Bahal, New Baneshwor, Kathmandu</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-green-600" />
                    <span>+977 1 4782938</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-green-600" />
                    <span>+977 9851253244</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={18} className="text-green-600" />
                    <span>info@bridgeinl.np</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <span className="text-green-500">bridge</span>
                  <div className="text-xs">INTERNATIONAL</div>
                </div>
                <p className="text-sm text-gray-400">Your trusted partner for international business expansion and global growth opportunities.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-green-500">Market Entry Strategy</a></li>
                  <li><a href="#" className="hover:text-green-500">Business Growth</a></li>
                  <li><a href="#" className="hover:text-green-500">Cross-Cultural Management</a></li>
                  <li><a href="#" className="hover:text-green-500">Risk Management</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-green-500">About Us</a></li>
                  <li><a href="#" className="hover:text-green-500">Our Team</a></li>
                  <li><a href="#" className="hover:text-green-500">Careers</a></li>
                  <li><a href="#" className="hover:text-green-500">News & Insights</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-green-500">Case Studies</a></li>
                  <li><a href="#" className="hover:text-green-500">White Papers</a></li>
                  <li><a href="#" className="hover:text-green-500">Blog</a></li>
                  <li><a href="#" className="hover:text-green-500">FAQs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">ICEF Agency Status</h4>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs text-center">
                    ICEF ACCREDITED<br/>AGENCY
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              © 2025 Bridge International. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  );
}
