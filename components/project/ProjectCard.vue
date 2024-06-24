<script setup lang="ts">
import type { Language } from "~/types/language";
import type { Project } from "~/types/project";
import { getColor } from "~/utils/colors";

const props = defineProps<{
    project: Project;
    languages: Language[];
}>();

const technoIcons: ComputedRef<Language[]> = computed(() => {
    return props.project.tech
        .map((techName) => {
            return props.languages.find((tech) => tech.name === techName);
        })
        .filter((tech) => tech !== undefined);
});
</script>

<template>
    <div class="relative">
        <div
            class="flex flex-col w-full h-full justify-center items-center absolute gap-10"
        >
            <div
                v-if="project.link !== undefined"
                class="border dark:border-gray-600 rounded-xl dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-zinc-100 dark:hover:bg-zinc-800 opacity-100"
            >
                <a :href="project.link" target="_blank">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#16a34a"
                        class="size-12 p-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                    </svg>
                </a>
            </div>
            <div
                v-if="project.repo !== undefined"
                class="border dark:border-gray-600 rounded-xl dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-zinc-100 dark:hover:bg-zinc-800 opacity-100"
            >
                <a :href="project.repo" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        class="size-12 p-1"
                    >
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                        />
                    </svg>
                </a>
            </div>
        </div>
        <div class="flex dark:text-gray-400 items-center">
            <NuxtImg
                class="w-1/2 my-8 border dark:border-gray-600 rounded-xl"
                :src="project.img.path"
                :alt="project.title"
                width="1080"
                height="600"
            />
            <div class="w-1/2 px-12">
                <div class="flex items-center">
                    <!-- <UTooltip
                    text="Application jouable dès maintenant !"
                    :popper="{ placement: 'top' }"
                >
                    <h3 class="text-4xl mb-6">
                        {{ project.title }}
                    </h3>
                </UTooltip> -->
                    <h3 class="text-4xl mb-6">
                        {{ project.title }}
                    </h3>
                    <UBadge class="ml-4 mb-6" color="red" variant="subtle">{{
                        project.date
                    }}</UBadge>
                </div>
                <p>{{ project.description }}</p>
                <div class="flex m-6">
                    <div
                        class="w-1/2 flex flex-wrap items-center justify-end gap-1 mr-2"
                    >
                        <div v-for="tag in props.project.tags" class="flex">
                            <UBadge
                                :color="getColor(tag)"
                                variant="subtle"
                                >{{ tag }}</UBadge
                            >
                        </div>
                    </div>

                    <UDivider orientation="vertical" />
                    <div
                        class="w-1/2 flex flex-wrap items-center justify-start gap-3 ml-2"
                    >
                        <div v-for="tech in technoIcons ?? []">
                            <svg class="w-9 h-9" viewBox="0 0 128 128">
                                <path
                                    :fill="tech?.img?.fill"
                                    :d="tech?.img?.d"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
