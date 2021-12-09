const crypto = require('crypto');
const IV = Buffer.alloc(16, 0, 'hex');
const ALGO = 'aes-256-cbc';
const key = process.env.REACT_APP_ENC_KEY;

// export const encrypt = val => {
//   const cipher = crypto.createCipheriv(ALGO, process.env.ENC_KEY, IV);
//   let encrypted = cipher.update(val, 'utf8', 'base64');
//   encrypted += cipher.final('base64');
//   return encrypted;
// };

// // export const decrypt = hash => {
// //   const decipher = crypto.createDecipheriv(ALGO, process.env.ENC_KEY, IV);
// //   const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
// //   return decrpyted.toString();
// // };

// export function decrypt(text) {
//   const encryptedText = Buffer.from(text, 'hex');
//   const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.ENC_KEY), IV);
//   let decrypted = decipher.update(encryptedText);
//   console.log(decipher.final());
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   console.log({ decrypted });

//   return decrypted.toString();
// }

export function encrypt(text) {
  const cipher = crypto.createCipheriv(ALGO, Buffer.from(key), IV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('base64');
}

export function decrypt(text) {
  const encryptedText = Buffer.from(text, 'base64');
  const decipher = crypto.createDecipheriv(ALGO, Buffer.from(key), IV);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
