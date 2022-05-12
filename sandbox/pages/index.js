import Head from 'next/head'
import Link from 'next/link';



export default function HomePage() {
  console.log("[HomePage] render");
  return (
    <>
    <Head>
      <title>My Blog</title>
      <meta name="description" value="This is my blog" />
    </Head>
      <main>
        <h1>Mirko Blog</h1>
          <ul>
            <li>
              <Link href="/posts/first-post">
                <a>First Post</a>
              </Link>
            </li>
          </ul>
      </main>
    </>
  );
}