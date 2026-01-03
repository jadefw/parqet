'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const navigationLinks = [
    {
        label: 'Produkte',
        type: 'dropdown' as const,
        items: [
            { label: 'Portfolio-Tracking für Privatanleger', href: '#item1' },
            { label: 'Dividendenkalender', href: '#item2' },
            { label: 'Parqet News Feed', href: '#item3' },
            { label: 'Developers', href: '#item4' },
        ],
    },
    { label: 'Preise', href: '#', type: 'link' as const },
    { label: 'Blog', href: '#', type: 'link' as const },
    { label: 'Community', href: '#', type: 'link' as const },
    { label: 'Insights', href: '#', type: 'link' as const },
    { label: 'Rechner', href: '#', type: 'link' as const },
];

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    'fixed z-20 w-full transition-all duration-300',
                    isScrolled && 'bg-background/75 border-b border-black/5 backdrop-blur-lg'
                )}
            >
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
                        <div className="flex w-full justify-between gap-6 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2"
                            >
                                <Logo />
                            </Link>

                            <Button
                                variant="ghost"
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </Button>

                            <div className="m-auto hidden size-fit lg:block">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        {navigationLinks.map((link) =>
                                            link.type === 'dropdown' ? (
                                                <NavigationMenuItem key={link.label}>
                                                    <NavigationMenuTrigger>
                                                        {link.label}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid gap-2 p-2">
                                                            {link.items.map((item) => (
                                                                <li key={item.label}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={item.href}
                                                                            className="block text-sm"
                                                                        >
                                                                            {item.label}
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            ) : (
                                                <NavigationMenuItem key={link.label}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={link.href}
                                                            className="text-sm text-foreground hover:text-foreground/80"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            )
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <div className="flex flex-col gap-4">
                                    {navigationLinks.map((link) =>
                                        link.type === 'dropdown' ? (
                                            <Accordion
                                                key={link.label}
                                                type="single"
                                                collapsible
                                                className="border-b"
                                            >
                                                <AccordionItem
                                                    value={link.label.toLowerCase()}
                                                    className="border-0"
                                                >
                                                    <AccordionTrigger className="py-3 text-base font-normal text-foreground hover:no-underline">
                                                        {link.label}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-2 pl-4">
                                                            {link.items.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    className="py-2 text-sm text-muted-foreground hover:text-foreground"
                                                                    onClick={() =>
                                                                        setMobileMenuOpen(false)
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        ) : (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="border-b py-3 text-base text-foreground"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}
                                >
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button asChild size="sm" className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                                >
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
