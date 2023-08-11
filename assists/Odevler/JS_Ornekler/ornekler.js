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


function tekCift(){
    const number = prompt("Bir sayı giriniz");

    if(number < 0){
        console.log(`${number} negatif bir sayıdır`);
    }else if(number > 0){
        console.log(`${number} pozitif bir sayıdır`);
    }else{
        console.log(`Sayınız ${number}'dır `);
    }
}
//tekCift();

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)
let oddEvenCalculator = function () {
    let number = prompt('Bir Sayı Giriniz');
    if (number % 2 == 0) {//çift sayı
        console.log(number + " çift sayıdır");
    } else {
        console.log(number + " tek sayıdır");
    }
}
//oddEvenCalculator()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

function weekDay(day) {
    switch(day){
        case 1:
            console.log("Pazartesi");
            break;
        case 2:
            console.log("Salı");
            break;
        case 3:
            console.log("Çarşamba");
            break;
        case 4:
            console.log("Perşembe");
            break;
        case 5:
            console.log("Cuma");
            break;
        case 6:
            console.log("Cumartesi");
            break;
        case 7:
            console.log("Pazar");
            break;
        default:
            console.log("default");
            break;
    }
}
const day = Number(prompt("Haftanın kaçıncı günündesiniz"));
//weekDay(day);


// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?

const calculator = () => {
    let number = Number(prompt("1 ile 50 arasında bir bitiş sayısı giriniz"));

    if(number === 44){
        console.log("Çıkış..");
        return;
    }

    let evenCount = 0;
    let oddCuont = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i < number; i++) {
        if(i % 7 === 0){
            continue;
        }
        
        if(i % 2 === 0){
            evenCount++;
            evenSum += i;
        }else{
            oddCuont ++;
            oddSum+= i;
        }

        if(i === 50){
            console.log("50 limitine ulaşıldı");
            break
        }
    }
    
    console.log("Çift sayı adedi: ", evenCount);
    console.log("Çift sayıların toplamı: ", evenSum);
    console.log("Tek sayı adedi:",oddCuont );
    console.log("Tek sayıların toplamı:", oddSum );

}
//calculator();
