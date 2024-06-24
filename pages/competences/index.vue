<script setup lang="ts">
import projectsJson from "/public/json/projects.json";
import languagesJson from "/public/json/languages.json";
import competencesJson from "/public/json/competences.json";
import type { Project } from "~/types/project";
import type { Language } from "~/types/language";
import type { Competence } from "~/types/competences";

const projects: Project[] = projectsJson;
const languages: Language[] = languagesJson;
const competences: Competence[] = competencesJson;

const selectedComp: Ref<string> = ref("Réaliser");

const filteredProject = computed(() => {
    return projects.filter(
        (project) =>
            project.tags.includes(selectedComp.value) &&
            project.competence === true
    );
});
</script>

<template>
    <div class="w-3/5 mx-auto">
        <h2 class="dark:text-gray-400 text-4xl flex justify-center my-12">Compétences acquises</h2>
        <a
            v-for="item in competences"
            :key="item.competence"
            href="#projects"
            class="block p-4 border dark:border-gray-600 rounded-lg dark:bg-zinc-900 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 my-2 cursor-pointer"
            @click="selectedComp = item.competence"
        >
            <h3 class="text-2xl dark:text-green-500">{{ item.competence }}</h3>
            <p class="dark:text-gray-400">{{ item.description }}</p>
        </a>
        <h2 id="projects" class="dark:text-gray-400 text-4xl flex justify-center my-12">Projets</h2>
        <div class="flex flex-col justify-left">
            <ProjectCard
                v-for="project in filteredProject"
                :key="project.title"
                :project="project"
                :languages="languages"
            />
        </div>
    </div>
</template>
