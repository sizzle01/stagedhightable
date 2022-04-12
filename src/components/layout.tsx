import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Hightablebusiness</title>
        <link rel="shortcut icon" href="/favicon.ico.png" />
        <meta
          property="og:url"
          content="http://hightablebusiness.herokuapp.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="we are all about hospitality and growing businesses"
        />
        <meta
          property="og:description"
          content="HighTable is a platform for millennials and Gen Zs to discover and connect with fun adventures around and beyond them"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
