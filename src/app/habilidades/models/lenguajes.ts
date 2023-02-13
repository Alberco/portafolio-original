import { StaticImageData } from "next/image";
import { html , css , javascript, python,ruby,
         next,react,django,fastapi,flask,rails,express
} from "public/lenguajes"
import { v4 as uuid_v4 } from "uuid";

interface Habilidades {
    id: string
    name: string
    img: StaticImageData
}

export const lenguajes: Array<Habilidades>  = [
    {id:uuid_v4(), name: "Javascript",img: javascript},
    {id:uuid_v4(), name: "Python",img: python},
    {id:uuid_v4(), name: "Ruby", img: ruby}
]

export const frontend: Array<Habilidades> = [
    {id:uuid_v4(), name: "React",img: react},
    {id:uuid_v4(), name: "Next",img: next},
    {id:uuid_v4(), name: "HTML",img: html},
    {id:uuid_v4(), name: "CSS",img: css}
]

export const backend: Array<Habilidades> = [
    {id:uuid_v4(), name: "Django",img: django},
    {id:uuid_v4(), name: "Fastapi",img: fastapi},
    {id:uuid_v4(), name: "Flask",img: flask},
    {id:uuid_v4(), name: "Express",img: express},
    {id:uuid_v4(), name: "Rails",img: rails},
]