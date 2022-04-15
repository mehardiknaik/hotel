import Head from 'next/head'

const Seo = () => {
  return (
    <Head>
    <title>Hotel</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content="Hotel" key="title" />
    <meta name="theme-color" content="#FFF" />
    <link rel="shortcut icon" href="/hotel/favicon.ico"></link>
    <meta
      name="description"
      content="Hotel with details"
    />
  </Head>
  )
}

export default Seo