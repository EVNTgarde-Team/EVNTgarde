"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export function BookingForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Organizer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Organizer</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 px-1 py-2">
          {/* Event Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Event Details</h3>
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" placeholder="Hello World Concert" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Concert Street Ad City" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Concert" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concert">Concert</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="2000-3500" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2000-3500">2000-3500</SelectItem>
                    <SelectItem value="3500-5000">3500-5000</SelectItem>
                    <SelectItem value="5000+">5000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="hours">Number of Hours a Day</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="7" />
                  </SelectTrigger>
                  <SelectContent>
                    {[4, 5, 6, 7, 8, 9, 10].map((hours) => (
                      <SelectItem key={hours} value={hours.toString()}>
                        {hours}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="space">Space Configuration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Open Space" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open Space</SelectItem>
                    <SelectItem value="theater">Theater Style</SelectItem>
                    <SelectItem value="banquet">Banquet Style</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Preferred Date */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Preferred Date</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>From</Label>
                <div className="relative">
                  <Input type="date" />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>To</Label>
                <div className="relative">
                  <Input type="date" />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Client Information</h3>
            <div className="space-y-2">
              <Label htmlFor="client-name">Organization/Client Name</Label>
              <Input id="client-name" placeholder="Organization/Client Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client-address">Organization/Client Address</Label>
              <Input id="client-address" placeholder="123 Laufey Street Manila City" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="orgemail@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact No.</Label>
                <Input id="contact" type="tel" placeholder="09209182649" />
              </div>
            </div>
          </div>

          {/* Package */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Package</h3>
            <div className="space-y-2">
              <Label>Available Services</Label>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="venue" />
                    <label htmlFor="venue" className="text-sm">
                      Venue Decoration
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="transport" />
                    <label htmlFor="transport" className="text-sm">
                      Transportation
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="video" />
                    <label htmlFor="video" className="text-sm">
                      Videography
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="photo" />
                    <label htmlFor="photo" className="text-sm">
                      Photography
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lighting" />
                    <label htmlFor="lighting" className="text-sm">
                      Lighting
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="security" />
                    <label htmlFor="security" className="text-sm">
                      Security
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="food" />
                    <label htmlFor="food" className="text-sm">
                      Food Stalls
                    </label>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-gray-500">
                  <div>Php 156,000</div>
                  <div>Php 9,500</div>
                  <div>Php 21,000</div>
                  <div>Php 16,500</div>
                  <div>Php 87,000</div>
                  <div>Php 51,500</div>
                  <div>Php 266,000</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="other-services">Other services:</Label>
              <Textarea id="other-services" placeholder="Additional services or special requests" />
            </div>
          </div>

          <Button className="w-full bg-[#2B5AB3]">Preview</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

