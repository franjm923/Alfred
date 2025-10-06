// components/header.tsx
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Marca */}
          <div className="flex items-center gap-8">
            <Link href="/" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">Acerca de</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Turnos</Link>
              <Link href="#" className="font-medium text-foreground">Home</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Perfil</Link>
            </nav>
          </div>

          {/* Usuario */}
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/caring-doctor.png" alt="Usuario" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="sm"
              onClick={async () => {
                await fetch("/api/session", { method: "DELETE" });
                window.location.href = "/login";
              }}
            >
              Salir
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
