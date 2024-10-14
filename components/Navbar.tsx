'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from './../constants/index'
import Button from './Button'
// import Login from '@/app/login/page'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
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
          // href='/Login'
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleMenuToggle}
      />
      {/* Mobile Menu - shown when toggled */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col items-center gap-5 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white text-center cursor-pointer transition-all hover:font-bold"
              onClick={handleMenuToggle} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"

          />
        </ul>
      )}
    </nav>
  )
}

export default Navbar
