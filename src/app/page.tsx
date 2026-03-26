import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Wrench, Bike, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function FahrradRaumWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold mb-6"
        >
          Fahrrad Raum Braunschweig
        </motion.h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Deine zuverlässige Fahrradwerkstatt für schnelle Reparaturen,
          E‑Bike Service und professionelle Wartung.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="px-6 py-3 text-lg rounded-2xl">
            Termin vereinbaren
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg rounded-2xl">
            Anrufen
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Unsere Leistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Wrench className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reparaturen</h3>
              <p>
                Schnelle Hilfe bei Defekten – von Bremsen bis Schaltung.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Bike className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">E‑Bike Service</h3>
              <p>
                Wartung und Reparatur von modernen E‑Bikes und Pedelecs.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Star className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inspektion</h3>
              <p>
                Regelmäßiger Check für Sicherheit und lange Lebensdauer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Über uns</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Fahrrad Raum steht für ehrliche Beratung, schnelle Reparaturen und
          persönlichen Service. Wir kümmern uns um dein Fahrrad, als wäre es
          unser eigenes.
        </p>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Kundenbewertungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl shadow">
              <CardContent className="p-6">
                <p className="mb-4">★★★★★</p>
                <p>
                  Super schneller Service und sehr freundlich. Mein Fahrrad war
                  am selben Tag fertig!
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Kontakt</h2>

          <div className="space-y-4 text-lg">
            <p className="flex justify-center items-center gap-2">
              <MapPin /> Neustadtring 52, Braunschweig
            </p>
            <p className="flex justify-center items-center gap-2">
              <Phone /> 0531 37956275
            </p>
            <p>Mo–Fr: 10:00 – 18:00 | Sa: 11:00 – 14:00</p>
          </div>

          <div className="mt-8">
            <Button className="px-6 py-3 text-lg rounded-2xl">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fahrrad Raum Braunschweig
      </footer>
    </div>
  );
}
