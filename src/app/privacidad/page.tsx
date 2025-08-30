// app/privacidad/page.tsx
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-verde-musgo-oscuro min-h-screen text-crema font-sans">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-dorado-suave mb-6">
          Política de Privacidad
        </h1>
        
        <div className="space-y-4 text-crema/90 leading-relaxed">
          <p>
            En mjgbiologa.com, la privacidad de nuestros visitantes es de extrema importancia. Este documento de política de privacidad describe los tipos de información personal que se reciben y recopilan y cómo se utilizan.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-crema pt-4">
            Información del Formulario de Contacto
          </h2>
          <p>
            Cuando nos contactas a través del formulario de nuestro sitio web, te pedimos tu nombre y dirección de correo electrónico. Utilizamos esta información únicamente para responder a tu consulta. No compartimos esta información con terceros ni la utilizamos para fines de marketing sin tu consentimiento explícito.
          </p>

          <h2 className="font-serif text-2xl font-bold text-crema pt-4">
            Consentimiento
          </h2>
          <p>
            Al utilizar nuestro sitio web, por la presente, aceptas nuestra Política de Privacidad y estás de acuerdo con sus términos.
          </p>

          <div className="pt-8">
            <Link href="/" className="bg-dorado-suave text-verde-musgo-oscuro font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}