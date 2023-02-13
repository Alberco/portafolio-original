import styles from './card.module.css'
import Image, { StaticImageData } from 'next/image'

interface Props {
    name: string,
    img: StaticImageData
}

function Card({name,img}: Props) {
  return (
    <div className={styles.container__card}>
        <Image src={img} alt="flask" priority />
        <p>{name}</p>
    </div>
  )
}

export default Card