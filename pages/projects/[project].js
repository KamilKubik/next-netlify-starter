import React from 'react';
// import { getAllProjects } from '../../lib/db-admin';
import { db } from '../../lib/firebase-admin';

const RandomProject = ({ projects }) => {
  console.log(projects);
  return <div>Random Project</div>;
};

export const getStaticPaths = async () => {
  // const { projects } = await getAllProjects();
  const snapshot = await db.collection('projects').get();

  const projects = [];
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });

  const paths = projects.map((project) => ({
    params: {
      project: project.projectName.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  // const { projects } = await getParticularProject(params.work);
  let ref = db.collection('projects').where('projectName', '==', params.project);

  const snapshot = await ref.get();
  const projects = [];

  snapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() });
  });

  return {
    props: { projects },
    revalidate: 1,
  };
};

// export const getServerSideProps = async () => {
//   // const { projects } = getAllProjects();
//   const snapshot = await db.collection('projects').get();

//   const projects = [];
//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });

//   return {
//     props: { projects },
//   };
// };

export default RandomProject;
