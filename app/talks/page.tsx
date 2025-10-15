import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TalkCard } from "@/components/talk-card"

const talks = [
  {
    title: "Recent Advances in Algebraic Geometry",
    event: "International Congress of Mathematicians",
    location: "Paris, France",
    date: "July 2024",
    type: "Invited Talk",
  },
  {
    title: "Cohomological Methods and Applications",
    event: "European Mathematical Society Meeting",
    location: "Berlin, Germany",
    date: "March 2024",
    type: "Contributed Talk",
  },
]

const conferences = [
  {
    name: "Algebraic Geometry Symposium",
    location: "Cambridge, UK",
    date: "September 2024",
  },
  {
    name: "Workshop on Modern Algebra",
    location: "Turin, Italy",
    date: "June 2024",
  },
]

export default function TalksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="space-y-16">
          {/* Talks */}
          <section id="talks">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Talks & Presentations</h2>
            <div className="space-y-6">
              {talks.map((talk, index) => (
                <TalkCard key={index} {...talk} />
              ))}
            </div>
          </section>

          {/* Conferences */}
          <section id="conferences">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Conferences Attended</h2>
            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <div key={index} className="flex flex-col gap-1 border-l-2 border-primary pl-4">
                  <h3 className="font-medium text-foreground">{conf.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {conf.location} • {conf.date}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
