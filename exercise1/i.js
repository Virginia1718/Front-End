//Nama: Virginia Rugian

//1. IIFE, 

//exercise
//buatlah program untuk menghitung bmi
//dengan menggunakan IIFE DAN CALLBACK FUNCTION
//gunakan parameter dan return value

//1 hanya bmi IIFE dan Callback
// (function() {
//     let berat = 48;       
//     let tinggi = 1.65;
//     let bmi = berat / (tinggi * tinggi);
//     (function() {
//         console.log("BMI Anda adalah " + bmi);
//     })();
// })();

//2 menggunakan parameter
let hasilBMI = (function(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    return callback(bmi);
})(48, 1.65, function(bmi) {
    return "BMI Anda adalah " + bmi;
});

console.log(hasilBMI);