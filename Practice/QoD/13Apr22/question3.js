// //Q3. Given an sentence , return first letter of each word as capital
// // toSentenceCase('we are neogrammers') -> We Are Neogrammers

// const toSentenceCase = (sentence) => {
//   let sentenceToBeModified = sentence.split(" ");
//   let b = [];
//   // console.log(sentenceToBeModified[2][0], sentenceToBeModified.length);
//   for (let i = 0; i < sentenceToBeModified.length; ++i) {
//     b.push(sentenceToBeModified);
//     for (let j = 0; j < b[i].length; ++j) {
//       // if (j === 0)
//       // b[i][j][0] = sentenceToBeModified[i][j][0].toUpperCase();
//       // console.log(j, b[i][j]);
//       for (let k = 0; k < b[i][j].length; ++k) {
//         if (k === 0) {
//           b[i][j][k] = sentenceToBeModified[i][j][k].toUpperCase();
//           console.log("......", b[i][j][k]);
//         }
//       }
//     }
//   }
//   // console.log("****", b);
//   return b;
// };

// console.log("/////", toSentenceCase("we are sentence"));
