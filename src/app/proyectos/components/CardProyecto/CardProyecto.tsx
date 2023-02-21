import React from 'react'
import styles from './cardproyecto.module.css'
import Image, { StaticImageData } from 'next/image'
import { RiArrowRightCircleLine } from "react-icons/ri";
import { v4 as uuid_v4 } from "uuid";

interface Props {
    name: string
    img: StaticImageData
    caracteristicas: Array<string>
    url: string
}

function CardProyecto({ name, img , caracteristicas,url }: Props) {
 
  return (
    <a className={styles.proyecto__div} href={url}>
        <Image src={img} alt="proyecto1" />
     
        <RiArrowRightCircleLine className={styles.proyecto__icon} /> 
        <p className={styles.proyecto__title}>{name}</p>
        <ul className={styles.proyecto__caracteristicas}>
        {
            caracteristicas.map(item =>(
                <li key={uuid_v4()} >{item}</li>
            ))
        }
        </ul>
    </a>
  )
}

export default CardProyecto