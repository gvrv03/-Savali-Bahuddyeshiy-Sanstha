import { Shield, Trash2, Heart, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CoreActivities() {
  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Activities</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our organization focuses on several key initiatives to create positive change in communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-accent/10 p-4 rounded-full mb-4">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-xl">Child Friend Police Station</CardTitle>
              <CardDescription>2 Villages</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                A dedicated initiative aiming to create a safe and supportive environment for children within the
                community, fostering trust and cooperation between law enforcement and young individuals.
              </p>
              <Link href="/Activities" className="text-accent hover:underline font-medium">
                Learn More
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-accent/10 p-4 rounded-full mb-4">
                <Trash2 className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-xl">Village Cleanliness Campaign</CardTitle>
              <CardDescription>10 Villages</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                An effort to promote cleanliness and hygiene practices in rural areas, enhancing the overall well-being
                and quality of life for residents while preserving the environment.
              </p>
              <Link href="/Activities" className="text-accent hover:underline font-medium">
                Learn More
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-accent/10 p-4 rounded-full mb-4">
                <Heart className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-xl">Child Marriage-Free India Campaign</CardTitle>
              <CardDescription>150 Villages</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                A nationwide movement focused on eradicating the harmful practice of child marriage, ensuring that
                children have the opportunity to pursue education and fulfill their potential.
              </p>
              <Link href="/Activities" className="text-accent hover:underline font-medium">
                Learn More
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-accent/10 p-4 rounded-full mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-xl">Campaign on Child Sexual Abuse</CardTitle>
              <CardDescription>50 Villages</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                A campaign dedicated to raising awareness about child sexual abuse, providing resources and support for
                victims, and advocating for legal and social measures to prevent such atrocities.
              </p>
              <Link href="/Activities" className="text-accent hover:underline font-medium">
                Learn More
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

