import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/Utility/PageHeader"
import { activityDetails } from "@/JSONData/HomeData"
import Image from "next/image"

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader title="Activities" />
      <div className="container mx-auto py-5 px-3 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activityDetails.map((activity) => (
            <Card key={activity.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{activity.noOf}</p>
                <p className="text-gray-600">{activity.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

