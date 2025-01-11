import { Sidebar } from '@/components/sidebar'
import dynamic from "next/dynamic";
import ResizeObserver from "resize-observer-polyfill";

if (typeof window === "undefined") {
    global.ResizeObserver = ResizeObserver;
}


const EsriMap = dynamic(() => import('./map.js'), {
  ssr: false,
});

export default function SatelliteDataVisualization() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ">
        
        <div >
          <EsriMap />
        </div>
      </div>
    </div>
  )
}