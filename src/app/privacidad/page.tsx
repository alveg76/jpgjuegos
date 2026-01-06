// app/privacidad/page.tsx
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-verde-musgo-oscuro min-h-screen text-crema font-sans">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-dorado-suave mb-6">
          Política de Privacidad – JPG Juegos
        </h1>

        <div className="space-y-5 text-crema/90 leading-relaxed">
          <p>
            JPG Juegos es una tienda de juegos de mesa y estrategia con operación en Bogotá, Colombia.
            Protegemos los datos personales de nuestros clientes y visitantes conforme a la normativa
            colombiana y a las buenas prácticas de comercio electrónico.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-2">Datos que recopilamos</h2>
          <p>
            Podemos solicitar nombre, correo electrónico, teléfono y datos de contacto cuando realizas
            un pedido, reservas un producto o nos escribes a través del formulario del sitio.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-2">Finalidad</h2>
          <p>
            La información personal se usa exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gestionar pedidos, reservas y despachos.</li>
            <li>Brindar atención al cliente y soporte posventa.</li>
            <li>Comunicar promociones o eventos relacionados con nuestros juegos de mesa.</li>
          </ul>
          <p>
            No compartimos datos con terceros, salvo aliados logísticos o cuando la ley lo exige para
            cumplir obligaciones tributarias o judiciales.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-2">Cookies y analítica</h2>
          <p>
            Podemos usar cookies y herramientas de analítica para entender cómo navegas el sitio y
            optimizar secciones como #preventas, #ofertas o #familiares. Puedes configurar tu navegador
            para limitar el uso de cookies no esenciales.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-2">Responsable y derechos</h2>
          <p>
            Responsable del tratamiento: JPG Juegos · Bogotá D.C., Colombia. Si deseas acceder, actualizar,
            rectificar o eliminar tu información, oponerte al tratamiento o revocar tu consentimiento,
            escríbenos a contacto@jpgjuegos.com (actualiza este correo si cambia). Responderemos dentro de
            los plazos legales.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-2">Vigencia</h2>
          <p>
            Esta política rige desde el 5 de enero de 2026 y se actualizará cuando cambiemos nuestros
            procesos de tratamiento de datos. Publicaremos cualquier modificación en esta misma página.
          </p>

          <div className="pt-8">
            <Link
              href="/"
              className="bg-dorado-suave text-verde-musgo-oscuro font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}