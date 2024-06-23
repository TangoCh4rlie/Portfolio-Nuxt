<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});

const links = [
    [
        {
            label: "Home",
            icon: "i-heroicons-home",
            to: "#top",
        },
        {
            label: "Languages",
            icon: "i-heroicons-language",
            to: "#languages",
        },
        {
            label: "Projects",
            icon: "i-heroicons-wrench-screwdriver",
            to: "#projects",
        },
        {
            label: "Contact me",
            icon: "i-heroicons-phone",
            to: "#contact",
        },
    ],
	[
		{
			label: "Portfolio",
			icon: "i-heroicons-book-open",
		}
	],
    [
        {
            label: "Switch theme",
            icon: "i-heroicons-arrows-right-left",
            // TODO: fixer ca
            // icon: computed(() => (isDark.value ? "i-heroicons-moon-solid" : "i-heroicons-sun-solid")),
            click: () => (isDark.value = !isDark.value),
        },
    ],
];
</script>

<template>
    <div>
        <main>
            <slot />
            <div class="fixed bottom-4 left-4 cursor-pointer">
                <UPopover mode="hover" :popper="{ placement: 'top-start' }">
                    <UButton size="xl" trailing-icon="i-heroicons-bars-3" />

                    <template #panel>
                        <div class="p-4">
                            <UVerticalNavigation :links="links" />
                        </div>
                    </template>
                </UPopover>
            </div>
        </main>
        <footer class="flex flex-col my-24 items-center">
            <p class="mb-6">Ce site a été réaliser avec Nuxt.js</p>
            <p>Merci d'avoir lu jusqu'ici &#128512 !</p>
        </footer>
    </div>
</template>

<style scoped>

</style>
