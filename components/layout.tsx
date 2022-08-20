import Head from 'next/head'
import Link from 'next/link'

const name = 'classical-seichi-web'
export const siteTitle = 'classical-seichi-web'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <h1>
          {name}
        </h1>
      </header>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <br></br>
          <br></br>
        </div>
      )}
      <main>{children}</main>
      {!home && (
        <div>
          <br></br>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
