import { motion } from "framer-motion";
import Link from 'next/link';
import experiences from  '../../data/xp.json';
import styles from '../../styles/ProfessionalWorksList.module.scss';


export default function ProfessionalWorksList() {
 
  const cardVariants = {
    initial: { y:"100vh"},
    enter: { scale: 1, y: 150, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      y: "-100vh",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const tab=[1,2,3];
  const experiencesList = experiences.map((xp) => {
    return (
        <motion.div variants={cardVariants} key={xp.id}>
          <div className="card" key={xp.id}>
            <div class={styles.title}>{xp.title}</div>
            <div>{xp.subtitle}</div>
            <div>{xp.content.split('-').map(element => <p key={element} >{'-' + element}</p>)}</div>
          </div>
        </motion.div>
    );
  })

  return (
    <div className="xp-container">
      <motion.div  initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.5 }}, exit: { transition: { staggerChildren: 0.2 } } }}>
        <div className="xp-container">
          {experiencesList}
        </div>
      </motion.div>
{/*       <Link href="/">
        <a>
          <div>CV</div>
        </a>
      </Link> */}
    </div>
  )
}
