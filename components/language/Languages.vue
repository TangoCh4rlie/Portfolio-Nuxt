<script setup lang="ts">
import LanguageCard from "./LanguageCard.vue";
import languagesJson from "/public/json/languages.json";

const languages: Language[] = languagesJson;

const selectedType: string = ref("Language");
const searchedLanguage = ref(null);
const differentTypes = computed(() => {
    return Array.from(new Set(languages.map((language) => language.type)));
});

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
        <h2 class="text-gray-400 text-4xl my-4">Languages</h2>
        <!-- <UInputMenu
            v-model="searchedLanguage"
            :options="languages"
            placeholder="Select a language"
            option-attribute="name"
        /> -->
        <UAlert
            icon="i-heroicons-language"
            description="Ici vous pouvez trouver les langages et technos que j'ai été amené à utiliser."
            color="purple"
            variant="outline"
        />
        <div class="flex space-x-2 my-3">
            <UButton v-for="type in differentTypes"
                color="primary"
                :variant="getButtonVariant(type)"
                @click="selectedType = type"
                >{{ type }}</UButton
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
