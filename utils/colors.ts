export enum UiColor {
    red = "Réaliser",
    orange = "Optimiser",
    amber = "Jeux",
    yellow = "",
    lime = "",
    green = "Administrer",
    emerald = "Equipe",
    teal = "",
    cyan = "Gérer",
    sky = "Perso",
    blue = "",
    indigo = "",
    violet = "Conduire",
    purple = "Ecole",
    fuchsia = "",
    pink = "Collaborer",
    rose = "Evenement",
}

export function getRandomColor(): string {
    const colors = Object.values(UiColor).filter(value => typeof value === 'string') as string[];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export function getColor(word: string): string | undefined {
    const color = Object.entries(UiColor).find(([, value]) => value === word);
    return color ? color[0] : undefined;
  }