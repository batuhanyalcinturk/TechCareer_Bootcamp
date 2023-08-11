// alert("deneme12")
// window.alert("popup");
// document.writeln("Sayfada <br/>");
// window.document.writeln("Sayfada 2<br/>");

// console.log("console log");
// console.error("console log");
// console.warn("console log");
// console.info("console log");

// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// var degiskenAdi2=23.79;
// console.log(degiskenAdi2);
// console.log(typeof degiskenAdi2);

// var $degiskenAdi3="Merhaba canim";
// console.log($degiskenAdi3);
// console.log(typeof $degiskenAdi3);

// var _$degiskenAdi3=true;
// console.log(_$degiskenAdi3);
// console.log(typeof _$degiskenAdi3);

// // Hoisting
// carName="Audi";
// var carName;

// //let
// let deneme =44 ;
// console.log(deneme);
// deneme=66;
// console.log(deneme);
//const
// const deneme33=1423;
// deneme33=23;
// console.log(deneme33)

// Operatör
// && = ve  || = Veya   ! Değil

// let number1 = 12;
// let number2 = 5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1/number2);
// console.log(number1*number2);
// console.log(number1%number2);

// = atama
// == Eşit (Türüne bakmadan)
// === Eşit (Türüne bakarak)

// let userName=Number(prompt("Lütfen sayı giriniz"));
// console.log(userName);

//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

// let number=Number(prompt("Lütfen ilk sayıyı giriniz"));
// let number2=Number(prompt("Lütfen ikinci sayıyı giriniz"));
// console.log("Girdiğiniz iki sayının toplamı = " + (number+number2));

// //Örnek-2
// /*
// Kullanıcıdan aldığımız sayıyı dereceden Fahrenheit'a çeviren JS kodu yazınız ?
// Formül: (derece*9/5)+32
// */

// let number3=Number(prompt("Lütfen Fahrenheit'a dönüştürülecek sayıyı giriniz"));
// console.log(((number3*(9/5))+32)+" derece Fahrenheit");

// //Örnek-3
// // y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// // Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

// let xDeger = Number(prompt("x değerini giriniz"));
// let kDeger = Number(prompt("k değerini giriniz"));
// let yDeger = ((3*xDeger)+(4*kDeger));
// console.log(yDeger);

// // örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// // 4+3*2(3:3-1*6+9:1+(3:3))

// let mat = 4+3*2*(3/3-1*6+9/1+(3/3));
// console.log(mat);

// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(6,2));

// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// console.log(Math.min(4,5,6,1,1000));
// console.log(Math.max(4,5,6,1,1000));

// console.log(Math.sin(45));
// console.log(Math.asin(1));

// console.log(Math.floor(Math.random()*9+1));

// Örnek-5: Aşağıdaki örnekleri math ile çözelim ?

// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// const num = -5.9;

// // 1-mutlak değeri alsın 5.9
// const absValue = Math.abs(num);
// console.log("Mutlak Değer:", absValue);

// // 2-yuvarlama yapsın  6.0
// const roundedValue = Math.round(num);
// console.log("Yuvarlanmış Değer:", roundedValue);

// // 3-karesini alsın 36.00
// const squaredValue = Math.pow(num, 2);
// console.log("Karesi:", squaredValue.toFixed(2));

// // 4-karekök alsın 6.0
// const sqrtValue = Math.sqrt(absValue);
// console.log("Karekök:", sqrtValue.toFixed(2));

// // 5-yuvarlama yapsın 6.0
// const secondRoundedValue = Math.round(sqrtValue);
// console.log("İkinci Yuvarlanmış Değer:", secondRoundedValue);

// // 6-)çıkan sonucu 5 bölsün 6/5=1
// const dividedValue = secondRoundedValue / 5;
// console.log("Sonuç / 5:", dividedValue);

// // 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// const minBetween1And5 = Math.min(1, 5);
// console.log("En Küçük:", minBetween1And5);

// // 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// let modifiedValue;
// if (minBetween1And5 % 2 === 1) {
//     modifiedValue = minBetween1And5 + 3;
// } else {
//     modifiedValue = minBetween1And5 + 5;
// }
// console.log("Değiştirilmiş Değer:", modifiedValue);


// // Örnek-6 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// // NOT: cast kullalım ?
// const userInput = prompt("Bir sayı girin:");
// const number = parseFloat(userInput);

// let message;

// if (isNaN(number)) {
//     message = "Geçersiz giriş. Lütfen bir sayı girin.";
// } else if (number < 0) {
//     message = "Girilen sayı negatif.";
// } else if (number > 0) {
//     message = "Girilen sayı pozitif.";
// } else {
//     message = "Girilen sayı sıfır.";
// }
// console.log(message);

// // Örnek-7 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// // eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
// const password = prompt("Lütfen şifrenizi girin:");
// const repassword = prompt("Şifrenizi tekrar girin:");

// if (password === repassword) {
//     console.log("Girilen şifreler aynı.");
// } else {
//     console.log("Girilen şifreler birbirine uymuyor.");
// }


// string
// let vocabulary="Javascript öğreniyorum Javascript ";
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);
// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.startsWith("J"));
// console.log(vocabulary.endsWith(" "));

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.lastIndexOf("Javascript"));

// console.log(vocabulary.substring(1));
// console.log(vocabulary.substring(0,3)); // 0 <= x < 3

// console.log(vocabulary.concat("sona ekle"));

// vocabulary = vocabulary.replace(vocabulary, "yeni değiştir");
// console.log(vocabulary);





// Function
// function parametresizReturnsuz() {
//     console.log("parametresiz Returnsuz");
// }

// parametresizReturnsuz();

// function parametreliReturnsuz(number) {
//     console.log("parametreli Returnsuz: " + Math.pow(number, 2));
// }

// parametreliReturnsuz(6);

// function parametresizReturnlu() {
//     return "parametresiz Returnlu";
// }

// const data3 = parametresizReturnlu();
// console.log(data3);

// function parametreliReturnlu(user) {
//     return "parametreli Returnlu: " + user
// }
// const data4 = parametreliReturnlu("Javascript Öğreniyorum");
// console.log(data4);


// Normal Function
// function normal(){
//     console.log("normal");
// }
// normal();

// // Anonymous Function
// const anonymous = function(){
//     console.log("anonymous");
// }
// anonymous();

// // Arrow Function
// const arrow = () => {
//     console.log("arrow");
// }
// arrow();

// conditional
let conditional2=() =>{
    let number = 3;
    if (number == 1){
        console.log("sayı 1");
    }else if(number === 2){
        console.log("sayı2");
    }else if(number === 3){
        console.log("sayı3");
    }else if(number === 4){
        console.log("sayı4");
    }else if(number === 5){
        console.log("sayı5");
    }else{
        console.log("sayı dışarda");
    }

    switch(number){
        case 1:
            console.log("sayı 1");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        case 4:
            console.log("sayı 4");
            break;
        case 5:
            console.log("sayı 5");
            break;
        default:
            console.log("sayı dışındaa");
            break;
    }

    // let ternary=(number>5) ?"5ten büyük":"5teen küçük"
    // console.log(ternary);
}
conditional2();


// Loop
// break return continue


// Dizi


// Object


// callback, promise, asyn-await

