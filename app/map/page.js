import { Sidebar } from '@/components/sidebar'
import EsriMap from './map.js'

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