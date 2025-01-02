import { Sidebar } from '@/components/sidebar'

export default function SatelliteDataVisualization() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        {/* Map placeholder */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
        >
          {/* You can replace this with your actual map component later */}
        </div>
      </div>
    </div>
  )
}