'use client'

import { useState } from 'react'
import { Search, Layers, Calendar, BarChart, Download, Settings, ZoomIn, ZoomOut, Maximize, RotateCcw, Satellite } from 'lucide-react'
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
    <div className="w-80 bg-background border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold mb-2">Satellite Data Portal</h1>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input className="pl-8" placeholder="Search satellite data..." />
        </div>
      </div>
      
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Layers className="mr-2" /> NASRDA Imagery
            </h2>
            <Accordion type="multiple" className="w-full">
              {nasrdaImagery.map((yearGroup) => (
                <AccordionItem value={yearGroup.id} key={yearGroup.id}>
                  <AccordionTrigger>{yearGroup.name}</AccordionTrigger>
                  <AccordionContent>
                    {yearGroup.layers.map((layer) => (
                      <div key={layer.id} className="flex items-center space-x-2 py-1">
                        <Checkbox 
                          id={`layer-${layer.id}`} 
                          checked={selectedLayers.includes(layer.id)}
                          onCheckedChange={() => toggleLayer(layer.id)}
                        />
                        <label htmlFor={`layer-${layer.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {layer.name}
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Layers className="mr-2" /> Satellite Layers
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {satelliteLayers.map((layer) => (
                <AccordionItem value={layer.id} key={layer.id}>
                  <AccordionTrigger>{layer.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{layer.description}</p>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`layer-${layer.id}`} 
                          checked={selectedLayers.includes(layer.id)}
                          onCheckedChange={() => toggleLayer(layer.id)}
                        />
                        <label htmlFor={`layer-${layer.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Show on map
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Calendar className="mr-2" /> Time Range
            </h2>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger>
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <BarChart className="mr-2" /> Data Analysis
            </h2>
            <Button className="w-full">Generate Report</Button>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Download className="mr-2" /> Download Options
            </h2>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geotiff">GeoTIFF</SelectItem>
                <SelectItem value="shapefile">Shapefile</SelectItem>
                <SelectItem value="netcdf">NetCDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Settings className="mr-2" /> Layer Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="opacity" className="text-sm font-medium">
                  Opacity: {opacity}%
                </label>
                <Slider
                  id="opacity"
                  min={0}
                  max={100}
                  step={1}
                  value={[opacity]}
                  onValueChange={(value) => setOpacity(value[0])}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Satellite className="mr-2" /> NASA Data
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {nasaData.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>{item.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`nasa-${item.id}`} 
                          checked={selectedLayers.includes(item.id)}
                          onValueChange={() => toggleLayer(item.id)}
                        />
                        <label htmlFor={`nasa-${item.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Show on map
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </ScrollArea>

      <Separator />

      <div className="p-4 border-t">
        <h2 className="text-lg font-semibold mb-2">Map Controls</h2>
        <div className="flex space-x-2">
          <Button size="icon" variant="outline"><ZoomIn className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline"><ZoomOut className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline"><Maximize className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline"><RotateCcw className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  )
}

