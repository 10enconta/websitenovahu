import { Analytics } from "@vercel/analytics/next"
import { Nunito_Sans } from "next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"

config.autoAddCss = false

const nunito = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-nunito",
    weight: ["400", "600", "700", "800", "900"],
})

export const metadata = {
    title: "Papel Higiénico de Bambú en Cobán | NOVAHU",
    description:
        "Papel higiénico de bambú en Cobán y alrededores. Compra para hogar, negocios y por volumen. Solicita precios, disponibilidad y opciones de entrega por WhatsApp.",
    keywords: [
        "papel higiénico de bambú",
        "papel higiénico bambú",
        "papel higiénico en Cobán",
        "papel higiénico Cobán",
        "papel higiénico Guatemala",
        "papel higiénico al por mayor",
        "papel higiénico por mayor",
        "papel higiénico para negocios",
        "papel higiénico para empresas",
        "papel higiénico para hoteles",
        "papel higiénico para restaurantes",
        "papel higiénico institucional",
        "proveedor de papel higiénico",
        "distribuidor de papel higiénico",
        "papel higiénico ecológico",
        "papel higiénico sostenible",
        "papel higiénico de bambú Guatemala",
        "papel higiénico de bambú Cobán",
        "papel higiénico mayorista Cobán",
        "papel higiénico al por mayor Guatemala",
        "fardos de papel higiénico",
        "papel higiénico por fardos",
        "NOVAHU",
    ],
    generator: "Next.js",
}

export const viewport = {
    colorScheme: "light",
    themeColor: "#2f74d0",
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="es"
            data-theme="NOVAHU"
            className={`${nunito.variable} bg-base-200`}
            suppressHydrationWarning>
            <body className="font-sans antialiased">
                {children}

                {process.env.NODE_ENV === "production" && <Analytics />}
            </body>
        </html>
    )
}
