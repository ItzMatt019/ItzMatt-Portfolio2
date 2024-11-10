import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic Meta Tags */}
          <title>ItzMatt019</title>
          <link rel="icon" href="https://i.itzmattcdn.com/api/user/520599749456560140/r28LllhS.ico" />

          {/* Theme Color for Mobile and Browser UI */}
          <meta name="theme-color" content="#FBB827" />

          {/* Open Graph Meta Tags for Discord Embeds */}
          <meta property="og:title" content="ItzMatt019" />
          <meta property="og:description" content="My name is Matthew, But I go by ItzMatt019 online. I am 24 Years old and live in California, USA. I am a Discord Bot Developer and a newbie Website Developer." />
          <meta property="og:url" content="https://itzmatt019.xyz" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags for Twitter Embeds */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ItzMatt019" />
          <meta name="twitter:description" content="My name is Matthew, But I go by ItzMatt019 online. I am 24 Years old and live in California, USA. I am a Discord Bot Developer and a newbie Website Developer." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;