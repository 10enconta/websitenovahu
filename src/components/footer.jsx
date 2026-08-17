import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

const catalogo = [
    { label: "Jumbo Roll", href: "#catalogo" },
    { label: "Center Pull", href: "#catalogo" },
    { label: "Mini JRT", href: "#catalogo" },
    { label: "Hogar", href: "#catalogo" },
]

const empresa = [
    { label: "Ventajas", href: "#ventajas" },
    { label: "Contacto", href: "#contacto" },
    { label: "Inicio", href: "#inicio" },
]

const redesSociales = [
    {
        label: "Facebook",
        href: "#",
        icon: faFacebookF,
    },
    {
        label: "Instagram",
        href: "#",
        icon: faInstagram,
    },
    {
        label: "WhatsApp",
        href: "#",
        icon: faWhatsapp,
    },
]

export default function Footer() {
    return (
        <footer className="relative bg-[#142b55] text-white">
            {/* OLA SUPERIOR */}
            <div className="absolute -top-px left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block h-12 w-full sm:h-16"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,35 C180,90 360,5 540,40 C720,75 900,95 1080,45 C1260,-5 1350,20 1440,50 L1440,0 L0,0 Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* CONTENIDO */}
            <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-24 sm:grid-cols-2 lg:grid-cols-4 ">
                {/* MARCA */}
                <div className="flex flex-col gap-4 select-none">
                    <a
                        href="#inicio"
                        className="flex items-center gap-2 text-lg font-extrabold">
                        <div className="size-auto overflow-hidden rounded-full bg-white">
                            <Image
                                src="/logoblanco.png"
                                alt="NOVAHU"
                                width={62}
                                height={62}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <span className="tracking-tight">NOVAHU</span>
                    </a>

                    <p className="max-w-xs text-sm leading-6 text-white/70">
                        Una nueva propuesta para disfrutar productos de calidad,
                        con una atención cercana y pensada para las necesidades
                        de cada hogar.
                    </p>

                    <p className="text-sm font-semibold text-[#36a2cd]">
                        Calidad, higiene y confianza.
                    </p>
                </div>

                {/* CATÁLOGO */}

                {/* <div> */}
                {/*     <h4 className="mb-4 font-bold text-white">Catálogo</h4> */}
                {/**/}
                {/*     <ul className="flex flex-col gap-3 text-sm"> */}
                {/*         {catalogo.map((item) => ( */}
                {/*             <li key={item.label}> */}
                {/*                 <a */}
                {/*                     href={item.href} */}
                {/*                     className="text-white/70 transition-colors hover:text-[#36a2cd]"> */}
                {/*                     {item.label} */}
                {/*                 </a> */}
                {/*             </li> */}
                {/*         ))} */}
                {/*     </ul> */}
                {/* </div> */}

                {/* EMPRESA */}
                <div className="select-none">
                    <h4 className="mb-4 font-bold text-white">Empresa</h4>

                    <ul className="flex flex-col gap-3 text-sm">
                        {empresa.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-white/70 transition-colors hover:text-[#36a2cd]">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* REDES SOCIALES */}
                <div className="select-none">
                    <h4 className="mb-4 font-bold text-white">
                        Proximamente Síguenos
                    </h4>

                    <p className="mb-4 text-sm leading-6 text-white/70">
                        Estamos disponibles para ayudarte con tus pedidos y
                        cotizaciones.
                    </p>

                    <div className="flex gap-3">
                        {redesSociales.map((red) => (
                            <a
                                key={red.label}
                                href={red.href}
                                aria-label={red.label}
                                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-[#36a2cd] hover:bg-[#36a2cd] hover:text-white">
                                <FontAwesomeIcon icon={red.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-white/50">
                    © {new Date().getFullYear()} NOVAHU. Todos los derechos
                    reservados.
                </div>
            </div>
        </footer>
    )
}
