import { CalendarDaysIcon, ClockIcon, LocateIcon } from "lucide-react";

export function WeddingDetails() {
    return(
        <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Wedding Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <CalendarDaysIcon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Fecha</h3>
              <p>Diciembre 07, 2024</p>
            </div>
            <div>
              <LocateIcon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>Altos de Pradomar, Salgar (Colombia)</p>
            </div>
            <div>
              <ClockIcon className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Hora</h3>
              <p>4:30 PM - 2:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    )
}