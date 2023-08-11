//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

let number=Number(prompt("Lütfen ilk sayıyı giriniz"));
let number2=Number(prompt("Lütfen ikinci sayıyı giriniz"));
console.log("Girdiğiniz iki sayının toplamı = " + (number+number2));

//Örnek-2
/*
Kullanıcıdan aldığımız sayıyı dereceden Fahrenheit'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32
*/

let number3=Number(prompt("Lütfen Fahrenheit'a dönüştürülecek sayıyı giriniz"));
console.log(((number3*(9/5))+32)+" derece Fahrenheit");

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