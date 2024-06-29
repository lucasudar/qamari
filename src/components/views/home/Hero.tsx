import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="bg-gray-50 dark:bg-background py-14">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl px-4">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl md:text-5xl text-gray-800 dark:text-foreground mb-4 leading-tight">
                        We can build anything that you want
                    </h1>
                    <p className="font-bold text-lg text-gray-600 dark:text-foreground/80 mb-4">
                        Our team of professionals will help you to build your dream project.
                    </p>
                    <ul className="font-bold list-disc list-inside space-y-2 text-gray-600 dark:text-foreground/80">
                        <li>Design and drafting indoor and outdoor ideas based on your needs</li>
                        <li>Fencing and gate building services</li>
                        <li>Deck and patio building services</li>
                        <li>Railing and spindles design and installation</li>
                        <li>Framing and drywall installation</li>
                    </ul>
                    <div className="pt-6 flex flex-row justify-around">
                        <Link href="/contact">
                            <Button
                                className="gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
                                size="lg"
                            >
                                <span>Start Your Project with Us Today</span>
                            </Button>
                        </Link>
                        <Link href={`tel:${siteConfig.phone}`}>
                            <Button
                                className="gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-gray-900 transition duration-300 ease-in-out shadow-lg"
                                size="lg"
                            >
                                <span>Call Now</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/hero.jpg"
                        priority
                        alt="Hero"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
