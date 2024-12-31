// Aquí defines las rutas dinámicas y sus propiedades
export const getProyectoPaths = () => {
    return [
        {
        params: { titulo: "to-do-list" },
        props: {
            descripcion: `Este es un proyecto de backend para una aplicación de To-Do List, desarrollado con Spring Boot.
                El sistema incluye funcionalidades para gestionar tareas, usuarios y etiquetas, y permite la autenticación
                mediante JWT tokens.`,
            tecnologias: ["Java", "Spring Boot", "JWT","PostgreSQL"],
            urlGithub: "https://github.com/rafael20044/todo",
            urlImagenes: ["/img/to-do/estructura.png"],
            urlVideos:""
        }
    }
];
};

