<script setup lang="ts">
const links = [
    [
        {
            label: "Home",
            icon: "i-heroicons-home",
            to: "#top",
        },
        {
            label: "Languages",
            icon: "i-heroicons-cube-transparent",
            to: "#languages",
        },
        {
            label: "Projects",
            icon: "i-heroicons-photograph",
        },
    ],
	[
		{
			label: "Portfolio",
			icon: "i-heroicons-photograph",
		}
	],
    [
        {
            label: "Contact me",
            icon: "i-heroicons-phone",
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
            <headerCustomHeader />
        </main>
        <footer>
            <slot name="footer"> Default footer content </slot>
        </footer>
    </div>
</template>

<style scoped>

</style>
