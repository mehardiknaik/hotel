import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Famous from '../src/components/Famous/Famous'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  const [theme, settheme] = useState("light")

  useEffect(() => {
    setTimeout(() => {
      settheme('dark')
    }, 5000)
  }, [])
  return (
    <>
      <GlobalStyle theme={theme} />
      <Famous />
    </>
  )
}

export default Home
