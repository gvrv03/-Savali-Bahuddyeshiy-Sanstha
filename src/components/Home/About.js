// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/About/img (2).jpg"
                  alt="Savali Bahuddyeshiy Sanstha community work"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Savali Bahuddyeshiy Sanstha</h3>
            <p className="text-gray-600 leading-relaxed">
              Savali Bahuddyeshiy Sanstha is a registered, non-profit, secular, voluntary organization working for rural
              and urban development. Established in 2020 with the specific objective of solving rural problems and
              social development, creating public awareness.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under the employment guarantee scheme, we address livelihood issues, community health, quality education,
              women empowerment, women and child rights awareness, justice for children in child sexual abuse cases,
              public awareness to stop child marriage, and implementation of village cleanliness campaigns.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Savali Multipurpose Sanstha Kalamb works to achieve sustainable development with special emphasis on women
              empowerment of underprivileged tribal communities. We are a registered society under Act 1860.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/AboutUs">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

