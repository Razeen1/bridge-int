import {Globe} from "lucide-react";
import React from "react";

export default function HeroSection() {
    return (
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
    )
}