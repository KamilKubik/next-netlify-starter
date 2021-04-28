// // import Cookies from 'js-cookie';
// import React from 'react';
// // Nomral firebase before(?)
// import { db as dbAdmin } from './firebase-admin';
// // import { db } from './firebase';
// // import { useAuth } from './newAuth';

// export const getParticularProject = async (projectName) => {
//   let ref = dbAdmin.collection('projects').where('projectName', '==', projectName);

//   const snapshot = await ref.get();
//   const projects = [];

//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });

//   return { projects };
// };

// // export const getUserProjects = async (userId) => {
// //   const snapshot = await db.collection('projects').where('uid', '==', userId).get();

// //   const projects = [];
// //   snapshot.forEach((doc) => {
// //     projects.push({ id: doc.id, ...doc.data() });
// //   });

// //   return { projects };
// // };

// // CURRENT PROJECT
// // export const getCurrentProject = async (userId) => {
// //   const snapshot = await db.collection('currentProject').where('uid', '==', userId).get();

// //   const project = [];
// //   snapshot.forEach((doc) => {
// //     project.push({ id: doc.id, ...doc.data() });
// //   });

// //   return { project };
// // };

// // ALL CURRENT PROJECTS

// // export const getCurrentProjects = async () => {
// //   const snapshot = await db.collection('currentProject').get();

// //   const currentProjects = [];
// //   snapshot.forEach((doc) => {
// //     currentProjects.push({ id: doc.id, ...doc.data() });
// //   });

// //   return { currentProjects };
// // };

// export const getAllProjects = async () => {
//   const snapshot = await dbAdmin.collection('projects').get();

//   const projects = [];
//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });

//   console.log(projects);
//   return { projects };
// };

// // ----------------------------
// // export const getUserCurrentBusinessPlan = async (uid, projectId) => {
// //   const snapshot = await db.collection('currentBusinessPlan').where('uid', '==', uid).where('projectId', '==', projectId).get();

// //   const project = [];
// //   snapshot.forEach((doc) => {
// //     project.push(doc.data());
// //   });

// //   return { project };
// // };
