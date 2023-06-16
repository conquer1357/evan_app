import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/hero.png'
// import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div  className={styles.container}>
      <div className={styles.texts}>
      <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button url="/portfolio"  className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
      <Image src={Hero}  className={styles.img} alt=""/>
      {/* <Image src={"https://image.haier.com/cn/cooling/W020220414489888754321.png"} width={500} height={500} className={styles.img} alt=""/> */}
      </div>
      
    </div>
  )
}
