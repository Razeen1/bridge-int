import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districtData from "../data/nepal-districts.json";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function DistrictMap() {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (mapInstanceRef.current) return;

        const map = L.map(mapContainerRef.current, {
            scrollWheelZoom: false,
            touchZoom: false,
            doubleClickZoom: false,
            zoomControl: true,
            dragging: true,
            minZoom: 7.3,
            maxBounds: [
                [26.0, 80.0], // Southwest coordinates
                [31.0, 89.0]  // Northeast coordinates
            ],
            maxBoundsViscosity: 1.0,
        }).setView([28.3949, 84.124], 7);

        const highlightDistricts = ["KATHMANDU", "CHITWAN", "MORANG", "JHAPA", "SUNSARI","SARLAHI", "RUPANDEHI", "DANG","BANKE"];

        const districtGeoJson = L.geoJson(districtData, {
            style: (feature) => ({
                weight: 2,
                color: "#FFF",
                dashArray: "1",
                fillOpacity: highlightDistricts.includes(feature.properties.DISTRICT)
                    ? 0.8
                    : 1,
                fillColor: highlightDistricts.includes(feature.properties.DISTRICT)
                    ? "#22c55e"
                    : "#8babd3",
            }),
            onEachFeature: (feature, layer) => {
                const districtName = feature.properties.DISTRICT || "Unknown";
                layer.bindPopup(`<strong>${districtName}</strong>`);

                layer.on({
                    mouseover: (e) => {
                        const targetLayer = e.target;
                        targetLayer.setStyle({
                            weight: 3,
                            color: "white",
                            dashArray: "",
                            fillOpacity: 1,
                            fillColor: "#059669",
                        });
                        targetLayer.bringToFront();
                    },
                    mouseout: (e) => {
                        districtGeoJson.resetStyle(e.target);
                    },
                    click: (e) => {
                        map.fitBounds(e.target.getBounds());
                    },
                });
            },
        }).addTo(map);

        map.fitBounds(districtGeoJson.getBounds());
        mapInstanceRef.current = map;

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [districtData]);

    return (
        <div className="w-full">
            <div ref={mapContainerRef} style={{ height: "600px", width: "100%" }} />
        </div>
    );
}