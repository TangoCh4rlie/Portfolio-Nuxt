// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image", "@nuxtjs/tailwindcss"],
	css: [
		'~/assets/css/main.css',
	],
	image: {
		dir: '/static'
	},
	colorMode: {
		preference: 'dark'
	}
})