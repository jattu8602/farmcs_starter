'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from './../constants/index'
import Button from './Button'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>([])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    // Toggle overflow hidden on body when menu is opened/closed
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    if (isMenuOpen) {
      gsap.set(menuRef.current, { display: 'flex' })
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      })
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, delay: 0.2, duration: 0.3 }
      )
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(menuRef.current, { display: 'none' })
        },
      })
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: 50,
        stagger: -0.1,
        duration: 0.3,
      })
    }

    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <nav className="flexBetween max-container padding-container relative z-30 md:py-5 py-1">
      <Link href="/">
        <Image src="/logo/transbg.png" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={isMenuOpen ? 'cross.svg' : 'menu.svg'}
        alt={isMenuOpen ? 'Close menu' : 'Open menu'}
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleMenuToggle}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="mobile-menu-container fixed top-[64px] left-0 right-0 bottom-0 w-full bg-gray-900 flex flex-col items-center gap-5 py-5 lg:hidden overflow-y-auto"
        style={{ transform: 'translateX(100%)', display: 'none' }}
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white text-center cursor-pointer transition-all hover:font-bold w-full py-2"
            ref={(el) => {
              if (el && !menuItemsRef.current.includes(el)) {
                menuItemsRef.current[index] = el
              }
            }}
            onClick={handleMenuToggle}
          >
            {link.label}
          </Link>
        ))}
        <div
          ref={(el) => {
            menuItemsRef.current[NAV_LINKS.length] = el
          }}
          className="w-full flex justify-center mt-4"
        >
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            className="regular-16 text-white text-center cursor-pointer transition-all hover:font-bold"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
