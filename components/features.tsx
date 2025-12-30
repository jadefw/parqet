import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-foreground text-4xl font-semibold">
                        Tools, mit denen du mehr erreichst
                        </h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
                        Dank tief integrierter Tools helfen wir dir, Deine Entscheidungsfindung zu verbessern und Dein finanzielles Wachstum vorantreiben.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-12 sm:grid-cols-2">
                        <div className="col-span-full space-y-4">
                            <Card
                                className="overflow-hidden px-6 sm:col-span-2">
                                <div className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8">
                                    <Image 
                                        src="https://i.nuuls.com/SOqYA.png"
                                        alt='Parqet X-Ray Preview'
                                        width={832}
                                        height={481}
                                    />
                                </div>
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Parqet X-Ray</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Analysiere deine Asset-Allocation unter Berücksichtigung der Zusammensetzung von ETFs. So siehst du auf einen Blick, wie sich Einzelaktien in ETFs überschneiden.</p>
                            </div>
                        </div>
                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                className="p-6">
                                <Image 
                                    src="https://i.nuuls.com/EuzxV.png"
                                    alt='Dividendenkalender Preview'
                                    width={832}
                                    height={482}
                                />
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">Dividendenkalender</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Jeden Monat Dividende? Erhalte Zugriff auf die Dividendendaten zu mehr als 35.000 Dividendentiteln – inklusive mächtiger Filter und Prognosen.</p>
                            </div>
                        </div>

                        <div className="grid grid-rows-[1fr_auto] space-y-4">
                            <Card
                                className="overflow-hidden p-6">
                                <Image 
                                    src="https://i.nuuls.com/ReRH8.png"
                                    alt='Watchlists Preview'
                                    width={832}
                                    height={505}
                                />
                            </Card>
                            <div>
                                <h3 className="text-foreground text-lg font-semibold">Watchlists</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Verliere spannende Wertpapiere oder Cryptos nicht aus den Augen, sondern verfolge deren Wertentwicklung in deiner persönlichen Watchlist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
