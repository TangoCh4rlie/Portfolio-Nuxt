export interface Project {
    title: string,
    description: string,
    img: {
        fill?: string,
        d?: string,
        path?: string,
    },
    link?: string,
    repo?: string,
    tech: string[],
    tags: string[],
    date: string,
    competence?: boolean
}