import { ArrowRight } from 'lucide-react'

export default function ContentSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="@container mx-auto">
                        <div>
                            <h2 className="text-foreground text-4xl font-semibold">Finanzsoftware die Spaß macht</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-xl text-balance">Es muss nicht kompliziert sein. Kinderleichte Bedienung und maximale Automatisierung sorgen für Durchblick ganz ohne Stress.</p>
                        </div>

                        <div className="@sm:grid-cols-2 @2xl:grid-cols-3 my-12 grid gap-6">
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">🔍</span>
                                <h3 className="text-xl font-medium">Voller Überblick</h3>
                                <p className="text-muted-foreground">Keine komplizierte Einrichtung oder Datenpflege - wir kümmern uns darum, damit du dich auf deinen Vermögensaufbau fokussieren kannst.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">📱</span>
                                <h3 className="text-xl font-medium">Immer verfügbar</h3>
                                <p className="text-muted-foreground">Vom Smartphone, Tablet, Laptop oder Desktop-Rechner - dein Vermögen hast du immer dabei und überall im Blick.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">🛡️</span>
                                <h3 className="text-xl font-medium">Deine Daten gehören dir</h3>
                                <p className="text-muted-foreground">Mit personenbezogenen Daten verdienen wir kein Geld. Wir speichern in 🇩🇪 Deutschland, anonymisieren und trennen deine Daten bei voller Transparenz.</p>
                            </div>
                        </div>

                        <div className="border-t">
                            <video muted autoPlay loop playsInline>
                                <source src="https://landing-assets.parqet.com/import.mp4" type="video/mp4" />
                                Dein Browser unterstützt keine Videos
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
