import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faLeaf,
    faRecycle,
    faToiletPaper,
    faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons"

const ventajas = [
    {
        icon: faLeaf,
        titulo: "Hecho de bambú",
        texto: "Papel higiénico elaborado con fibra de bambú, una alternativa de origen vegetal para tu hogar.",
    },
    {
        icon: faRecycle,
        titulo: "Biodegradable",
        texto: "Una opción pensada para reducir el impacto ambiental sin dejar de lado la comodidad del día a día.",
    },
    {
        icon: faToiletPaper,
        titulo: "Suave y rendidor",
        texto: "Diseñado para brindar una experiencia cómoda y un buen rendimiento en cada rollo.",
    },
    {
        icon: faBoxesStacked,
        titulo: "Venta por fardo",
        texto: "Compra la cantidad que necesitas y recibe tus rollos en una presentación práctica por fardo.",
    },
]

export default function Ventajas() {
    return (
        <section id="ventajas" className="bg-base-200 py-16 select-none">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-10 max-w-2xl">
                    <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
                        ¿Por qué comprar con Novahu?
                    </h2>
                    <p className="mt-3 text-base-content/70 text-pretty">
                        Somos tu aliado de abastecimiento en productos de
                        limpieza e higiene institucional.
                    </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
                    {ventajas.map((v) => (
                        <div
                            key={v.titulo}
                            className="card border border-base-300 bg-base-100 transition-shadow hover:shadow-lg">
                            <div className="card-body gap-3">
                                <span className="grid size-12 place-items-center rounded-box bg-primary/10 text-xl text-primary">
                                    <FontAwesomeIcon icon={v.icon} />
                                </span>
                                <h3 className="card-title text-lg">
                                    {v.titulo}
                                </h3>
                                <p className="text-sm leading-relaxed text-base-content/70">
                                    {v.texto}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
