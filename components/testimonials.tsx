import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CornerBorders } from '@/components/ui/corner-borders'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border rounded-lg py-8 md:py-12">
                <CornerBorders />
                <div className="space-y-8 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Amplify Your Brand's Influence</h2>
                    <p>We take great pride in creating visually stunning designs for our clients and have the talent and ability to understand complex client requirements quickly and then develop logical and straightforward solutions.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img
                                className="h-6 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="24"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">TKV Creatographics transformed our online presence with a sleek, user-friendly website. Our traffic has doubled since the redesign, and our customers frequently compliment the new look. The team was professional, responsive, and truly understood our vision.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/images/clientlogos/Aureli.png"
                                            alt="Aureli"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AU</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">CEO</cite>
                                        <span className="text-muted-foreground block text-sm">Aureli</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">The creative team at TKV Creatographics delivered stunning graphics that perfectly captured our brand's essence. Their attention to detail and unique design concepts set us apart from the competition.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/images/clientlogos/unpause.png"
                                            alt="Unpause"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>UP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Founder</cite>
                                        <span className="text-muted-foreground block text-sm">Unpause</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Thanks to TKV Creatographics, our website runs smoothly and is always up-to-date. Their proactive maintenance service ensures that we never face any downtime.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/images/clientlogos/Veira.png"
                                            alt="Veiralife"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>VL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">CEO</cite>
                                        <span className="text-muted-foreground block text-sm">Veiralife</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>TKV Creatographics' digital marketing strategies significantly boosted our online engagement and sales. Their expertise in SEO, SEM, and social media marketing is unmatched.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/images/clientlogos/Kinesis.png"
                                            alt="Kinesis Pain Speciality"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>KP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Founder</p>
                                        <span className="text-muted-foreground block text-sm">Kinesis Pain Speciality</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </div>
        </section>
    )
}
