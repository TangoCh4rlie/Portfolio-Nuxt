<script setup lang="ts">
import LanguageCard from "./LanguageCard.vue";
import languagesJson from "/public/json/languages.json";

const languages: Language[] = languagesJson;

const selectedType: string = ref("language");
const searchedLanguage = ref(null);

const filteredLanguages = computed(() => {
    // if (searchedLanguage.value !== null) {
    //     selectedType.value = null;
    //     return languages.filter((language) =>
    //         language.name
    //             .toLowerCase()
    //             .includes(searchedLanguage.value.name.toLowerCase())
    //     );
    // } else {
    //     return languages.filter(
    //         (language) => language.type === selectedType.value
    //     );
    // }
    return languages.filter((language) => language.type === selectedType.value);
});

const getButtonVariant = computed(() => {
    // searchedLanguage.value = null;
    return (type: string) => {
        return type === selectedType.value ? "solid" : "outline";
    };
});
</script>

<template>
    <div>
        <h1 class="text-gray-400 text-4xl my-4">Languages</h1>
        <!-- <UInputMenu
            v-model="searchedLanguage"
            :options="languages"
            placeholder="Select a language"
            option-attribute="name"
        /> -->
        <div class="flex space-x-2 my-3">
            <UButton
                color="primary"
                :variant="getButtonVariant('language')"
                @click="selectedType = 'language'"
                >Languages</UButton
            >
            <UButton
                color="primary"
                :variant="getButtonVariant('framework')"
                @click="selectedType = 'framework'"
                >Framework</UButton
            >
            <UButton
                color="primary"
                :variant="getButtonVariant('outil')"
                @click="selectedType = 'outil'"
                >Outils</UButton
            >
            <UButton
                color="primary"
                :variant="getButtonVariant('devops')"
                @click="selectedType = 'devops'"
                >DevOps</UButton
            >
        </div>
        <div class="flex flex-wrap justify-left">
            <LanguageCard
                v-for="language in filteredLanguages"
                :key="language.name"
                :language="language"
            />
        </div>
    </div>
</template>

<style scoped></style>
