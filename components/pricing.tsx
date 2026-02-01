import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Simpler Preis. Keine Tricks.
          </h1>
          <p>14 Tage kostenlos testen.</p>
        </div>

        <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
          <Card className="bg-muted flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Basis</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                0€ / Monat
              </span>
              <CardDescription className="text-sm">
                Alles, was du zum Starten brauchst. Parqet visualisiert dein
                Portfolio klar und übersichtlich mit den wichtigsten Kennzahlen.
                Jederzeit. Überall.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "1 Portfolio",
                  "1 Watchlist",
                  "∞ Wertpapier-Holdings",
                  "5 zusätzliche Assets(Cash, Crypto, Edelmetalle, etc.)",
                  "Basis Analyse (Performance, Dividenden-Dashbpard, ...)",
                  "40+ Währungen",
                  "Community-Support",
                  "Einfacher Datei-Import",
                  "Auto-Sync",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-muted relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Am beliebtesten
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Pro</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  11,99€ / Monat
                </span>
                <CardDescription className="text-sm">
                  Für ambitionierte Anleger. Erhalte noch mehr Transparenz und
                  detaillierte Analysen zu deinen Investments.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "5 Portfolios",
                    "5 Watchlists",
                    "∞ Wertpapier-Holdings",
                    "∞ zusätzliche Assets(Cash, Crypto, Edelmetalle, etc.)",
                    "Volle Analyse-Features",
                    "Parqet X-Ray",
                    "Dividenden-Prognose",
                    "Performace-Vergleich",
                    "Steuer-Dashboard",
                    "40+ Währungen",
                    "Email-Support",
                    "Einfacher Datei-Import",
                    "Auto-Sync",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className="bg-muted flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Investor</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                29,99€ / Monat
              </span>
              <CardDescription className="text-sm">
                Für etablierte Investoren. Spiegle deine vielen Wertpapiere,
                Portfolios und Watchlists mit voller Analyse und Insights.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  '15 Portfolio', '15 Watchlist', '∞ Wertpapier-Holdings', "∞ zusätzliche Assets(Cash, Crypto, Edelmetalle, etc.)", "Volle Analyse-Features (Performance, Dividenden-Dashbpard, ...)", "40+ Währungen", "Priority-Support", "Einfacher Datei-Import", "Auto-Sync"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
