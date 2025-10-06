// app/page.tsx
"use client";

import { useState } from "react";
import WeeklyCalendar from "@/components/weekly-calendar";
import AppointmentList from "@/components/appointments-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 🔌 Conectar luego al backend:
  // - Pedí "stats" por día para la semana del selectedDate
  // - Pedí "turnos de hoy" y "próximos turnos"
  // const stats = await fetch(...);
  // const today = await fetch(...);
  // const upcoming = await fetch(...);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Calendario semanal */}
          <Card>
            <CardHeader>
              <CardTitle>Calendario Semanal</CardTitle>
            </CardHeader>
            <CardContent>
              <WeeklyCalendar
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
                stats={[]} // ← cuando conectes, pasá [{date:'2025-10-16', count: 3}, ...]
              />
            </CardContent>
          </Card>

          {/* Turnos de hoy */}
          <AppointmentList
            title={`Turnos de Hoy — ${selectedDate.toLocaleDateString("es-AR", {
              weekday: "long",
              day: "numeric",
            })}`}
            items={[]} // ← luego: turnos del día seleccionado
            emptyHint="Cuando confirmes turnos desde WhatsApp o admin, se listarán acá."
          />
        </div>

        {/* Próximos turnos */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Próximos Turnos</CardTitle>
          </CardHeader>
          <CardContent>
            <AppointmentList
              title=""              // no duplicamos el título
              items={[]}            // ← luego: próximos turnos ordenados asc
              variant="compact"     // versión compacta para sidebar
              emptyHint="No hay turnos próximos aún."
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
