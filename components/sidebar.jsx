'use client'

import { useState } from 'react'
import { Search, Layers, Info, ZoomIn, ZoomOut, Maximize, RotateCcw } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

// Sample data for layers
const sampleLayers = [
  { id: '1', name: 'Temperature', description: 'Global surface temperature data' },
  { id: '2', name: 'Precipitation', description: 'Rainfall and snowfall data' },
  { id: '3', name: 'Vegetation', description: 'Normalized Difference Vegetation Index (NDVI)' },
  { id: '4', name: 'Sea Ice', description: 'Arctic and Antarctic sea ice extent' },
  { id: '5', name: 'Cloud Cover', description: 'Global cloud coverage data' },
]

export function Sidebar() {
  const [selectedLayer, setSelectedLayer] = useState(null)

  return (
    <div className="w-80 bg-background border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold mb-2">Satellite Data </h1>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input className="pl-8" placeholder="Search datasets..." />
        </div>
      </div>
      
      <ScrollArea className="flex-grow">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <Layers className="mr-2" /> Available Layers
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {sampleLayers.map((layer) => (
              <AccordionItem value={layer.id} key={layer.id}>
                <AccordionTrigger>{layer.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{layer.description}</p>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`layer-${layer.id}`} 
                        checked={selectedLayer === layer.id}
                        onCheckedChange={() => setSelectedLayer(layer.id)}
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
      </ScrollArea>

      <Separator />

      <div className="p-4 border-t">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Info className="mr-2" /> Layer Information
        </h2>
        {selectedLayer ? (
          <div className="text-sm">
            <p><strong>Selected Layer:</strong> {sampleLayers.find(l => l.id === selectedLayer)?.name}</p>
            <p><strong>Description:</strong> {sampleLayers.find(l => l.id === selectedLayer)?.description}</p>
          </div>
        ) : (
          <p className="text-sm text-gray-600">Select a layer to view its information.</p>
        )}
      </div>

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

