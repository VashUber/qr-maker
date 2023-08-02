export default defineNuxtConfig({
  modules: ["@sidebase/nuxt-auth"],
  devtools: { enabled: true },
  devServer: {
    port: 3000,
  },
  css: ["~/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    { path: "~/components/atoms", prefix: "Atom", pathPrefix: false },
    { path: "~/components/molecules", prefix: "Molecule", pathPrefix: false },
    { path: "~/components/organisms", pathPrefix: false },
    { path: "~/components/pages" },
  ],
  vite: {
    vue: {
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    },
  },
});
