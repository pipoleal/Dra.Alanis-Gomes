import { siteData } from "./data"

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-24 text-center">

        <img
          src="/dra-alanis.jpg"
          alt={siteData.name}
          className="w-80 h-80 object-cover rounded-3xl shadow-2xl mb-10"
        />

        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          {siteData.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {siteData.cro}
        </p>

        <p className="text-lg text-gray-700 max-w-xl mt-6 leading-relaxed">
          {siteData.subtitle}
        </p>

      </section>

      {/* LINKS PRINCIPAIS - ESTILO DR LUIZ */}
      <section className="px-6 pb-20">
        <div className="max-w-md mx-auto space-y-4">

          <a
            href={`https://wa.me/${siteData.whatsapp}`}
            target="_blank"
            className="block bg-black text-white text-center py-4 rounded-xl text-lg font-medium hover:opacity-90 transition"
          >
            Agendar pelo WhatsApp
          </a>

          <a
            href={siteData.instagram}
            target="_blank"
            className="block bg-gray-100 text-center py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
          >
            Instagram
          </a>

          <a
            href={siteData.googleMaps}
            target="_blank"
            className="block bg-gray-100 text-center py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
          >
            Ver Avaliações
          </a>

          <a
            href={siteData.googleMaps}
            target="_blank"
            className="block bg-gray-100 text-center py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
          >
            Localização
          </a>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-16">
            Tratamentos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteData.services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RODAPÉ MINIMALISTA */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        {siteData.address}
      </footer>

    </main>
  )
}