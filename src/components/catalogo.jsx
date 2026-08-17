'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { productos, categorias } from './productos'
import { useCart } from './cart-context'

const fmt = (n) =>
  new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ' }).format(n)

function ProductoCard({ producto }) {
  const { addItem } = useCart()
  const [agregado, setAgregado] = useState(false)

  const handleAdd = () => {
    addItem(producto)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1200)
  }

  return (
    <div className="card overflow-hidden border border-base-300 bg-base-100 transition-shadow hover:shadow-xl">
      <figure className="relative aspect-square bg-base-200 p-6">
        {producto.etiqueta && (
          <span className="badge badge-accent absolute left-3 top-3 font-semibold">
            {producto.etiqueta}
          </span>
        )}
        <img
          src={producto.imagen || '/placeholder.svg'}
          alt={producto.nombre}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body gap-2 p-4">
        <span className="text-xs font-bold uppercase tracking-wide text-primary">
          {producto.categoria}
        </span>
        <h3 className="text-base font-bold leading-tight text-pretty">{producto.nombre}</h3>
        <p className="text-sm text-base-content/60">{producto.presentacion}</p>
        <div className="mt-2 flex items-end justify-between gap-2">
          <span className="text-xl font-black text-base-content">{fmt(producto.precio)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className={`btn btn-sm ${agregado ? 'btn-success' : 'btn-primary'}`}
          >
            <FontAwesomeIcon icon={agregado ? faCheck : faCartPlus} />
            {agregado ? 'Agregado' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Catalogo() {
  const [filtro, setFiltro] = useState('Todos')

  const lista =
    filtro === 'Todos' ? productos : productos.filter((p) => p.categoria === filtro)

  return (
    <section id="catalogo" className="bg-base-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
              Catálogo de papel higiénico
            </h2>
            <p className="mt-2 text-base-content/70 text-pretty">
              Elige la presentación que necesitas y añádela a tu cotización.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              className={`btn btn-sm ${filtro === cat ? 'btn-primary' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {lista.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  )
}

