import { OrganizerProfile } from "@/components/customer_POV/organizer-profile"

export default function OrganizerPage({ params }: { params: { id: string } }) {
  return <OrganizerProfile id={params.id} />
}

