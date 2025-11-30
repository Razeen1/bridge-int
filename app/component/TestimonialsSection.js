import {Circle, Play, Quote} from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialsSection = ({testimonials}) => {
    return (
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
    )
}

export default TestimonialsSection;