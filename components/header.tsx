'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

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
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        // Check initial scroll
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
                isScrolled || isOpen
                    ? 'bg-background/80 backdrop-blur-md border-b border-border/40'
                    : 'bg-transparent border-transparent'
            )}
        >
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <Link href="/" aria-label="home" className="flex items-center space-x-2">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationLinks.map((link) =>
                                    link.type === 'dropdown' ? (
                                        <NavigationMenuItem key={link.label}>
                                            <NavigationMenuTrigger className="bg-transparent">
                                                {link.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4">
                                                    {link.items.map((item) => (
                                                        <li key={item.label}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                >
                                                                    <div className="text-sm font-medium leading-none">
                                                                        {item.label}
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={link.label}>
                                            <Link href={link.href} legacyBehavior passHref>
                                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Right Side Items */}
                <div className="flex items-center gap-4">
                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-2">
                        {!isScrolled ? (
                            <>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="#">Login</Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link href="#">Sign Up</Link>
                                </Button>
                            </>
                        ) : (
                            <Button size="sm" asChild>
                                <Link href="#">Get Started</Link>
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed h-fit inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-background px-6 pb-6 pt-4 animate-in slide-in-from-top-5 fade-in duration-200 lg:hidden overflow-y-auto">
                    <div className="flex flex-1 flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            {navigationLinks.map((link) =>
                                link.type === 'dropdown' ? (
                                    <Accordion
                                        key={link.label}
                                        type="single"
                                        collapsible
                                        className="w-full"
                                    >
                                        <AccordionItem value={link.label} className="border-b-0">
                                            <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">
                                                {link.label}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col gap-3 pl-4">
                                                    {link.items.map((item) => (
                                                        <Link
                                                            key={item.label}
                                                            href={item.href}
                                                            className="text-sm text-muted-foreground hover:text-foreground"
                                                            onClick={() => setIsOpen(false)}
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
                                        className="py-3 text-base font-medium border-b border-border/50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    {/* Mobile Footer/Auth */}
                    <div className="mt-6 flex flex-col gap-3 pt-6 border-t pb-10">
                        <Button variant="outline" className="w-full justify-center" asChild>
                            <Link href="#">Login</Link>
                        </Button>
                        <Button className="w-full justify-center" asChild>
                            <Link href="#">Sign Up</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};
