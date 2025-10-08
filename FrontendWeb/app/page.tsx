// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirige la raíz a /home para evitar 404/500 tras login/callback
  redirect("/home");
}
