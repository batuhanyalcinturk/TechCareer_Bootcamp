// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma


// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
//let userData = prompt("Lütfen bir şeyler yazınız");

// S-1) Kaç karakterlidir? (length)
// console.log("Karakter sayısı:", userData.length);

// // S-2) Boşluklar alınarak kaç karakterlidir? (trim)
// console.log("Boşluklar alındıktan sonra karakter sayısı:", userData.trim().length);

// // S-3) Bütün kelimeyi küçük harfle göstermek (toLowerCase())
// console.log("Küçük harf:", userData.toLowerCase());

// // S-4) Bütün kelimeyi büyük harfle göstermek (toUpperCase())
// console.log("Büyük harf:", userData.toUpperCase());

// // S-5) Kullanıcıdan alınan ilk kelimeyi "javascript" kelimesiyle değiştirin. (replace, substring, indexOf)
// console.log("Değiştirilmiş kelime:", userData.replace(userData.substring(0, userData.indexOf(" ")), "javascript"));

// // S-6) Yazdığınız kelime "javascript" ile mi başlıyor? (startsWith())
// console.log("Kelime 'javascript' ile başlıyor mu?", userData.startsWith("javascript"));

// // S-7) Yazdığınız kelime "javascript" ile mi bitiyor? (endsWith())
// console.log("Kelime 'javascript' ile bitiyor mu?", userData.endsWith("javascript"));

// // S-8) İlk harf nedir? (charAt())
// console.log("İlk harf:", userData.charAt(0));

// // S-9) Girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// console.log("Sonuç:", userData.concat("-ben js öğreniyorum"));

// // S-10) Girdiğiniz 0 ile 4 arasındaki indeksi ekranda gösterin (substring())
// console.log("0 ile 4 arasındaki indeks:", userData.substring(0, 4));



// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)
function checkNumber() {
    let userInput = prompt("Bir sayı giriniz:");
  
    let number = parseFloat(userInput);
  
    if (number < 0) {
      console.log("Girilen sayı negatif");
    } else if (number > 0) {
      console.log("Girilen sayı pozitif");
    } else {
      console.log("Lütfen pozitif veya negatif bir sayı giriniz");
    }
  }
  //checkNumber();

  function maskName(input) {
    const words = input.split(' ');
    let firstName = words[0];
    let lastName = words[1] || '';

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    let maskedFirstName = '';
    for (let i = 0; i < firstName.length; i++) {
        if (i === 0) {
            maskedFirstName += firstName[i];
        }else {
            maskedFirstName += '*';
        }
    }
    let maskedLastName = '';
    for (let i = 0; i < lastName.length; i++) {
        if (i === 0) {
            maskedLastName += lastName[i];
        } else {
            maskedLastName += '*';
        }
    }

    return `${maskedFirstName} ${maskedLastName}`;
}
// const userInput = prompt("Lütfen isim ve soyisminizi girin:");
// const maskedResult = maskName(userInput);

// console.log(maskedResult);
