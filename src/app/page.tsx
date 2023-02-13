import Image from 'next/image'
import styles from './page.module.css'
import fondo from '../../public/b.gif'
import { RiDownloadFill  } from "react-icons/ri";

import localFont from  '@next/font/local';

const myFont = localFont({
  src: '../../public/GT-Walsheim-Black-subset.woff2',
  display: 'swap'
})


export default function Home() {
  return (
      <section className={styles.container__section}>
        <div className={styles.container__img}>
          <Image src={fondo} alt="fondo" />
        </div>
        <div>
          <div className={myFont.className}>
            <p className={styles.title}>
                <span>Hola,🖐 </span>
                Soy 😎 Guillermo Alberco
                <span>Software Developer.</span>
            </p>
          </div>
          <div className={styles.container__p}>
            <p>Soy un desarrollador web, me considero una persona con iniciativa a superar problemas,ademas me gusta aprender nuevas tecnologias y estar en constante aprendizaje.</p>
            <button><span><RiDownloadFill /></span>Descargar CV </button>
          </div>
        </div>
      </section>
  )
}
