"use client"

import { ChevronDown, ChevronUp, X } from "lucide-react"
import { useState } from "react"

interface EquipmentSubItem {
  id: string
  name: string
  quantity?: number
  unit?: string
  items?: Array<{
    quantity: number
    name: string
  }>
}

interface EquipmentItem {
  id: string
  name: string
  subItems?: EquipmentSubItem[]
  isExpanded?: boolean
}

interface EquipmentListModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EquipmentListModal({ isOpen, onClose }: EquipmentListModalProps) {
  const [equipmentItems] = useState<EquipmentItem[]>([
    {
      id: "1",
      name: "Venue Decoration",
      subItems: [
        {
          id: "1-1",
          name: "Stage backdrop and props",
          items: [
            { quantity: 56, name: "Tableware" },
            { quantity: 23, name: "Curtains" },
            { quantity: 12, name: "Carpets" },
            { quantity: 156, name: "Brochures/Information leaflets" },
            { quantity: 23, name: "Speaker cards" },
            { quantity: 43, name: "Name tags" },
          ],
        },
        { id: "1-2", name: "Table and chair covers" },
        { id: "1-3", name: "Floral arrangements and centerpieces" },
        { id: "1-4", name: "LED screens or banners" },
      ],
    },
    {
      id: "2",
      name: "Transportation Decoration",
      subItems: [],
    },
    {
      id: "3",
      name: "Lighting",
      subItems: [],
    },
    {
      id: "4",
      name: "Videographers",
      subItems: [],
    },
    {
      id: "5",
      name: "Security",
      subItems: [],
    },
    {
      id: "6",
      name: "Food Stalls",
      subItems: [],
    },
  ])

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  if (!isOpen) return null

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const getMaxHeight = () => {
    const hasExpandedLevel1 = Object.values(expandedItems).some(value => value)
    const hasExpandedLevel2 = Object.keys(expandedItems).some(key => 
      key.includes('-') && expandedItems[key]
    )

    if (hasExpandedLevel2) {
      return 'max-h-[600px]' // Maximum height with two levels expanded
    } else if (hasExpandedLevel1) {
      return 'max-h-[500px]' // Medium height with one level expanded
    }
    return 'max-h-[400px]' // Base height with no expansions
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 overflow-hidden relative z-10">
        {/* Header */}
        <div className="bg-blue-100 px-6 py-4 relative">
          <button
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-center font-semibold text-gray-800">Equipment List</h2>
        </div>

        {/* Equipment Items */}
        <div className="p-6">
          <div className={`space-y-4 ${getMaxHeight()} overflow-y-auto transition-all duration-300`}>
            {equipmentItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0 pb-2">
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="text-gray-700">{item.name}</span>
                  {expandedItems[item.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedItems[item.id] && item.subItems && (
                  <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.id}>
                        <button
                          onClick={() => toggleExpand(subItem.id)}
                          className="w-full flex items-center justify-between text-left py-2"
                        >
                          <span className="text-gray-600">{subItem.name}</span>
                          {subItem.items &&
                            (expandedItems[subItem.id] ? (
                              <ChevronUp className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            ))}
                        </button>

                        {expandedItems[subItem.id] && subItem.items && (
                          <div className="pl-4 space-y-2 py-2">
                            {subItem.items.map((detail, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-500">
                                <span className="w-8 text-right">{detail.quantity}</span>
                                <span className="ml-2">{detail.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}