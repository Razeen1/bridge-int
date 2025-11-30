import {CalendarDays, MapPin} from "lucide-react";
import React from "react";

const ActivitySection = ({activities}) =>  {
    return (
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

    )
}

export default ActivitySection;