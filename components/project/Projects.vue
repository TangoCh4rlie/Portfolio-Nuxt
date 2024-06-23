<script setup lang="ts">
import projectsJson from "/public/json/projects.json";

const projects: Projets[] = projectsJson;

const differentTags: string[] = projects.reduce((acc, project) => {
    project.tags.forEach((tags) => {
        if (!acc.includes(tags)) {
            acc.push(tags);
        }
    });
    return acc;
}, [] as string[]);
differentTags.push("All");

const selectedTag: string = ref("All");

const getButtonVariant = computed(() => {
    return (tags: string) => {
        return tags === selectedTag.value ? "solid" : "outline";
    };
});

</script>

<template>
    <div>
        <h2 class="text-gray-400 text-4xl my-4">Projets</h2>
        <UAlert
            icon="i-heroicons-wrench-screwdriver"
            description="Voici quelques projets que j'ai réalisé ou auxquels j'ai participé."
            color="orange"
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
                v-for="project in projects"
                :key="project.title"
                :project="project"
            />
        </div>
    </div>
</template>