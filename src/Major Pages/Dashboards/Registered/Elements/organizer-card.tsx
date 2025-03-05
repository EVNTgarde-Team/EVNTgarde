import { Card, Flex, Text, Heading, Badge } from "@radix-ui/themes";

interface OrganizerCardProps {
  id: number;
  name: string;
  category: string;
  location: string;
  packages: { name: string; price: number; details: string }[];
  rating: number;
  image: string;
}

export function OrganizerCard({
  name,
  category,
  location,
  packages,
  rating,
  image,
}: OrganizerCardProps) {
  return (
    <Card>
      <Flex direction="column" gap="3">
        {/* Organizer Image */}
        <div className="relative h-40 w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Organizer Details */}
        <Heading size="4">{name}</Heading>
        <Text color="gray" size="2">
          {category} • {location}
        </Text>

        {/* Rating */}
        <Badge color="yellow" variant="soft">
          ⭐ {rating} Rating
        </Badge>

        {/* Packages */}
        <div className="space-y-2">
          <Text weight="bold" size="2">
            Packages:
          </Text>
          {packages.map((pkg, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-2">
              <Text weight="bold">{pkg.name}</Text>
              <Text color="gray" size="2">
                ${pkg.price} • {pkg.details}
              </Text>
            </div>
          ))}
        </div>
      </Flex>
    </Card>
  );
}
