import helloWorld from "./helloWorld.js";

const messages=async () => {
  const msg=await helloWorld();
  console.log(msg);
};

messages();

//1.
//await dalam messages adalah untuk
//menampilkan isi/output promise dari dile helloworld
//jadi await itu untuk mengambil result dari promise

//2.
//await dihapus maka helloWorld pada variable msg
//akan mengembalikan promise atau janji
//artinya itu belum pasti belum berhasil atau berhasil
//yang Sir ibaratkan dikelas tentang cinta diterima/ditolak


//3.
//export dan impor adalah cara dari ES6 untuk
//saling mentransfer/membagi code,data,variable dan function antara
//file helloworld dan mssges
//agar code,data,variabel dan function bisa digunakan
//pada file lainnya