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
import {
  PieChartIcon,
  ReceiptLongIcon,
  WaterfallChartIcon,
  JavascriptIcon,
} from '@/components/icons/menu-icons';

const navigationLinks = [
  {
    label: 'Produkte',
    type: 'dropdown' as const,
    items: [
      {
        label: 'Portfolio-Tracking für Privatanleger',
        desc: 'Dein Vermögen immer im Blick',
        href: '#item1',
        icon: PieChartIcon,
      },
      {
        label: 'Dividendenkalender',
        desc: 'Angekündigte und erwartete Dividenden bis zu 24 Monate im Voraus.',
        href: '#item2',
        icon: ReceiptLongIcon,
      },
      {
        label: 'Parqet News Feed',
        desc: ' Wirtschafts- und Finanznachrichten für deine Portfolios und Watchlists. ',
        href: '#item3',
        icon: WaterfallChartIcon,
      },
      {
        label: 'Developers',
        desc: 'Quality APIs for Wealth- and Fintechs',
        href: '#item4',
        icon: JavascriptIcon,
      },
    ],
  },
  { label: 'Preise', href: '/pricing', type: 'link' as const },
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
                        <ul className="grid gap-4 w-[400px]">
                          {link.items.map((item) => (
                            <li key={item.label}>
                              <NavigationMenuLink asChild>
                                <Link href={item.href} className="flex flex-row items-start gap-3">
                                  <item.icon className="mt-0.5 shrink-0 size-8" />
                                  <div>
                                    <div className="text-sm leading-none font-medium">
                                      {item.label}
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
                                      {item.desc}
                                    </p>
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
        <div className="fixed inset-x-0 top-16 z-50 flex h-[calc(100dvh-4rem)] flex-col bg-background px-6 pb-6 pt-4 animate-in slide-in-from-top-5 fade-in duration-200 lg:hidden overflow-y-auto">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) =>
                link.type === 'dropdown' ? (
                  <Accordion key={link.label} type="single" collapsible className="w-full">
                    <AccordionItem value={link.label} className="border-b-0">
                      <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          {link.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex flex-row items-center gap-3 text-muted-foreground hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              <item.icon className="shrink-0 size-5" />
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
