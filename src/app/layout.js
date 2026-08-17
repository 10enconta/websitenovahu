import { Analytics } from '@vercel/analytics/next'
import { Nunito_Sans } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'

config.autoAddCss = false

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Papel Higiénico al Mayoreo | Doorways',
  description:
    'Distribuidor mayorista de papel higiénico institucional y para el hogar. Jumbo roll, center pull, mini JRT y más marcas al mejor precio.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#2f74d0',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      data-theme="NOVAHU"
      className={`${nunito.variable} bg-base-200`}
    >
      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
