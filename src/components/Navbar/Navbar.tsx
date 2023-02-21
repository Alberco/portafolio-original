import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import icon from '../../../public/broadsword .svg'
import Image from 'next/image'
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <ul>
        <li>
          <Link href={"/"}>
            <Image src={icon} alt="icon" width={30} height={30} />
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar__sub}>
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
        <li>
          <Link href={"/habilidades"}>Habilidades</Link>
        </li>
        <li>
          <Link href={"/proyectos"}>Proyectos</Link>  
        </li>
        <li>
          <a href='https://www.linkedin.com/in/guillermo-alberco-capistrano-43909b156/' className={styles.navbar__link}><RiLinkedinBoxFill /></a>
        </li>
        <li>
          <a href='https://github.com/Alberco' className={styles.navbar__link}><RiGithubFill /></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar