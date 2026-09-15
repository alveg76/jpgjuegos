'use client';

import { useState, useEffect } from 'react';
import { Product, fetchProductsFromCSV } from '@/lib/products';
import ProductCard from './ProductCard';

const PRICE_RANGES = [
  { min: 0, max: 50000, label: '$0 - $50k' },
  { min: 50000, max: 100000, label: '$50k - $100k' },
  { min: 100000, max: 200000, label: '$100k - $200k' },
  { min: 200000, max: Infinity, label: '$200k+' },
];

const PLAYER_RANGES = [
  { min: 1, max: 2, label: '1-2 jugadores' },
  { min: 2, max: 4, label: '2-4 jugadores' },
  { min: 4, max: 6, label: '4-6 jugadores' },
  { min: 6, max: Infinity, label: '6+ jugadores' },
];

export default function CatalogPage() {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [selectedPlayers, setSelectedPlayers] = useState<string>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadProducts = async () => {
      try {
        const data = await fetchProductsFromCSV();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (!mounted || loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-mario-white text-xl">Cargando catálogo...</div>
      </div>
    );
  }

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Price filter
    if (selectedPrice !== 'all') {
      const range = PRICE_RANGES.find(r => r.label === selectedPrice);
      if (range) {
        const price = product.price || 0;
        if (price < range.min || price > range.max) return false;
      }
    }

    // Players filter
    if (selectedPlayers !== 'all') {
      if (!product.players) return false;
      const range = PLAYER_RANGES.find(r => r.label === selectedPlayers);
      if (range) {
        const playerMatch = product.players.match(/(\d+)\s*-?\s*(\d+)?/);
        if (!playerMatch) return false;
        const minPlayers = parseInt(playerMatch[1]);
        const maxPlayers = playerMatch[2] ? parseInt(playerMatch[2]) : minPlayers;
        if (maxPlayers < range.min || minPlayers > range.max) return false;
      }
    }

    return true;
  });

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6">
      {/* Filters - Mobile Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full px-4 py-3 bg-mario-red text-mario-white font-bold rounded-lg flex items-center justify-between hover:bg-mario-yellow hover:text-mario-red transition duration-200 shadow-lg text-base"
        >
          <span className="flex items-center gap-2">
            🎮 {filtersOpen ? 'Ocultar' : 'Mostrar'} Filtros
          </span>
          <span>{filtersOpen ? '▼' : '▶'}</span>
        </button>
      </div>

      {/* Filters Sidebar */}
      <aside className={`lg:col-span-1 ${filtersOpen ? 'block' : 'hidden lg:block'} transition-all duration-300`}>
        <div className="bg-gradient-to-b from-mario-blue/90 to-mario-blue/70 rounded-xl border-4 border-mario-brown lg:sticky lg:top-24 shadow-xl overflow-hidden flex flex-col max-h-[calc(100vh-120px)]">
          {/* Header with title and clear button */}
          <div className="p-6 border-b-3 border-mario-brown/50 flex-shrink-0">
            <div className="lg:flex items-center gap-2 mb-4 hidden">
              <span className="text-2xl">🎮</span>
              <h2 className="text-2xl font-bold text-mario-yellow">FILTROS</h2>
            </div>
            <div className="w-full h-1 bg-mario-red rounded-full mb-4"></div>
            
            {/* Clear Button - visible in both mobile and desktop */}
            <button
              onClick={() => {
                setSelectedPrice('all');
                setSelectedPlayers('all');
                setFiltersOpen(false);
              }}
              className="w-full px-4 py-2 rounded-lg bg-mario-green text-mario-white font-bold hover:bg-mario-yellow hover:text-mario-green transition duration-200 shadow-lg text-sm sm:text-base"
            >
              🔄 LIMPIAR FILTROS
            </button>
          </div>

          {/* Scrollable filters content */}
          <div className="overflow-y-auto flex-grow p-6 space-y-8">
            {/* Price Filter */}
            <div className="pb-6 border-b-3 border-mario-brown/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💰</span>
                <h3 className="font-bold text-mario-yellow text-lg">PRECIO</h3>
              </div>
              <div className="space-y-2 pl-2">
                <button
                  onClick={() => setSelectedPrice('all')}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition duration-200 text-sm sm:text-base ${
                    selectedPrice === 'all'
                      ? 'bg-mario-red text-mario-white shadow-lg scale-105'
                      : 'bg-mario-white/15 text-mario-white hover:bg-mario-white/25 hover:scale-105'
                  }`}
                >
                  ✓ Todos
                </button>
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range.label)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition duration-200 text-sm sm:text-base ${
                      selectedPrice === range.label
                        ? 'bg-mario-red text-mario-white shadow-lg scale-105'
                        : 'bg-mario-white/15 text-mario-white hover:bg-mario-white/25 hover:scale-105'
                    }`}
                  >
                    {selectedPrice === range.label ? '✓' : '○'} {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Players Filter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">👥</span>
                <h3 className="font-bold text-mario-yellow text-lg">JUGADORES</h3>
              </div>
              <div className="space-y-2 pl-2">
                <button
                  onClick={() => setSelectedPlayers('all')}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition duration-200 text-sm sm:text-base ${
                    selectedPlayers === 'all'
                      ? 'bg-mario-red text-mario-white shadow-lg scale-105'
                      : 'bg-mario-white/15 text-mario-white hover:bg-mario-white/25 hover:scale-105'
                  }`}
                >
                  ✓ Todos
                </button>
                {PLAYER_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPlayers(range.label)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition duration-200 text-sm sm:text-base ${
                      selectedPlayers === range.label
                        ? 'bg-mario-red text-mario-white shadow-lg scale-105'
                        : 'bg-mario-white/15 text-mario-white hover:bg-mario-white/25 hover:scale-105'
                    }`}
                  >
                    {selectedPlayers === range.label ? '✓' : '○'} {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <section className="lg:col-span-3 w-full">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-mario-yellow font-bold text-lg">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </h2>
          {(selectedPrice !== 'all' || selectedPlayers !== 'all') && (
            <button
              onClick={() => {
                setSelectedPrice('all');
                setSelectedPlayers('all');
                setFiltersOpen(false);
              }}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded bg-mario-yellow text-mario-blue font-bold hover:bg-mario-red hover:text-mario-white transition"
            >
              ✕ Limpiar
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-mario-blue/80 rounded-lg border-3 border-mario-brown p-8 text-center">
            <p className="text-mario-white text-lg">
              No hay productos que cumplan con los filtros seleccionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

