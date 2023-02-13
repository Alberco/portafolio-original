import { v4 as uuid_v4 } from "uuid";
import { epic,jardineria,manga,portafoliov1
,pytube,valorant,shopping } from "public/proyectos";
import { StaticImageData } from "next/image";

interface Proyectos {
    id: string
    name: string
    img: StaticImageData
    caracteristicas: Array<string>
    url: string
}

export const proyectos: Array<Proyectos> = [
    {id:uuid_v4(),url:"https://valorantapp.netlify.app/",caracteristicas:["typescript","react","style-component"], name: "Valorant Web",img: valorant,},
    {id:uuid_v4(),url:"https://epic-one.vercel.app/",caracteristicas:["react","tailwind css"], name: "Epic",img: epic},
    {id:uuid_v4(),url:"https://jardineriapp.netlify.app/",caracteristicas:["react","javascript"], name: "Jardineria Web", img: jardineria},
    {id:uuid_v4(),url:"https://chipper-entremet-aa4328.netlify.app/",caracteristicas:["html","css","javascript"], name: "MangaList", img: manga},
    {id:uuid_v4(),url:"https://portafolioalberco.netlify.app/",caracteristicas:["next","tailwind css"], name: "Portafoliov1", img: portafoliov1},
    {id:uuid_v4(),url:"https://github.com/Alberco/youtube-descarga",caracteristicas:["python"], name: "Pytube", img: pytube},
    {id:uuid_v4(),url:"https://github.com/Alberco/Shopping-List",caracteristicas:["django","postgresql","python"], name: "Shopping List", img: shopping}
]


