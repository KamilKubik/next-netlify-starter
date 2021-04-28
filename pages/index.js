import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { db } from '../lib/firebase';

export default function Home() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState('');
  useEffect(async () => {
    const snapshot = await db.collection('projects').get();

    const projects = [];
    snapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    console.log(projects);
  });

  const onProjectCreate = async () => {
    const projectId = uuidv4();
    const newProject = {
      projectId,
      projectName: inputValue,
    };
    await db.collection('projects').doc(projectId).set(newProject);
    router.push('/projects/[project]', `/projects/random${inputValue}`);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Hello from new deploy</p>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={onProjectCreate}>Go to your project!</button>
        <Link href="/projects/[project]" as="/projects/random">
          <a>Go to random project</a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
