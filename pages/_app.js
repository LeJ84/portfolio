import { AnimatePresence } from 'framer-motion'
import '../styles/reset.scss'
import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/works.scss'


function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp
