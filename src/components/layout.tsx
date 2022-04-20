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
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hightableafrica.com%2F&psig=AOvVaw35Ia-VzSLb4Q_njM8nmUhu&ust=1649811373625000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLj0_P2pjfcCFQAAAAAdAAAAABAG"
        />
      </Head>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout

// const meta = {
//   title: 'HighTable',
//   description:
//     "HighTable is a platform for millennials and Gen Zs to discover and connect with fun adventures around and beyond them. HighTable is breaking the borders around Africa's hospitality one connection at a time.",
//   // url: 'https://www.hightable.africa',
//   type: 'website',
//   ...pageMeta,
// };
// <Head>
// <title></title>
// <link rel="icon" href="/logo1.jpg" />
// <link rel="shortcut icon" href="/favicon.ico.png" />
// <meta name="description" content={meta.description} key="title" />
// <meta property="og:url" content="https://www.hightable.africa" key="url" />
// <meta property="og:type" content={meta.type} key="og:type" />
// <meta property="og:title" content={meta.title} key="og:title" />
// <meta property="og:description" content={meta.description} key="og:description" />
// <meta
//   property="og:image"
//   content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
// />
// </Head>
