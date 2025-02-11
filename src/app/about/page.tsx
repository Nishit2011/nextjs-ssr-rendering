// import {cookies} from 'next/headers'

"use client"

import ThemeToggle from "@/components/ThemeToggle"

export default function AboutPage() {
   console.log("about page")
  return (
    <div>
      <h1>About</h1>
      <ThemeToggle />
    </div>
  )
}

