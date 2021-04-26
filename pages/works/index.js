import { motion } from "framer-motion";
import Link from 'next/link';
import experiences from  '../../data/xp.json';
import styles from '../../styles/ProfessionalWorksList.module.scss';


export default function ProfessionalWorksList() {
 
  const cardVariants = {
    initial: { y:"100vh"},
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      y: "-100vh",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const tab=[1,2,3];
  const experiencesList = experiences.map((xp) => {
    return (
        <motion.div variants={cardVariants} key={xp.id}>
          <div className={styles.card} key={xp.id}>
            <p class={styles.title}>{xp.title}</p>
            <p class={styles.period}>{xp.period}</p>
            <p class={styles.subtitle}>{xp.subtitle}</p>
            <p>{xp.content.split('-').map(element => <p key={element} >{'-' + element}</p>)}</p>
          </div>
        </motion.div>
    );
  })

  return (
    <motion.div className="xp-container" initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.5 }}, exit: { transition: { staggerChildren: 0.2 } } }}>
      <div className={styles.experiences__list}>
        {experiencesList}
      </div>
    </motion.div>
  )
}
