import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTruckFast,
    faBoxesStacked,
    faStar,
} from "@fortawesome/free-solid-svg-icons"

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden bg-base-100">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
                <div className="flex flex-col items-start gap-6">
                    <span className="badge badge-lg border-primary/20 bg-primary/10 font-semibold text-primary">
                        Venta por fardo. Cobán y alrederdores
                    </span>
                    <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                        Papel higiénico para tu{" "}
                        <span className="text-primary">hogar</span>
                    </h1>

                    <p className="max-w-xl text-pretty text-lg leading-relaxed text-base-content/70">
                        Papel higiénico de calidad, práctico y rendidor.
                        Presentaciones de hasta{" "}
                        <strong className="text-base-content">
                            1,000 hojas por rollo
                        </strong>
                        , disponibles por fardo para tu hogar o negocio.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#catalogo" className="btn btn-primary btn-lg">
                            Ver catálogo
                        </a>
                        <a href="#contacto" className="btn btn-outline btn-lg">
                            Solicitar cotización
                        </a>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-6 text-sm font-semibold text-base-content/70 ">
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faTruckFast}
                                className="text-primary"
                            />{" "}
                            Entrega a domicilio
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faBoxesStacked}
                                className="text-primary"
                            />{" "}
                            Compra por fardo
                        </span>
                    </div>
                </div>

                <div className="relative">
                    <div
                        className="absolute -inset-4 -z-10 rounded-4xl bg-primary/10 blur-2xl"
                        aria-hidden="true"
                    />
                    <img
                        src="/hero-papel.png"
                        alt="Rollos de papel higiénico institucional apilados"
                        className="w-full rounded-4xl border border-base-300 object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
