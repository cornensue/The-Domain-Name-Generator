// The Domain Name Generator
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extentions = ["com", "net", "us", "io"]; // El array con las extensiones

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extentions) {
        console.log(`${p}${a}${n}.${e}`);
      }
    }
  }
}
