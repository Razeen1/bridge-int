
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import {Mail, MapPin, Phone, Printer} from "lucide-react";

const LocationPage = () => {
    const primaryGreen = '#1e8449';
    const lightGreenBg = '#c1e3bf';
    const lightGreyBg = '#f4f5f6';

    const MapComponent = useMemo(() => dynamic(
        () => import('./MapComponent'),
        {
            loading: () => <p className="text-center p-20">Loading Map...</p>,
            ssr: false
        }
    ), []);


    return (
        <div className="max-w-7xl mx-auto" >

            <h1
                className="text-4xl font-semibold mb-12 text-gray-800"
            >
                Our <div className="text-green-700 mt-2">Locations</div>
            </h1>

            <div className="relative">


                <MapComponent className="bg-transparent" />

                <div
                    className="absolute top-10 right-10 p-6 rounded-lg shadow-xl max-w-xs md:max-w-sm z-[1] bg-green-600/50"
                >
                    <h3 className="text-lg font-semibold mb-3  text-gray-700" >
                        Corporate Office - New Baneshwor
                    </h3>

                    <p className="flex gap-4 items-center text-xs leading-relaxed mb-4 text-gray-700">
                        <MapPin size={16}></MapPin> Bridge Building, 3rd Floor near to Civil Hospital, <br />
                        Opp. to BICC Bhawan, New Baneshwor, <br />
                        Kathmandu
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <div className="flex items-center gap-4 text-xs text-gray-700">
                            <Printer size={16}></Printer>
                            +977 1 5970897
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-700">
                            <Phone size={16}></Phone>

                            +977 9851325324
                        </div>

                        <div className="flex items-center text-xs">
                            <div
                                className="flex gap-4 items-center text-xs text-gray-700"
                            >
                                <Mail size={16}></Mail>

                                info@bicm.edu.np
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPage;