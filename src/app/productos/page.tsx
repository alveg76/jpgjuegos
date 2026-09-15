import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogPage from "@/components/CatalogPage";

export const revalidate = 3600; // Revalidate every hour

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-mario-blue pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-mario-yellow mb-2">
              Catálogo Completo
            </h1>
            <p className="text-mario-white text-lg">
              Explora todos nuestros juegos de mesa. Filtra por precio, categoría o número de jugadores.
            </p>
          </div>
          
          <CatalogPage />
        </div>
      </main>
      <Footer />
    </>
  );
}
