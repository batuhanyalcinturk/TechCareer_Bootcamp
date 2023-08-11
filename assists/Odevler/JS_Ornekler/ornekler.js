//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

let n=Number(prompt("Lütfen ilk sayıyı giriniz"));
let number2=Number(prompt("Lütfen ikinci sayıyı giriniz"));
console.log("Girdiğiniz iki sayının toplamı = " + (n+number2));

//Örnek-2
/*
Kullanıcıdan aldığımız sayıyı dereceden Fahrenheit'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32
*/

let number3=Number(prompt("Lütfen Fahrenheit'a dönüştürülecek sayıyı giriniz"));
//console.log(((number3*(9/5))+32)+" derece Fahrenheit");
console.log(`${((number3*(9/5))+32)} derece Fahrenheit`);

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

let xDeger = Number(prompt("x değerini giriniz"));
let kDeger = Number(prompt("k değerini giriniz"));
let yDeger = ((3*xDeger)+(4*kDeger));
console.log(yDeger);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))

let mat = 4+3*2*(3/3-1*6+9/1+(3/3));
console.log(mat);

// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
const num = -5.9;

// 1-mutlak değeri alsın 5.9
const absValue = Math.abs(num);
console.log("Mutlak Değer:", absValue);

// 2-yuvarlama yapsın  6.0
const roundedValue = Math.round(num);
console.log("Yuvarlanmış Değer:", roundedValue);

// 3-karesini alsın 36.00
const squaredValue = Math.pow(num, 2);
console.log("Karesi:", squaredValue.toFixed(2));

// 4-karekök alsın 6.0
const sqrtValue = Math.sqrt(absValue);
console.log("Karekök:", sqrtValue.toFixed(2));

// 5-yuvarlama yapsın 6.0
const secondRoundedValue = Math.round(sqrtValue);
console.log("İkinci Yuvarlanmış Değer:", secondRoundedValue);

// 6-)çıkan sonucu 5 bölsün 6/5=1
const dividedValue = secondRoundedValue / 5;
console.log("Sonuç / 5:", dividedValue);

// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
const minBetween1And5 = Math.min(1, 5);
console.log("En Küçük:", minBetween1And5);

// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
let modifiedValue;
if (minBetween1And5 % 2 === 1) {
    modifiedValue = minBetween1And5 + 3;
} else {
    modifiedValue = minBetween1And5 + 5;
}
console.log("Değiştirilmiş Değer:", modifiedValue);


// Örnek-6 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
const userInput = prompt("Bir sayı girin:");
const number = parseFloat(userInput);

let message;

if (isNaN(number)) {
    message = "Geçersiz giriş. Lütfen bir sayı girin.";
} else if (number < 0) {
    message = "Girilen sayı negatif.";
} else if (number > 0) {
    message = "Girilen sayı pozitif.";
} else {
    message = "Girilen sayı sıfır.";
}
console.log(message);

// Örnek-7 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
const password = prompt("Lütfen şifrenizi girin:");
const repassword = prompt("Şifrenizi tekrar girin:");

if (password === repassword) {
    console.log("Girilen şifreler aynı.");
} else {
    console.log("Girilen şifreler birbirine uymuyor.");
}


// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
//let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())