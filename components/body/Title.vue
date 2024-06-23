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
    <div class="w-screen h-screen flex flex-col justify-center items-center dark:text-gray-400">
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
        <div class="w-3/5 mx-auto p-4 border dark:border-gray-600 rounded-lg dark:bg-zinc-900">
            <p>
                Salut moi c'est Elouan <br /> <br /> 
				Passionné d'informatique depuis maintenant 2 ans, je suis en étude de développement informatique à l'IUT Claude Bernard de Lyon 1. <br /><br /> 
				Très curieux et polyvalent, je suis toujours à la recherche de nouveaux projets à réaliser. N'ayant pas de langage favori à proprement parlé, j'adore m'essayer à de nouvelles techno pour découvrir de nouvelles choses. J'ai d'ailleurs utilisé pour l'occasion de ce portfolio le framework Nuxt.js pour la première fois.<br /><br />
                Je ne suis pas frileux à l'idée de travailler en équipe, bien au contraire, j'adore ça.<br /><br />
                À côté de l'informatique, j'aime beaucoup écouter de la musique (du rock au classique en passant la techno), faire du volley et de la randonnée.<br /><br />
                Voici donc mon portfolio que j'ai réalisé avec beaucoup de plaisir, j'espère qu'il vous plaira.
            </p>
			<div class="mt-4 flex flex-wrap space-x-2">
				<UBadge color="violet" variant="subtle" label="Etudiant" />
				<UBadge color="rose" variant="subtle" label="19 ans" />
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
