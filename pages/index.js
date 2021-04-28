import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Hello from new deploy</p>
        <Link href="/projects/[project]" as="/projects/random">
          <a>Go to random project</a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
