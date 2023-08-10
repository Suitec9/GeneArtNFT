import { motion } from 'framer-motion'

export default function Layout({children}) {
  return (
    <><ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
    <div>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
      <motion.div>
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {'>'}
        {children}
      </motion.div>
        </>
  )

}

