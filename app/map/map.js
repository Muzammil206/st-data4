"use client";

import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/assets/esri/themes/light/main.css"; 

const EsriMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let view; 

    if (mapRef.current) {
      const baseMap = new Map({
        basemap: "topo-vector", 
      });

      const layer = new ImageryLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
        format: "jpgpng" // server exports in either jpg or png format
      });


      const map = new Map({
        basemap: "gray-vector",
        layers: [layer]
      });

      view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-100, 40], 
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
      
      <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default EsriMap;
