import { Sidebar } from '@/components/sidebar'

export default function SatelliteDataVisualization() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
        >
          
        </div>
      </div>
    </div>
  )
}