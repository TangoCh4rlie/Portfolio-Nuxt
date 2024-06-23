<script setup lang="ts">
import { onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";

onMounted(() => {
    new Typewriter("#typewriter", {
        strings: ["Elouan Reymond", "TangoCharlie"],
        autoStart: true,
        loop: true,
    });
});
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center text-gray-400">
        <div id="typewriter" class="text-9xl text-center m-24 font-bold"></div>
        <div class="text-center mb-8">
            <NuxtImg
                src="avatar.webp"
                alt="Avatar"
                width="100"
                height="100"
                class="rounded-full"
            />
        </div>
        <div class="w-3/5 mx-auto p-4 border border-gray-600 rounded-lg bg-zinc-900">
            <p>
                Salut moi c'est Elouan, <br /> <br /> 
				Je suis en étude de développement informatique à la l'IUT Claude Bernard de Lyon 1. <br /><br /> 
				Passionné d'informatique depuis maintenant 2 ans, je suis toujours à la recherche de nouveaux projets à réaliser. <br />
            </p>
			<div class="mt-4 flex space-x-2">
				<UBadge color="violet" variant="subtle" label="Etudiant" />
				<UBadge color="cyan" variant="subtle" label="Informatique" />
				<UBadge color="amber" variant="subtle" label="Passionné" />
				<UBadge color="emerald" variant="subtle" label="Curieux" />
				<UBadge color="red" variant="subtle" label="Alternant" />
				<UBadge color="lime" variant="subtle" label="Polyvalent" />
				<UBadge color="orange" variant="subtle" label="Sociable" />
			</div>
        </div>
    </div>
</template>
