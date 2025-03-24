# Soluciones Chapinas GT
Somos una empresa en crecimiento dedicada a la creación de páginas web y software accesible para todos. Nuestro objetivo es impulsar la transformación digital en Guatemala, ofreciendo soluciones asequibles y efectivas para que negocios, emprendedores y profesionales tengan presencia en internet.

Creemos que la tecnología debe ser una herramienta al alcance de todos, por eso diseñamos plataformas intuitivas, personalizables y funcionales que permitan a nuestros clientes destacar en el mundo digital. Más que vender páginas web, queremos fomentar una cultura de digitalización que impulse el crecimiento económico y la innovación en nuestro país.


# Primeros pasos
1. npm install
2. npm run dev

# Instalaciones extras
1. npm install react-router-dom
2. npm install lucide-react clsx @radix-ui/react-slot tailwind-merge class-variance-authority @radix-ui/react-tabs @radix-ui/react-select
3. npm install rc-slider

# Configuración para publicar en Github Pages
1. npm install gh-pages --save-dev
2. Configurar vite.config.js
3. Agregar script "deploy" 

# Configuraciones para dominio
1. Agregar un archivo CNAME en public
2. Cambiar la opción "base" en la configuración de vite.config.js a "/"
3. Verficar rutas de vistas y componentes (porque puede estar configurado con el repo)