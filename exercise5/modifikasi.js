const ambilDataUser=async ()=> {
  try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users"); // ambil data
    const data=await response.json();                                         // ubah ke JSON

    data.forEach(({name})=> {                                                // tampilkan
      console.log(`Nama Lengkap:${name}`);
    });
  } catch (error) {                                                             // error handling
    console.log("Terjadi error:",error.message);
  }
};

ambilDataUser();

//jawaban perbedaan 

//promise chaining .then
//menjalankan langkah secara hrus slesai dlu tugas 1
//baru lajut tugas 2 cocok untuk proses singkat 
//tapi untuk banyak langkah kode bisa panjang dan sulit dibaca
//error ditangani dengan .catch()

//async await
//menulis kode berjalan berurut
//lebih mudah dibaca dan dimengerti
//error ditangani dengan try...catch