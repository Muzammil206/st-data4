"use client";

import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import "@arcgis/core/assets/esri/themes/light/main.css"; 

const EsriMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let view; 

    if (mapRef.current) {
      const baseMap = new Map({
        basemap: "topo-vector", 
      });

      view = new MapView({
        container: mapRef.current,
        map: baseMap,
        center: [-118.805, 34.027], 
        zoom: 10, 
      });
    }

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      {/* Map container */}
      <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default EsriMap;
