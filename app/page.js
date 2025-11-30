"use client"
import React, {useState} from 'react';
import {
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    MapPin,
    ChevronDown,
    Play,
    ArrowUpRight,
    Globe,
    CalendarDays,
    Menu,
    Circle,
    Quote, Twitter
} from 'lucide-react';
import Image from 'next/image'
import LocationSection from "@/app/component/LocationSection";

export default function BridgeEducation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const activities = [{
        type: 'PTE Session',
        title: 'MEC Presents: Executive Info Session with UK Education Experts',
        date: 'Dec 15, 2024',
        location: 'Kathmandu (Offline)'
    }, {
        type: 'Workshop',
        title: 'Hands-on Workshop on Application Process for UK Universities',
        date: 'Jan 25, 2025',
        location: 'Virtual Event'
    }, {
        type: 'Scholarship', title: 'Outstanding Achievement Scholarship', date: 'Feb 10, 2025', location: 'Online'
    }];

    const testimonials = [{
        name: 'Fos Dusless',
        university: 'University of Southampton',
        rating: 5,
        text: "I'm grateful to Bridge International for their support and expert advice during my study abroad journey. They guided me through the visa process and helped me choose the right university. I highly recommend them to anyone seeking international education opportunities."
    }, {
        name: 'Brandon Saris',
        university: 'University of Roehampton',
        rating: 5,
        text: "Bridge International Educational Consultancy truly enhanced my experience. Their personalized service and dedicated consultants made studying abroad enjoyable and seamless. I felt confident and well-prepared from application to university to applying for my visa.",
        image: true
    }, {
        name: 'Samuel Johnson',
        university: 'University of Manchester',
        rating: 5,
        text: "I strongly recommend Bridge International for their outstanding services. They offered me comprehensive guidance and support that assisted me in securing scholarships I never thought I could get. Their expertise is invaluable!"
    }, {
        name: 'Jessica Lee',
        university: 'University of Sydney',
        rating: 5,
        text: "The team at Bridge International is highly professional and responsive. They not only helped me select the right program but also coached me on interview skills, boosting my confidence. I'm grateful for their role in achieving my studies!"
    }, {
        name: 'Cindy Chen',
        university: 'University of California, Berkeley',
        rating: 5,
        text: "The team at Bridge International is highly professional and responsive. They not only helped me select the right program but also coached me on interview skills, boosting my confidence. I'm grateful for their role in achieving my studies!"
    }];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (<div className="min-h-screen bg-white overflow-hidden">
        {/* Top Bar */}
        <div className="bg-green-800 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14}/>
              +977 9876543211
            </span>
                    <span className="flex items-center gap-2">
              <Mail size={14}/>
              info@bridgeinl.com
            </span>
                </div>
                <div className="flex gap-4">
                    <Facebook size={16}/>
                    <Instagram size={16}/>
                    <Linkedin size={16}/>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Image src='/bridge-logo.png' alt='logo' width='120' height='70'/>

                {/* Mobile menu button */}
                <button className="lg:hidden text-gray-700">
                    <Menu size={24}/>
                </button>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center gap-9 text-sm">
                    <div className="relative group">
                        <button
                            className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-green-600">
                            Study Abroad
                            <ChevronDown size={16} className="transition-transform group-hover:rotate-180"/>
                        </button>
                        <div
                            className="absolute left-0 mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Australia
                            </a>

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                UK
                            </a>

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                USA
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
                    <div className="relative group">
                        <button
                            className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600">
                            Services
                            <ChevronDown size={16} className="transition-transform group-hover:rotate-180"/>
                        </button>
                        <div
                            className="absolute left-0 mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Career Counseling
                            </a>

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Test Preparation
                            </a>

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Pre Departure
                            </a>

                            <a href="#"
                               className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                                Loan and Financial Guiding
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-gray-700 hover:text-green-600">Resources</a>
                    <a href="#" className="text-gray-700 hover:text-green-600">Contact Us</a>
                    <a href="#" className="text-gray-700 hover:text-green-600">FAQs</a>
                    <button
                        className="cursor-pointer font-semibold flex items-center gap-1 text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800">
                        Check Eligibility
                        <ArrowUpRight size={16} className="transition-transform group-hover:rotate-180"/>
                    </button>
                </div>
            </div>
        </nav>
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 py-16 bg-transparent">
            <div className="grid md:grid-cols-2 gap-12 items-center pb-10">
                <div>
                    <h1 className="text-5xl text-gray-600 font-medium mb-6">
                        <div className="mb-4">Your Gateway to</div>
                        <span className="text-green-600 mt-4">World-Class Education</span>
                    </h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Expert study abroad consultancy services helping students achieve their dreams of
                        international education. From university selection to visa guidance, were with you every
                        step.
                    </p>
                    <button className="px-4 py-2 font-semibold text-xs rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 cursor-pointer
transition-all duration-300 hover:brightness-90"> Explore Our Services
                    </button>
                    <div className="grid grid-cols-3 gap-8 mt-12">
                        <div>
                            <div className="text-3xl font-bold text-green-700">500+</div>
                            <div className="text-sm text-gray-600">Partner Universities</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-700">10,000+</div>
                            <div className="text-sm text-gray-600">Students Placed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-700">15+</div>
                            <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=400&fit=crop"
                        alt="Students learning"
                        className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -left-8 bg-white text-gray-800 shadow-lg px-4 py-2 rounded">
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center justify-center bg-green-700 rounded-md p-2">
                                <Globe size={20} className="text-white"/>
                            </div>
                            <div>
                                <div className="text-xs">Study Globally</div>
                                <div className="font-medium">25+ Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                <span className="w-6 h-1 bg-green-600 rounded-full"></span>
                <span className="w-4 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-4 h-1 bg-gray-300 rounded-full"></span>
            </div>
            {/* Curved line - full width behind content */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-screen overflow-hidden leading-[0] pointer-events-none">
                <svg
                    className="relative block w-full h-16"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C360,80 1080,0 1440,40"
                        className="stroke-green-500 fill-none opacity-75"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-screen overflow-hidden leading-[0] pointer-events-none">
                <svg
                    className="relative block w-full h-16"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C360,80 1080,0 1440,40"
                        className="stroke-green-500 fill-none opacity-20"
                        strokeWidth="2"
                    />
                </svg>
            </div>

        </section>

        {/* Activities Section */}
        <section className="bg-gradient-to-b from-green-600 via-green-500 to-green-600 dotted-background py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-gray-200 text-sm mb-2">Recent</h3>
                        <h2 className="text-4xl font-bold text-gray-100">Activities</h2>
                    </div>
                    <button className="px-4 py-2 font-semibold text-xs rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 cursor-pointer
    transition-all duration-300 hover:brightness-90"> See More Events
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {activities.map((activity, idx) => (<div key={idx} className="glass rounded-lg p-6 text-white h-55">
                <span className="inline-block glass px-3 py-1 rounded-xl text-xs mb-4">
                  {activity.type}
                </span>
                        <h3 className="text-lg text-gray-100 font-medium mb-4">{activity.title}</h3>
                        <div className="text-sm text-green-100 space-y-2">
                            <div className='flex gap-1'><CalendarDays size={20}/> {activity.date}</div>
                            <div className='flex gap-1'><MapPin size={20}/> {activity.location}</div>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-40"></div>

            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-4xl font-semibold text-gray-800 mb-12">What Our Student Say</h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left testimonial */}
                    <div className="flex flex-col gap-6">
                        {testimonials.slice(0, 2).map((t, i) => (<div
                            key={i}
                            className="p-6 bg-white border rounded-xl h-70 shadow hover:shadow-lg transition"
                        >
                            <div className="mb-4">
                                <Quote className="text-green-600/30 mb-2" size={30}/>
                                <div className="flex space-x-1">
                                    {[...Array(4)].map((_, idx) => (
                                        <span key={idx} className="text-yellow-400">★</span>))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-xs mb-4">{t.text}</p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/profile.jpeg"
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-medium text-gray-700">{t.name}</p>
                                    <p className="text-gray-500 text-sm">{t.university}</p>
                                </div>
                            </div>
                        </div>))}
                    </div>

                    {/* Center video testimonial */}
                    <div
                        className="flex flex-col items-center justify-center p-6 bg-white border-green-100 border-solid border-1 rounded-xl shadow hover:shadow-lg transition">
                        <div
                            className="flex gap-2 items-center border-gray-200 border-1 border-solid px-3 py-1 rounded-lg text-black text-xs mb-4">
                            <Circle size={10} className='text-green-700' fill="currentColor"/> Student
                        </div>
                        <div className="relative w-full h-100 mb-4">
                            <Image
                                src="/profile.jpeg"
                                alt="Brandon Saris"
                                fill
                                className="rounded-xl object-cover"
                            />
                            <button className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white h-8 w-8 flex items-center justify-center rounded-full">
                                    <Play className="text-green-600 ml-0.5" size={18}/>
                                </div>
                            </button>
                        </div>
                        <h3 className="text-3xl font-medium text-center text-black mb-2">
                            <span className="text-green-600">Brandon</span> Saris
                        </h3>
                        <p className="text-gray-500 text-xs flex gap-2 items-center"><Circle size={10}
                                                                                             className='text-gray-500'
                                                                                             fill="currentColor"/> University
                            of Roehampton</p>
                    </div>

                    {/* Right testimonial */}
                    <div className="flex flex-col gap-6">
                        {testimonials.slice(2, 4).map((t, i) => (<div
                            key={i}
                            className="p-6 bg-white border rounded-xl h-70 shadow hover:shadow-lg transition"
                        >
                            <div className="mb-4">
                                <Quote className="text-green-600/30 mb-2" size={30}/>
                                <div className="flex space-x-1">
                                    {[...Array(4)].map((_, idx) => (
                                        <span key={idx} className="text-yellow-400">★</span>))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 text-xs">{t.text}</p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/profile.jpeg"
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-gray-700">{t.name}</p>
                                    <p className="text-gray-500 text-sm">{t.university}</p>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 px-4 dotted-gray-background">
            <LocationSection></LocationSection>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12 px-4 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-gray-300/30 rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-gray-300/30 rounded-full opacity-50"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Image src='/bridge-logo.png' alt='logo' width='180' height='70'/>
                        <p className="text-xs text-gray-400 mt-4">Your trusted partner for international business
                            expansion and global growth strategies.</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex gap-4 mb-4">
                            <Linkedin size={16}/>
                            <Twitter size={16}/>
                            <Mail size={16}/>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-xs">Privacy</div>
                            <div className="text-xs">Terms</div>
                            <div className="text-xs">Cookies</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-8 mb-8 border-t border-gray-700 mt-8 pt-8">
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
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-500">Terms Of Service</a></li>
                            <li><a href="#" className="hover:text-green-500">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">ICEF Agency Status</h4>
                        <Image src='/badge.png' alt='logo' width='180' height='70'/>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    © 2025 Bridge International. All rights reserved.
                </div>
            </div>
        </footer>
    </div>);
}
