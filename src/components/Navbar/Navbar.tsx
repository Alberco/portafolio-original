import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import icon from '../../../public/broadsword .svg'
import Image from 'next/image'

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
      </ul>
    </nav>
  )
}

export default Navbar