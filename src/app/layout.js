import './globals.css'
import { Providers } from './providers';

/**
 * Metadata object for the website
 * @typedef {Object} metadata
 * @property {string} title - The title of the website
 * @property {string} description - A brief description of the website
 */
export const metadata = {
  title: 'Restaurant Donations',
  description: 'Restaurant donations systems',
}

/**
 * RootLayout component
 * Wraps the entire application with the necessary providers
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child elements to be wrapped by the RootLayout component
 * @returns {React.Element} The RootLayout component with the wrapped child elements
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{ children }</Providers>
      </body>
    </html>
  )
}
