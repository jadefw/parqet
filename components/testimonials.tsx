import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import Link from 'next/link'

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Lisa Osada',
            role: 'Gründerin Aktiengram',
            stars: 5,
            avatar: 'https://parqet.com/social-proof/aktiengram.png',
            content: "Mit Parqet kann ich nun auf einen Blick sehen, wie sich die einzelnen Depots entwickeln und vor allem sehe ich auch die tatsächliche Rendite meiner Aktien inklusive Dividenden und Kursgewinnen und -verlusten. Ich nutze das Tool nun bereits seit 4 Jahren und bin nach wie vor mehr als begeistert.",
        },
        {
            name: 'Jonathan Neuscheler',
            role: 'Geschäftsführer Abilitato GmbH',
            stars: 5,
            avatar: 'https://parqet.com/social-proof/abilitato.png',
            content: 'Wer sich ein Depot aus verschiedenen Einzelaktien aufbaut, verliert schnell den Überblick. Die Gefahr: Anleger wissen nicht mehr, ob sie überhaupt noch gut diversifiziert sind und wie sich die einzelnen Investments entwickeln. Mit Parqet können Investoren die Kontrolle über ihr Depot zurückgewinnen: Einfach. Übersichtlich. Auf allen Geräten.',
        },
        {
            name: 'Oliver Baumann',
            role: 'Parqet User',
            stars: 5,
            avatar: 'https://parqet.com/social-proof/parqet-nutzer.png',
            content: 'ch habe mein Depot bei der DKB und habe dort so gut wie keinen Überblick über die Performance oder Gewichtung. Dank Parqet habe ich das und es ist unglaublich motivierend, zu sehen, wie das Vermögen wächst, wieviele Dividenden man bekommt, usw. Ich glaube ich bin einer der ersten Nutzer und Sumit und sein Team entwickeln die Seite ständig weiter. Hut ab und vielen Dank!',
        },
    ]

    return (
        <section>
            <div className="py-24">
                <div className='mx-auto w-full max-w-5xl px-6'>
                    <div className="text-center">
                        <h2 className="text-foreground text-4xl font-semibold">
                            Das sagen unsere Kunden
                        </h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
                        Es handelt sich um Erfahrungen aus der Parqet-Community. Du kannst dir <Link className='underline underline-offset-3 hover:text-foreground' href="https://testimonial.to/parqet-bewertung/all">alle Kundenstimmen</Link> ansehen oder <Link className='underline underline-offset-3 hover:text-foreground' href="https://testimonial.to/parqet-bewertung/">deine eigene Erfahrung</Link> mit Parqet teilen.
                        </p>
                    </div>
                    <div className="@container mx-auto w-full max-w-5xl px-6">
                        <div className="@lg:grid-cols-2 @3xl:grid-cols-3 @3xl:gap-12 grid gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div key={index}>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn('size-4', i < testimonial.stars ? 'fill-primary stroke-primary' : 'fill-foreground/15 stroke-transparent')}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-foreground my-4">{testimonial.content}</p>
                                    <div className="flex items-center gap-2">
                                        <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="text-foreground text-sm font-medium">{testimonial.name}</div>
                                        <span
                                            aria-hidden
                                            className="bg-foreground/25 size-1 rounded-full"></span>
                                        <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
