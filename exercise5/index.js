import ambilDataUser from "./ambilDataUser.js";


ambilDataUser();

//1.
//karena data yang akan kita ambil
//yaitu username dan email data tersebut dari
//jsonplaceholder
//kenapa memanggil .json?
//karena .json yang akan mengakses format2 dari link
//yang kita perlukan sehingga kita mendapatkan data tersebut

//saya ibaratkan seperti ini
//fetch() seperti kurir datang bawa kotak makanan
//yang disebut response. 
// Tapi di dalam kotak masih terbungkus dengan 
//plastik dan kamu belum bisa langsung makan. maka
//.json() itu seperti membuka bungkusnya,
//baru kelihatan isi makanannya 
//yaitu data yang bisa dipakai di js

//2.
//error handling pada fecth 
//artinya kita menyediakan cara 
//menghadapi masalah API gagal
//ada 2 cara yaitu 

//1.(.try dengan .catch)
// dimana try sbg tempat code
//dan catch sebagai penangkap masalah 
//dan mengirimkan pesan error

//2.(async dan await)
//async adalah fungsi agar bisa pakai await
//await akan menunggu sampai tugas selesai