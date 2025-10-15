import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Building2 } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <section>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Email</h3>
                <a
                  href="mailto:orazio.nicolosi@unito.it"
                  className="text-base text-primary transition-colors hover:text-accent"
                >
                  orazio.nicolosi@unito.it
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Institution</h3>
                <p className="text-base text-muted-foreground">
                  Dipartimento di Matematica "Giuseppe Peano"
                  <br />
                  Università degli Studi di Torino
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Address</h3>
                <p className="text-base text-muted-foreground">
                  Via Carlo Alberto 10
                  <br />
                  10123 Torino, Italy
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
