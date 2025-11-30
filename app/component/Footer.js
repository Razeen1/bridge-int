import Image from "next/image";
import {Linkedin, Mail, Twitter} from "lucide-react";
import React from "react";

export default function Footer() {
    return (<footer className="bg-gray-800 text-gray-300 py-12 px-4 relative overflow-hidden">
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
    )
}