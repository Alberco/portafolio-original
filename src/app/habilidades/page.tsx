import styles from './page.module.css'
import { lenguajes,frontend, backend} from './models'
import { Card } from './components'

function page() {

  return (
    <section className={styles.container}>
      <p>Habilidades</p>
      <h3>Lenguajes</h3>
      <article className={styles.container__div}>
          {
            lenguajes.map((items) => (
              <Card key={items.id} name={items.name} img={items.img} />
            ))
          }
      </article>
      <h3>Backend</h3>
      <article  className={styles.container__div}>
          {
            backend.map((items) => (
              <Card key={items.id} name={items.name} img={items.img} />
            ))
          }
      </article>
      <h3>Frontend</h3>
      <article  className={styles.container__div}>
          {
            frontend.map((items) => (
              <Card key={items.id} name={items.name} img={items.img} />
            ))
          }
      </article>
    </section>
  )
}

export default page