import { motion } from "framer-motion";
import Link from 'next/link';
import experiences from  '../../data/xp.json';
//import '../../styles/works.scss';


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
          <div className="card" key={xp.id}>
            <p className="title">{xp.title}</p>
            <p className="period">{xp.period}</p>
            <p className="subtitle">{xp.subtitle}</p>
            {xp.content.split('-').map(element => <p key={element} >{'-' + element}</p>)}
          </div>
        </motion.div>
    );
  })

  return (
    <motion.div className="xp-container" initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.5 }}, exit: { transition: { staggerChildren: 0.2 } } }}>
      <div className="experiences__list">
        {experiencesList}
      </div>
    </motion.div>
  )
}
