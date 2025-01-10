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
            urlImagenes: ["/img/to-do/filtro.png", "/img/to-do/login.png"],
            urlVideos:"https://www.youtube.com/embed/asyM77D0PqE"
        }
    },
        {
        params: { titulo: "finanzas-personales" },
        props: {
            descripcion: `Este es un proyecto de backend para una aplicación de finanzas personales, desarrollado
            con Spring Boot. El sistema incluye funcionalidades para gestionar usuarios, cuentas y transacciones ,
            y permite la autenticación mediante JWT tokens.`,
            tecnologias: ["Java", "Spring Boot", "JWT","MySQL"],
            urlGithub: "https://github.com/rafael20044/api-finanzas",
            urlImagenes: null,
            urlVideos:null
        }
    }
];
};

