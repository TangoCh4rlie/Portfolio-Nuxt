export enum UiColor {
    red,
    orange,
    amber,
    yellow,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    violet,
    purple,
    fuchsia,
    pink,
    rose,
}

export function getRandomColor(): string {
    const colors = Object.values(UiColor).filter(value => typeof value === 'string') as string[];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}