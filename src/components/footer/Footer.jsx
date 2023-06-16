import React from 'react'
import styles from './footer.module.css'
import Image  from 'next/image'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.sociel}>
      <Image src="/1.png" width={15} height={15} className={styles.icon} alt="lama dev"/>
      <Image src="/2.png" width={15} height={15} className={styles.icon} alt="lama dev"/>
      <Image src="/3.png" width={15} height={15} className={styles.icon} alt="lama dev"/>
      <Image src="/4.png" width={15} height={15} className={styles.icon} alt="lama dev"/>
      </div>
    </div>
  )
}
