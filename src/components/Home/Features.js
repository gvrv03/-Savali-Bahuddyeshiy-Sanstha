import { Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Efforts include empowering women through sustainable livelihoods and business mentoring, safeguarding
                children from abuse, distributing Ekal Mahila Ration, promoting forest produce cultivation, raising
                awareness on water sanitation, and empowering tribal communities under the Forest Rights Act.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Efforts encompass education provision, leadership development for women and tribal youth, village health
                workshops, committee meetings for child protection, discussions on local development, awareness
                campaigns on appropriate touch, employment creation, environmental conservation, training initiatives,
                drug abuse prevention in schools, and support for single women.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

