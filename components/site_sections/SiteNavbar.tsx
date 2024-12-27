'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { NavigationBar } from '@/prisma/sectionContent';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar({ navigationBar }: { navigationBar: NavigationBar }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-background/80 text-foreground shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="relative h-24 w-24 flex-shrink-0">
            {/* <Link href="/" className="flex items-center">
              <Image
                src={navigationBar.logo}
                alt="Purple Pen Logo"
                width={120}
                height={120}
                className="absolute left-0 top-0 h-24 w-24 object-contain transition-opacity hover:opacity-90"
                priority
                quality={100}
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                  backgroundColor: 'transparent'
                }}
              />
            </Link> */}
          </div>
          <div className="hidden flex-grow justify-center sm:flex">
            <DesktopNav items={navigationBar.items} />
          </div>
          <div className="hidden items-center space-x-4 sm:flex">
            <ThemeToggle />
            {navigationBar.ctaButton && (
              <Button
                asChild
                className="bg-primary px-6 py-2.5 text-base text-primary-foreground hover:bg-primary/90"
              >
                <Link href={navigationBar.ctaButton.link}>{navigationBar.ctaButton.text}</Link>
              </Button>
            )}
            <UserMenu userProfile={navigationBar.userProfile} />
          </div>
          <div className="sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:hidden">
                <MobileNav
                  items={navigationBar.items}
                  ctaButton={navigationBar.ctaButton}
                  userProfile={navigationBar.userProfile}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DesktopNav({ items }: { items: NavigationBar['items'] }) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.submenu ? (
              <NavigationMenuTrigger
                className={cn(
                  'rounded-md px-4 py-3 text-base font-medium text-foreground hover:text-primary',
                  pathname.startsWith(item.link) && 'bg-accent text-primary'
                )}
              >
                {item.label}
              </NavigationMenuTrigger>
            ) : (
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'rounded-md px-4 py-3 text-base font-medium text-foreground hover:text-primary',
                    pathname === item.link && 'bg-accent text-primary'
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
            {item.submenu && (
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={subItem.link}
                          className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            pathname === subItem.link && 'bg-accent text-accent-foreground'
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{subItem.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({
  items,
  ctaButton,
  userProfile
}: {
  items: NavigationBar['items'];
  ctaButton?: NavigationBar['ctaButton'];
  userProfile: NavigationBar['userProfile'];
}) {
  const pathname = usePathname();

  return (
    <div className="space-y-1 pb-3 pt-2">
      <div className="px-3 py-2">
        <ThemeToggle />
      </div>
      {items.map((item) => (
        <React.Fragment key={item.label}>
          {item.submenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left">
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-between',
                    pathname.startsWith(item.link) && 'bg-accent text-accent-foreground'
                  )}
                >
                  {item.label}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {item.submenu.map((subItem) => (
                  <DropdownMenuItem key={subItem.label} asChild>
                    <Link
                      href={subItem.link}
                      className={cn(
                        pathname === subItem.link && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={item.link}
              className={cn(
                'block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary',
                pathname === item.link && 'bg-accent text-primary'
              )}
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
      {ctaButton && (
        <div className="mt-6 px-3">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={ctaButton.link}>{ctaButton.text}</Link>
          </Button>
        </div>
      )}
      <div className="mt-6 border-t border-border pt-6">
        <UserMenu userProfile={userProfile} mobile />
      </div>
    </div>
  );
}

function UserMenu({
  userProfile,
  mobile = false
}: {
  userProfile: NavigationBar['userProfile'];
  mobile?: boolean;
}) {
  if (!userProfile.loggedIn) {
    return (
      <Button
        asChild
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        <Link href="/login">Log in</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'flex items-center text-foreground hover:text-primary',
            mobile && 'w-full justify-start'
          )}
        >
          {userProfile.avatarUrl ? (
            <Image
              src={userProfile.avatarUrl}
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <User className="mr-2 h-6 w-6" />
          )}
          <span>Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {userProfile.menuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link href={item.link}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
