import videogames_app_capture from "../assets/videogames_capture.jpg"

export const PROFILE_DATA = {
  about_me_1:{
    "ES":"Derrollador Full Stack, dispuesto a afrontar retos y siempre aprender más.",
    "EN":"Full Stack Developer, willing to take on challenges and always eager to learn more.",
  },
  about_me_2:{
    "ES":"Comencé en el mundo de la programación en el 2020 con el programa del ministerio de las TIC de Colombia 'MisioinTic 2022', donde desarrollé habilidades en programación en Lenguajes como Python, Java, entre otros. Más recientemente me certifiqué como Full Stack Web Developer a través del BootCamp SoyHenry",
    "EN":"I started in the programming world in 2020 with the Colombian Ministry of TIC program 'MisioinTic 2022', where I developed skills in programming languages such as Python, Java, among others. More recently, I certified myself as a Full Stack Web Developer through the SoyHenry Bootcamp.",
  },
  about_me_3:{
    "ES":"Tengo un año de experiencia desarrollando proyectos, tanto por mi cuenta como en equipo. Siempre con una actitud colaborativa, dispuesto ayudar y recibir ayuda.",
    "EN":"I have one year of experience developing projects, both on my own and as part of a team. I always have a collaborative attitude, willing to help and receive help.",
  }
};



export const SKILLS_DATA = {
  principal: [
    {
      name: "JavaScript",
      icon: "https://www.svgrepo.com/show/349419/javascript.svg",
    },
    {
      name: "HTML",
      icon: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    {
      name: "CSS",
      icon: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      name: "React",
      icon: "https://www.svgrepo.com/show/452092/react.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://www.svgrepo.com/show/354200/postgresql.svg",
    },
    {
      name: "Node Js",
      icon: "https://www.svgrepo.com/show/452075/node-js.svg",
    },
    {
      name: "MongoDB",
      icon: "https://www.svgrepo.com/show/373845/mongo.svg",
    },
  ],
  secondary: [
    {
      name: "Jira",
      icon: "https://www.svgrepo.com/show/353935/jira.svg",
    },
    {
      name: "Git",
      icon: "https://www.svgrepo.com/show/452210/git.svg",
    },
    {
      name: "GitHub",
      icon: "https://www.svgrepo.com/show/475654/github-color.svg",
    },
    {
      name: "Python",
      icon: "https://www.svgrepo.com/show/452091/python.svg",
    },
    {
      name: "SQL",
      icon: "https://www.svgrepo.com/show/499816/database.svg",
    },
    {
      name: "NoSQL",
      icon: "https://www.svgrepo.com/show/134173/database.svg",
    },
    {
      name: "Postman",
      icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    },
    {
      name: "Figma",
      icon: "https://www.svgrepo.com/show/452202/figma.svg",
    },
  ],
};



export const EDUCATION_DATA = [
  {
    name:"Min. TIC Colombia / UNAL",
    description:{
      "ES":"Formación general en habilidades de programación.",
      "EN":"General formation in programing skills",
    },
    time:"May. 2021 - Dec. 2021",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logotipo_de_la_Universidad_Nacional_de_Colombia.svg/1024px-Logotipo_de_la_Universidad_Nacional_de_Colombia.svg.png",
  },
  {
    name:"Henry",
    description:{
      "ES":"Full Stack Developer",
      "EN":"Full Stack Developer",
    },
    time:"Ago. 2022 - Dec. 2022",
    image:"https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png",
  },
  {
    name:"Universidad del Magdalena",
    description:{
      "ES":"Ingeniería de Sistemas",
      "EN":"Systems Engineer",
    },
    time:"2022 - 2026",
    image:"https://bloque10.unimagdalena.edu.co/wp-content/uploads/2021/06/Escudo-Color-Texto-azul-1-1024x1024.png",
  },
]



export const WORK_DATA = {
  principal:[
    {
      name:"CoinTracker",
      image:"https://raw.githubusercontent.com/AleSangronis/AleSangronis/main/coinn.png",
      description:{
        "ES":"<p>Website for cryptocurrency lovers</p><ul><li>Typescript, React, Redux, Node, MongoDB.</li><li>Desarrollo de aplicacion para el seguimiento de criptomonedas (FULL STACK)</li><li>Consumo de API Rest y derivación de datos</li><li>Creación e interconexión entre Microservicios internos y externos con BDD u otras células del proyecto</li></ul>",
        "EN":"<p>Website for cryptocurrency lovers</p><ul><li>Typescript, React, Redux, Node, MongoDB.</li><li>Development of application for cryptocurrency tracking (FULL STACK)</li><li>Consumption of Rest API and data derivation</li><li>Creation and interconnection between internal and external Microservices with BDD or other project cells</li></ul>",
      },
      deploy:{
        icon:"https://cdn-icons-png.flaticon.com/512/9869/9869419.png",
        link:"https://pf-03-cointracker.vercel.app/"
      },
      repository:{
        icon:"https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link:"https://github.com/PF-03/CoinTracker",
      },
    },
    {
      name:"VideoGames",
      image:videogames_app_capture/* "https://media.licdn.com/dms/image/C4E2DAQHyHmZbmwTfPA/profile-treasury-image-shrink_800_800/0/1669234501095?e=1677898800&v=beta&t=O6K6BsBsxe_xOE5c5DwjyEVArWxJ-PXAagdbehg-CSQ" */,
      description:{
        "ES":"<p>Single Page Aplication (SPA)</p><p>SQL · Hojas de estilos en cascada (CSS) · HTML5 · Resolución de problemas · Sequelize.js · PostgreSQL · React.js · Node.js · Redux.js · JavaScript · Git</p>",
        "EN":"<p>Single Page Application (SPA)</p><p>SQL · Cascading Style Sheets (CSS) · HTML5 · Troubleshooting · Sequelize.js · PostgreSQL · React.js · Node.js · Redux.js · JavaScript · Git</p>"
      }, 
      deploy:{
        icon:"https://cdn-icons-png.flaticon.com/512/9869/9869419.png",
        link:"https://videogameshenry.vercel.app/"
      },
      repository:{
        icon:"https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link:"https://github.com/Camilo-845/Henry-PI",
      },
    },
  ],
  secondary:[
    {     
      name:"Proyecto Inventario - Backend - Django",
      repository:{
        icon:"https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link:"https://github.com/Camilo-845/Proyecto_Inventario_Backend",
      },
    },
    {     
      name:"Proyecto Java MVC",
      repository:{
        icon:"https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link:"https://github.com/Camilo-845/Proyecto_Java_MVC",
      },
    },
  ],
}
