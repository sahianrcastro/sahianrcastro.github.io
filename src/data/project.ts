export interface ProjectItem {
    id?: number; // Identificador único
    title: string; // Título de la evidencia
    title_en?: string; // Título en inglés, opcional
    description?: string; // Descripción
    date?: string; // Fecha
    detail?: string; // Página de detalle
    url?: string; // Enlace externo
    tags?: string[]; // Etiquetas
    cover?: string[]; // Imágenes
}

export const projectItems: ProjectItem[] = [
    {
        id: 1,
        title: "Modelado de Bases de Datos",
        description: "Evidencias y actividades relacionadas con el modelado de bases de datos.",
        date: "2026-08-09",
        tags: ["MODELADO", "BASES DE DATOS"],
    },
    {
        id: 2,
        title: "Normalización",
        description: "Evidencias y ejercicios relacionados con el proceso de normalización de bases de datos.",
        date: "2026-08-09",
        tags: ["NORMALIZACIÓN", "BASES DE DATOS"],
    },
    {
        id: 3,
        title: "SQL",
        description: "Prácticas y ejercicios realizados utilizando SQL.",
        date: "2026-08-09",
        tags: ["SQL", "BASES DE DATOS"],
    },
    {
        id: 4,
        title: "Proyecto de Bases de Datos 1",
        description: "Proyecto desarrollado durante la asignatura aplicando los conocimientos adquiridos durante el semestre.",
        date: "2026-08-09",
        tags: ["PROYECTO", "BASES DE DATOS"],
    },
];