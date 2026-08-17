"use client"

import { useState } from "react"
import { z } from "zod"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const WHATSAPP_NUMBER = "50233373935"

const schema = z.object({
    nombre: z
        .string()
        .trim()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(80, "El nombre es demasiado largo"),

    telefono: z
        .string()
        .trim()
        .min(8, "Ingresa un teléfono válido")
        .max(20, "El teléfono es demasiado largo"),

    mensaje: z
        .string()
        .trim()
        .min(5, "Escribe un mensaje más completo")
        .max(1000, "El mensaje es demasiado largo"),
})

export default function Contacto() {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState("")

    function enviarWhatsApp(e) {
        e.preventDefault()
        setError("")

        const resultado = schema.safeParse({
            nombre,
            telefono,
            mensaje,
        })

        if (!resultado.success) {
            setError(resultado.error.issues[0]?.message || "Revisa los datos.")
            return
        }

        const texto = `Hola NOVAHU.

Mi nombre es: ${resultado.data.nombre}
Mi teléfono: ${resultado.data.telefono}

Estoy interesado en su papel higiénico de bambú.

Mi consulta:
${resultado.data.mensaje}`

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`

        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <section id="contacto" className="bg-base-200 py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
                <div className="select-none">
                    <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
                        Solicita tu cotización
                    </h2>

                    <p className="mt-4 max-w-md text-lg leading-relaxed text-base-content/70 text-pretty">
                        ¿Te interesa nuestro papel higiénico de bambú?
                        Escríbenos y cuéntanos cuántos fardos necesitas. Te
                        compartiremos precios, disponibilidad y opciones de
                        entrega.
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg font-semibold hover:underline">
                            <span className="grid size-10 place-items-center rounded-box bg-primary-content/15">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </span>
                            +502 3337 3935
                        </a>

                        <p className="flex items-center gap-3 text-lg font-semibold">
                            <span className="grid size-10 place-items-center rounded-box bg-primary-content/15">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            Atención y entregas en Cobán y alrededores.
                        </p>
                    </div>
                </div>

                <div className="card bg-primary text-primary-content shadow-2xl">
                    <form
                        onSubmit={enviarWhatsApp}
                        className="card-body gap-1 select-none">
                        <h3 className="text-xl font-extrabold">
                            Escríbenos por WhatsApp
                        </h3>

                        <label className="form-control">
                            <span className="label-text mb-1 font-semibold text-white">
                                Nombre
                            </span>

                            <input
                                type="text"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="input input-bordered w-full text-base-content"
                            />
                        </label>

                        <label className="form-control">
                            <span className="label-text mb-1 font-semibold text-white">
                                Teléfono / WhatsApp
                            </span>

                            <input
                                type="tel"
                                placeholder="+502 0000 0000"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                className="input input-bordered w-full text-base-content"
                            />
                        </label>

                        <label className="form-control">
                            <span className="label-text mb-1 font-semibold text-white">
                                Mensaje
                            </span>

                            <textarea
                                placeholder="¿Cuántos fardos necesitas?"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                className="textarea textarea-bordered min-h-24 w-full text-base-content"
                            />
                        </label>

                        {error && (
                            <div className="alert alert-error mt-3">
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-secondary btn-block mt-2">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            Solicitar por WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
