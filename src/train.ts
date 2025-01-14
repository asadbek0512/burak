/*   Project Standards:
    - Logging standards
    - Naming standards:
        function, method, variable => CAMEL
        class => PASCAL
        folder => KEBAB
        css => SNAKE
    - Error handling
*/

/*   Request:
    Tradition  API 
    Rest API
    GraphQL API
    ....
 */

/*   Frontend Development:
    Traditional FD  =>  SSR     =>   EJS
    Modern FD       =>  SPA     =>  REACT
 */

/*   Cookies:
    request join
    self destroy
*/

/*  Validation:
    Frontend validation
    Backend validation
    Database validation
*/


//H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
//faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arrey: number[]) {
    let qiymat: number[] = [];  // buyerda bo'sh arrey berib ketyapmiz yani musbat sonlarni bo‘sh massivga qo‘shishimiz uchun
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] >= 0) {
            qiymat.push(arrey[i]); // buyerda shart bajarilganda musbatni qiymat arreyiga push qiladi
        }
    }
    return qiymat.join("");
}

// console.log("H-TASK:", getPositive([1, -4, -2, 0]));

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin. 
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(son: string) {
    let qiymat: string = " ";
    for (let i = 0; i < son.length; i++) {
        if (son[i] >= "0" && son[i] <= "9") {
            qiymat += son[i];
        }
    }
    return qiymat;
}

// console.log("H2-TASK:", getDigits("m14i1t"));


// TASK I:
// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
// Yuqoridag misolda argument sifatida kiritilayotgan 
// array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
// TASK I: 1-usul
function majorityElement(arrey: number[]) {
    let qiymat: number[] = [];
    for (let i = 0; i < arrey.length; i++) {
        if (arrey.filter(son => son === arrey[i]).length > (arrey.filter(son => son === (qiymat[0] || 0)).length || 0)) {
            qiymat[0] = arrey[i];
        }

    }
    return qiymat;
}

// console.log("TASK I: 1-usul:", majorityElement([1, 2, 3, 4, 5, 4, 5, 4]));

// TASK I: 2-usul
function majorityElement1(arrey: number[]) {
    let qiymat = arrey[0];
    let count = 0;

    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === qiymat) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            qiymat = arrey[i];
            count = 1;
        }
    }
    return qiymat;
}

// console.log("TASK I: 2-usul:", majorityElement1([1, 2, 3, 4, 5, 4, 3, 4]));


// TASK J:
// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.
// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

function findLongestWord(word: string) {

    const words = word.split(" ") // bu yerda stringni arrayga aylantiradi, har bir so'z alohida element bo'ladi.
    let longestWord = ""; // Eng uzun so'zni saqlash uchun o'zgaruvchi yaratilyapti

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) { //Agar hozirgi so'z uzunroq bo'lsa, longestWord qiymati yangilanadi
            longestWord = words[i];
        }
    }
    return longestWord;
}

// console.log("TASK J:", findLongestWord("I came from Uzbekistan !"));


// TASK K:
// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing
// MASALAN: countVowels("string"); return 1
// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

function countVowels(word: string): number {
    const unli = ['a', 'e', 'i', 'o', 'u'];
    let count: number = 0;

    for (let i = 0; i < word.length; i++) {
        if (unli.includes(word[i])) { // .includes() ni massiv yoki satrda biror elementni borligini tekshirish uchun ishlatamiz.
            count++;
        }
    }
    return count;
}

// console.log("TASK K: ", countVowels("Abdukarim"));


// TASK L:
// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin
// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

// 1-usul
function reverseSentence(word: string) {

    const words = word.split(" ")
    let result = words.map(word => word.split('').reverse().join(''));

    return result.join(" ");
}
// console.log("TASK L: ", reverseSentence("we like coding!"));

// 2-usul
function reverseSentence1(word: string) {
    const words = word.split(" ");
    let result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(" ");
}
// console.log("TASK L: ", reverseSentence1("we like coding!"));

// TASK M:
// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin
// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) 
// return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

function getSquareNumbers(numbers: number[]) {
    const Natija = [];

    for (let i = 0; i < numbers.length; i++) {
        const number: number = numbers[i];

        Natija.push({
            number: number,
            square: number * number,
        });
    }
    return Natija;
}

// console.log("TASK M: ", getSquareNumbers([1, 2, 3]));

// TASK N:
// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.
// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)
// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi


function palindromCheck(word: string) {
    const words: string = word.split('').reverse().join('');
    if (words === word) {
        console.log(`true - ${word}`)
        return true
    } else
        console.log(`false - ${words}`);
    return false
}

// console.log(palindromCheck("dad"));


// TASK O:
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45
// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

function calculateSumOfNumbers(raqam: any) {
    let sum: number = 0;
    for (let i = 0; i < raqam.length; i++) {
        if (typeof raqam[i] === "number") {
            sum += raqam[i];
        }
    }
    return sum;
}

const result = calculateSumOfNumbers([10, "10", { son: 10 }, false, 35])
// console.log("TASK O:", result);


// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// 1- usul
function objectToArray(obj: {}) {
    return Object.entries(obj)
}
// console.log(objectToArray({ a: 10, b: 20 }));


// 2-usul
function objectToArray7(obj: { [key: string]: any }) {
    const result: [string, any][] = [];
    for (let key in obj) {
        if (key in obj) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

// console.log(objectToArray7({ a: 10, b: 20 }));


// TASK Q:
// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.
// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

function hasProperty(obj: {}, key: string) {
    return obj.hasOwnProperty(key);

}
// console.log(hasProperty({ name: "BMW", model: "M3" }, "M3"));

function haskey(obj: {}, key: string) {
    return key in obj;
}
// console.log(haskey({ name: "BMW", model: "M3" }, "model"));

// hasValu() qiymatini. tekshirish
function hasValue(obj: {}, value: string) {
    return Object.values(obj).includes(value);
}
// console.log(hasValue({ name: "BMW", model: "M3" }, "M3")); 


// TASK R
// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin
// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// Usul 1
function calculate(str: string) {
    return eval(str) //eval() funksiyasi JavaScriptda string sifatida yozilgan kodni ishga tushiradi.
}
// console.log("Usul 1:", calculate("1 + 3"));

//Usul 2
function calculate2(str: string) {
    const [a, amal, c] = str.split(/([+\-*/])/);
    const num1 = Number(a);
    const num2 = Number(c);

    switch (amal) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}
// console.log("Usul 2:", calculate2("7 - 5"));

// TASK S
// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.
// MASALAN: missingNumber([3, 0, 1]); return 2
// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan

function missingNumber(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(i) == -1) {
            return i
        }
    }

}
// console.log(missingNumber([0, 1, 3,5,8]));


function missingNumber1(a: number[]) {
    let count: number = a[a.length - 1];
    let missing: number[] = []
    for (let i = 0; i < count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing;
}
// console.log(missingNumber1([0, 1, 3]));


// TASK T
// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];
// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

function mergeSortedArrays(arr1: number[], arr2: number[]) {
    let combined = arr1.concat(arr2);
    for (let i = 0; i < combined.length; i++) {
      for (let j = i + 1; j < combined.length; j++) {
        if (combined[i] > combined[j]) {
          let temp = combined[i];
          combined[i] = combined[j];
          combined[j] = temp;
        }
      }
    }
    return combined;
  }
  console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
  