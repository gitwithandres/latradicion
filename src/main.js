import "./styles/style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <!-- HERO -->
  <section class="relative min-h-screen flex items-center justify-center px-6 reveal">

    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="/images/hero.jpg"
        alt="Plato tradicional del restaurante"
        class="w-full h-full object-cover opacity-40"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl text-center">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Restaurante <span class="text-amber-400">La Tradición</span>
      </h1>

      <p class="text-lg md:text-xl text-neutral-300 mb-10">
        Sabores auténticos, recetas de siempre y una experiencia
        pensada para compartir en familia.
      </p>

      <a
        href="#reservas"
        class="inline-block bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold px-8 py-4 rounded-xl transition"
      >
        Reservar mesa
      </a>
    </div>

  </section>

  <!-- SOBRE EL RESTAURANTE -->
  <section class="bg-neutral-900 py-24 px-6 reveal">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

      <!-- Texto -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Tradición que se sirve en cada plato
        </h2>

        <p class="text-neutral-300 mb-6 leading-relaxed">
          En Restaurante La Tradición llevamos años preservando recetas
          auténticas que han pasado de generación en generación.
          Cada plato se prepara con ingredientes seleccionados y el
          respeto que merece la cocina tradicional.
        </p>

        <p class="text-neutral-400 leading-relaxed">
          Creemos que comer bien no es solo alimentarse, sino compartir,
          celebrar y crear recuerdos alrededor de la mesa.
        </p>
      </div>

      <!-- Imagen -->
      <div class="relative">
        <img
          src="/images/about.jpg"
          alt="Cocina tradicional del restaurante"
          class="rounded-2xl shadow-xl"
        />
      </div>

    </div>
  </section>

    <!-- ESPECIALIDADES -->
  <section class="bg-neutral-950 py-24 px-6">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
        Nuestras especialidades
      </h2>

      <div class="grid gap-12 md:grid-cols-3">

        <!-- Plato 1 -->
        <div
            class="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl
            ">
          <img
              src="/images/bandeja-tradicional.jpg"
              alt="Plato tradicional 1"
              class="w-full h-56 object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-105"
          />

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3">
              Bandeja Tradicional
            </h3>
            <p class="text-neutral-400">
              Una combinación clásica de sabores auténticos, preparada
              como manda la tradición.
            </p>
          </div>
        </div>

        <!-- Plato 2 -->
        <div 
            class="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl
            ">
          <img
              src="/images/sancocho-casero.jpg"
              alt="Plato tradicional 2"
              class="w-full h-56 object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-105"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3">
              Sancocho Casero
            </h3>
            <p class="text-neutral-400">
              Cocinado a fuego lento con ingredientes frescos y el
              sabor inconfundible de casa.
            </p>
          </div>
        </div>

        <!-- Plato 3 -->
        <div 
            class="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-2xl
            ">
          <img
            src="/images/postre-bucaramanga.jpg"
              alt="Plato tradicional 3"
              class="w-full h-56 object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-105"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3">
              Postre de la Casa
            </h3>
            <p class="text-neutral-400">
              El cierre perfecto: dulce, artesanal y preparado cada día.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

    <!-- CTA FINAL / RESERVAS -->
  <section id="reservas" class="bg-amber-500 py-24 px-6 text-neutral-900 reveal">
    <div class="max-w-4xl mx-auto text-center">

      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Reserva tu mesa hoy
      </h2>

      <p class="text-lg mb-10">
        Estamos listos para recibirte y ofrecerte una experiencia
        auténtica, como debe ser.
      </p>

      <a
        href="https://wa.me/573167740131?text=Hola!%20vi%20tu%20sitio%20web%20y%20quiero%20información."
        target="_blank"
        class="inline-block bg-neutral-900 text-white font-semibold px-10 py-5 rounded-2xl hover:bg-neutral-800 transition"
      >
        Reservar por WhatsApp
      </a>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-neutral-950 py-8 text-center text-neutral-500 text-sm">
    © 2026 Restaurante La Tradición. Todos los derechos reservados.
    <p class="text-neutral-500 text-sm">
      Bucaramanga, Santander · WhatsApp: +57 300 123 4567
    </p>

  </footer>

`;
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => observer.observe(el));
