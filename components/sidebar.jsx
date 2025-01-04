'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronRight, Layers, Calendar, BarChart, Download, Settings, Satellite, HelpCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// NASRDA Imagery (GeoTIFFs)
const nasrdaImagery = [
  {
    id: 'abuja-2023',
    name: 'Abuja Imagery (2023)',
    layers: [
      { id: 'abuja-2023-hr', name: 'Abuja High-Resolution Imagery (2023)' },
      { id: 'abuja-2023-ms', name: 'Abuja Multispectral Imagery (2023)' },
    ]
  },
  {
    id: 'abuja-2022',
    name: 'Abuja Imagery (2022)',
    layers: [
      { id: 'abuja-2022-hr', name: 'Abuja High-Resolution Imagery (2022)' },
      { id: 'abuja-2022-ms', name: 'Abuja Multispectral Imagery (2022)' },
    ]
  },
  {
    id: 'abuja-2021',
    name: 'Abuja Imagery (2021)',
    layers: [
      { id: 'abuja-2021-hr', name: 'Abuja High-Resolution Imagery (2021)' },
    ]
  },
]

// Sample data for satellite layers
const satelliteLayers = [
  { id: '1', name: 'MODIS Terra', description: 'Moderate Resolution Imaging Spectroradiometer on Terra satellite' },
  { id: '2', name: 'Landsat 8', description: 'Operational Land Imager (OLI) and Thermal Infrared Sensor (TIRS)' },
  { id: '3', name: 'Sentinel-2', description: 'High-resolution optical imagery for land monitoring' },
  { id: '4', name: 'GOES-16', description: 'Geostationary Operational Environmental Satellite' },
  { id: '5', name: 'NOAA-20', description: 'Visible Infrared Imaging Radiometer Suite (VIIRS)' },
]

// NASA data
const nasaData = [
  { id: 'nasa-1', name: 'Near Real-Time Imagery' },
  { id: 'nasa-2', name: 'Recent Natural Events' },
  { id: 'nasa-3', name: 'Air Quality Data' },
  { id: 'nasa-4', name: 'Weather Information' },
]

export function Sidebar() {
  const [selectedLayers, setSelectedLayers] = useState([])
  const [opacity, setOpacity] = useState(100)
  const [timeRange, setTimeRange] = useState('24h')

  const toggleLayer = (layerId) => {
    setSelectedLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    )
  }

  return (
    <div className="w-80 bg-[#1a1a1a] text-white h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold mb-4">Satellite Data Portal</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input className="pl-10 bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400" placeholder="Search satellite data..." />
        </div>
      </div>
      
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-6">
          <AccordionSection title="NASRDA Imagery" icon={Layers}>
            {nasrdaImagery.map((yearGroup) => (
              <AccordionItem value={yearGroup.id} key={yearGroup.id} className="border-b-0">
                <AccordionTrigger className="hover:no-underline hover:bg-[#2a2a2a] py-2 px-4">
                  {yearGroup.name}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-2">
                  {yearGroup.layers.map((layer) => (
                    <div key={layer.id} className="flex items-center space-x-2 py-1 px-4 hover:bg-[#2a2a2a]">
                      <Checkbox 
                        id={`layer-${layer.id}`} 
                        checked={selectedLayers.includes(layer.id)}
                        onCheckedChange={() => toggleLayer(layer.id)}
                        className="border-gray-600 text-blue-500"
                      />
                      <label htmlFor={`layer-${layer.id}`} className="text-sm font-medium leading-none cursor-pointer">
                        {layer.name}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionSection>

          <AccordionSection title="Satellite Layers" icon={Satellite}>
            {satelliteLayers.map((layer) => (
              <AccordionItem value={layer.id} key={layer.id} className="border-b-0">
                <AccordionTrigger className="hover:no-underline hover:bg-[#2a2a2a] py-2 px-4">
                  {layer.name}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-2">
                  <div className="space-y-2 px-4">
                    <p className="text-sm text-gray-400">{layer.description}</p>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`layer-${layer.id}`} 
                        checked={selectedLayers.includes(layer.id)}
                        onCheckedChange={() => toggleLayer(layer.id)}
                        className="border-gray-600 text-blue-500"
                      />
                      <label htmlFor={`layer-${layer.id}`} className="text-sm font-medium leading-none cursor-pointer">
                        Show on map
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionSection>

          <Section title="Time Range" icon={Calendar}>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-full bg-[#2a2a2a] border-gray-700 text-white">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-gray-700 text-white">
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </Section>

          <Section title="Data Analysis" icon={BarChart}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Generate Report</Button>
          </Section>

          <Section title="Download Options" icon={Download}>
            <Select>
              <SelectTrigger className="w-full bg-[#2a2a2a] border-gray-700 text-white">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-gray-700 text-white">
                <SelectItem value="geotiff">GeoTIFF</SelectItem>
                <SelectItem value="shapefile">Shapefile</SelectItem>
                <SelectItem value="netcdf">NetCDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </Section>

          <Section title="Layer Settings" icon={Settings}>
            <div className="space-y-4">
              <div>
                <label htmlFor="opacity" className="text-sm font-medium block mb-2">
                  Opacity: {opacity}%
                </label>
                <Slider
                  id="opacity"
                  min={0}
                  max={100}
                  step={1}
                  value={[opacity]}
                  onValueChange={(value) => setOpacity(value[0])}
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>
            </div>
          </Section>

          <AccordionSection title="NASA Data" icon={Satellite}>
            {nasaData.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="border-b-0">
                <AccordionTrigger className="hover:no-underline hover:bg-[#2a2a2a] py-2 px-4">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-2">
                  <div className="space-y-2 px-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`nasa-${item.id}`} 
                        checked={selectedLayers.includes(item.id)}
                        onCheckedChange={() => toggleLayer(item.id)}
                        className="border-gray-600 text-blue-500"
                      />
                      <label htmlFor={`nasa-${item.id}`} className="text-sm font-medium leading-none cursor-pointer">
                        Show on map
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionSection>
        </div>
      </ScrollArea>

      </div>
  )
}

function AccordionSection({ title, icon: Icon, children }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <Icon className="mr-2 h-5 w-5" /> {title}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {children}
      </Accordion>
    </div>
  )
}

function Section({ title, icon: Icon, children }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <Icon className="mr-2 h-5 w-5" /> {title}
      </h2>
      {children}
    </div>
  )
}

