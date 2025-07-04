"use client"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/the-sleeping-gypsy.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">Asad Ansari</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-amber-200 font-light leading-relaxed">
          You are not a drop in the ocean. You are the ocean in a drop.
        </h2>
      </div>
    </section>
  )
}
