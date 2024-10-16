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

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      // GSAP animation when menu is opened
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
      // GSAP animation when menu is closed
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
      })

      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: 50,
        stagger: -0.1,
        duration: 0.3,
      })
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
        className="mobile-menu-container absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col items-center gap-5 lg:hidden"
        style={{ transform: 'translateX(100%)' }} // Initial state for GSAP
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white text-center cursor-pointer transition-all hover:font-bold"
            ref={(el) => {
              if (el && !menuItemsRef.current.includes(el)) {
                menuItemsRef.current[index] = el // Populate ref dynamically
              }
            }}
            onClick={handleMenuToggle}
          >
            {link.label}
          </Link>
        ))}
        {/* Login Button */}
        <div
          ref={(el) => {
            menuItemsRef.current[NAV_LINKS.length] = el // Assign login button ref
          }}
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

