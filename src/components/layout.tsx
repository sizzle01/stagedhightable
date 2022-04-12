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
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="we are all about hospitality and growing your business"
        />
        <meta
          property="og:description"
          content="Stop wasting time money designing and more other option"
        />

        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hightableafrica.com%2F&psig=AOvVaw35Ia-VzSLb4Q_njM8nmUhu&ust=1649811373625000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLj0_P2pjfcCFQAAAAAdAAAAABAG"
        />
      </Head>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
