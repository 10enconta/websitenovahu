import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-lg font-extrabold">
            <span className="grid size-8 place-items-center rounded-box bg-primary text-primary-content">
              <FontAwesomeIcon icon={faToiletPaper} />
            </span>
            Doorways
          </span>
          <p className="text-sm text-neutral-content/70">
            Distribución mayorista de papel higiénico y productos de higiene institucional.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Catálogo</h4>
          <ul className="flex flex-col gap-2 text-sm text-neutral-content/70">
            <li><a href="#catalogo" className="hover:text-primary">Jumbo Roll</a></li>
            <li><a href="#catalogo" className="hover:text-primary">Center Pull</a></li>
            <li><a href="#catalogo" className="hover:text-primary">Mini JRT</a></li>
            <li><a href="#catalogo" className="hover:text-primary">Hogar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Empresa</h4>
          <ul className="flex flex-col gap-2 text-sm text-neutral-content/70">
            <li><a href="#ventajas" className="hover:text-primary">Ventajas</a></li>
            <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
            <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold">Síguenos</h4>
          <div className="flex gap-2">
            <a href="#" aria-label="Facebook" className="btn btn-circle btn-sm btn-ghost">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram" className="btn btn-circle btn-sm btn-ghost">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="WhatsApp" className="btn btn-circle btn-sm btn-ghost">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-content/10 py-4 text-center text-sm text-neutral-content/60">
        © {new Date().getFullYear()} Doorways. Todos los derechos reservados.
      </div>
    </footer>
  )
}

