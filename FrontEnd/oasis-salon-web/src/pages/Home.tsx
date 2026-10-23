import LoyaltyCheck from '../components/LoyaltyCheck';

export default function Home() {
    return (
        <div className="min-h-screen bg-spa-bg text-spa-text font-sans selection:bg-spa-primary selection:text-white">

            {/* Navigation */}
            <nav className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="text-2xl font-serif tracking-widest font-bold">OASIS</div>
                <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
                    <a href="#ofertas" className="hover:text-spa-primary transition-colors">Ofertas</a>
                    <a href="#ubicaciones" className="hover:text-spa-primary transition-colors">Ubicaciones</a>
                    <a href="#lealtad" className="hover:text-spa-primary transition-colors">Lealtad</a>
                </div>
                <button className="bg-spa-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-spa-primary/80 transition-colors">
                    Reserva Ahora
                </button>
            </nav>

            {/* Hero Section */}
            <section className="px-8 py-20 md:py-32 flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl">
                    Tu Refugio de Belleza en la Ciudad.
                </h1>
                <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                    Disfruta de un 15% de descuento en tu primera visita a Oasis. Especialistas en manicura en gel, arte de uñas y cuidado personal.
                </p>
                <button className="bg-spa-text text-white px-8 py-4 rounded-full text-lg hover:bg-black transition-colors">
                    Explorar Servicios
                </button>
            </section>

            {/* About / Who We Are Section */}
            <section className="px-8 py-24 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif mb-6">Quiénes Somos</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Con una profunda creencia en el cuidado personal, creamos un espacio cálido e inclusivo donde la belleza se siente natural, personal y empoderadora.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Ya sea tu manicura de siempre o un momento de paz en un día ajetreado, Oasis está aquí para hacerte sentir segura, cuidada y única.
                        </p>
                    </div>
                    <div className="h-96 bg-spa-primary/20 rounded-2xl border border-spa-primary/30 flex items-center justify-center">
                        <span className="text-spa-primary font-serif italic text-xl">Imagen del Salón</span>
                    </div>
                </div>
            </section>

            {/* Loyalty System Section (Tech Facing) */}
            <section id="lealtad" className="px-8 py-24 bg-spa-primary/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif mb-4">Programa de Recompensas Oasis</h2>
                        <p className="text-gray-600">Obtén un 40% de descuento en tu octava visita. Simplemente proporciona tu número de teléfono a tu técnica de uñas.</p>
                    </div>

                    <LoyaltyCheck />

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-spa-text text-white py-12 text-center">
                <p className="text-sm tracking-widest uppercase opacity-70 mb-4">© 2026 Oasis Nail Salon</p>
                <div className="flex justify-center gap-6 text-sm opacity-70">
                    <a href="#" className="hover:opacity-100">Política de Privacidad</a>
                    <a href="#" className="hover:opacity-100">Términos de Servicio</a>
                    <a href="#" className="hover:opacity-100">Contacto</a>
                </div>
            </footer>
        </div>
    );
}