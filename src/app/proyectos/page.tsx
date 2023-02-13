import React from 'react'
import { CardProyecto } from './components'
import { proyectos } from './models'

import styles from './page.module.css'

function page() {
  return (
    <section className={styles.container}>
      <h3>Proyectos</h3>
      <div className={styles.section__container}>
            {
              proyectos.map((item)=>(
                <CardProyecto 
                  key={item.id} 
                  img={item.img} 
                  name={item.name} 
                  url={item.url}
                  caracteristicas={item.caracteristicas} />
              ))
            }
      </div>
    </section>
  )
}

export default page