//RUGIAN, VIRGINIA

//array
let people = ["Greg", "Mary", "Devon", "James"];

// 1. forLoop menampilkan semua
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. forEach menampilkan smua
people.forEach(function(orang) {
  console.log(orang);
});

// 3. hapus greg
people.shift();

// 4. hapus james
people.pop();

// 5. tambahkan matt
people.unshift("Matt");

// 6. tambah urname di akhir
people.push("Your Name"); 

// 7. forloop berhenti setlah mary
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break; 
  }
}

// 8. membuat array baru dengan elemeny array lama
let copy = people.slice(2); 
console.log(copy);

// 9. mendefinisikan people dgn nlai awl
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people[0] = "Matt";
people.pop();
people.push("Your Name");

console.log(people); 

// 10. membuat variabel baru dan tambah bob
let withBob = people.concat("Bob");
console.log(withBob); 


//object

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. menambahkan go ke array language
programming.languages.push("Go");
console.log(programming.languages);

// 2.menggunakan bracket notation= 7
programming["difficulty"] = 7;
console.log(programming.difficulty);


// 3. hapus kunci jokes
delete programming.jokes;
console.log(programming);

// 4. menggunakan dot notation mnmbhkan kunci is fun
programming.isFun = true;
console.log(programming.isFun);

// 5. menggnkan map untuk iterasi languages
let mappedLanguages = programming.languages.map(function(lang, index) {
    return index + " - " + lang;
});
console.log(mappedLanguages);