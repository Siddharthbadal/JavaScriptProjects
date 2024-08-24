import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul className="flex gap-3 font-monospace">
              <li className="text-2xl font-bold text-blue-900 hover:text-blue-900 ">
                <Link href="/">ReviewsApp</Link>
              </li>
              <li className=" ml-auto text-2xl text-blue-600 hover:text-blue-900 ">
                <Link href="/reviews">Reviews</Link>
              </li>
              <li className="text-2xl text-blue-600 hover:text-blue-900 ">
                <Link href="/about" prefetch={false}>About</Link>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Navbar