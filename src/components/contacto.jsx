import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Contacto() {
    return (
        <section id="contacto" className="bg-base-200 py-16 ">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
                        Solicita tu cotización al mayoreo
                    </h2>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-lance text-pretty">
                        Cuéntanos qué presentaciones y volúmenes necesitas. Un
                        asesor te responderá con precios y disponibilidad.
                    </p>
                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href="https://wa.me/50200000000"
                            className="flex items-center gap-3 text-lg font-semibold hover:underline">
                            <span className="grid size-10 place-items-center rounded-box bg-primary-content/15">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </span>
                            +502 0000 0000
                        </a>

                        {/* <a */}
                        {/*   href="mailto:ventas@doorwaysgt.com" */}
                        {/*   className="flex items-center gap-3 text-lg font-semibold hover:underline" */}
                        {/* > */}
                        {/*   <span className="grid size-10 place-items-center rounded-box bg-primary-content/15"> */}
                        {/*     <FontAwesomeIcon icon={faEnvelope} /> */}
                        {/*   </span> */}
                        {/*   ventas@novahu.com */}
                        {/* </a> */}

                        <p className="flex items-center gap-3 text-lg font-semibold">
                            <span className="grid size-10 place-items-center rounded-box bg-primary-content/15">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            Ciudad de Cobán, Alta Verapaz, Guatemala
                        </p>
                    </div>
                </div>

                <div className="card bg-primary text-primary-content shadow-2xl">
                    <form className="card-body gap-1">
                        <h3 className="text-xl font-extrabold">
                            Envíanos tu solicitud
                        </h3>

                        <label className="form-control text-black">
                            <label className="form-control">
                                <span className="label-text mb-1 font-semibold text-white">
                                    Nombre
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control text-black">
                            <span className="label-text mb-1 font-semibold text-white">
                                Teléfono / WhatsApp
                            </span>
                            <input
                                type="tel"
                                placeholder="+502"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control text-black">
                            <span className="label-text mb-1 font-semibold text-white">
                                Mensaje
                            </span>
                            <textarea
                                placeholder="¿Qué productos y cantidades necesitas?"
                                className="textarea textarea-bordered min-h-24 w-full"
                            />
                        </label>
                        <button
                            type="button"
                            className="btn btn-secondary btn-block mt-2">
                            <FontAwesomeIcon icon={faPhone} />
                            Enviar solicitud
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
