import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruckFast,
  faSackDollar,
  faLeaf,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons'

const ventajas = [
  {
    icon: faSackDollar,
    titulo: 'Precios de mayoreo',
    texto: 'Tarifas competitivas por fardo y caja para maximizar el margen de tu negocio.',
  },
  {
    icon: faTruckFast,
    titulo: 'Entrega puntual',
    texto: 'Logística propia con despachos programados y seguimiento de tu pedido.',
  },
  {
    icon: faLeaf,
    titulo: 'Calidad garantizada',
    texto: 'Producto de marcas líderes y opciones eco para cada tipo de instalación.',
  },
  {
    icon: faHeadset,
    titulo: 'Asesoría experta',
    texto: 'Te ayudamos a elegir la presentación ideal según tu consumo y dispensadores.',
  },
]

export default function Ventajas() {
  return (
    <section id="ventajas" className="bg-base-200 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
            ¿Por qué comprar con Doorways?
          </h2>
          <p className="mt-3 text-base-content/70 text-pretty">
            Somos tu aliado de abastecimiento en productos de limpieza e higiene institucional.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ventajas.map((v) => (
            <div
              key={v.titulo}
              className="card border border-base-300 bg-base-100 transition-shadow hover:shadow-lg"
            >
              <div className="card-body gap-3">
                <span className="grid size-12 place-items-center rounded-box bg-primary/10 text-xl text-primary">
                  <FontAwesomeIcon icon={v.icon} />
                </span>
                <h3 className="card-title text-lg">{v.titulo}</h3>
                <p className="text-sm leading-relaxed text-base-content/70">{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

