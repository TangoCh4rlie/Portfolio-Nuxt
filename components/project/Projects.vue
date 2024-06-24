<script setup lang="ts">
import type { Language } from "~/types/language";
import projectsJson from "/public/json/projects.json";
import languagesJson from "/public/json/languages.json";
import type { Project } from "~/types/project";

const projects: Project[] = projectsJson;
const languages: Language[] = languagesJson;

const differentTags: string[] = projects.reduce((acc, project) => {
    project.tags.forEach((tags: string) => {
        if (!acc.includes(tags)) {
            acc.push(tags);
        }
    });
    return acc;
}, [] as string[]);
differentTags.push("All");

const selectedTag: Ref<string> = ref("All");

const getButtonVariant = computed(() => {
    return (tags: string) => {
        return tags === selectedTag.value ? "solid" : "outline";
    };
});

const filteredProject = computed(() => {
    if (selectedTag.value === "All") {
        return projects;
    }
    return projects.filter((project) => project.tags.includes(selectedTag.value));
})

</script>

<template>
    <div>
        <h2 class="dark:text-gray-400 text-4xl my-4">Projets</h2>
        <UAlert
            icon="i-heroicons-wrench-screwdriver"
            description="Voici quelques projets que j'ai réalisé ou auxquels j'ai participé."
            color="rose"
            variant="outline"
        />
        <div class="flex space-x-2 my-3">
            <UButton v-for="tag in differentTags"
                color="cyan"
                :variant="getButtonVariant(tag)"
                @click="selectedTag = tag"
                >{{ tag }}</UButton
            >
        </div>
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