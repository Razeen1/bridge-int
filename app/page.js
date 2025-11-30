"use client"
import React from 'react';
import LocationSection from "@/app/component/LocationSection";
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";
import HeroSection from "@/app/component/HeroSection";
import ActivitySection from "@/app/component/ActivitySection";
import TestimonialsSection from "@/app/component/TestimonialsSection";

export default function BridgeEducation() {
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

    return (<div className="min-h-screen bg-white overflow-hidden">
        <Header/>
        {/* Hero Section */}
        <HeroSection />
        {/* Activities Section */}
        <ActivitySection activities={activities} />
        {/* Testimonials Section */}
        <TestimonialsSection testimonials={testimonials} />
        {/*Locations*/}
        <section className="py-16 px-4 dotted-gray-background">
            <LocationSection></LocationSection>
        </section>
        {/* Footer */}
        <Footer/>
    </div>);
}
