/*   Project Standards:
    - Logging standards
    - Naming standards:
        function, method, variable => CAMEL
        class => PASCAL
        folder => KEBAB
        css => SNAKE
    - Error handling
*/

/*
    Tradition  API 
    Rest API
    GraphQL API
    ....
 */

/*
    Traditional FD  => SSR => EJS
    Modern FD       => SPA => REACT
 */

/*
    request join
    self destroy
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

console.log("H-TASK:", getPositive([1, -4, -2, 0]));

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

console.log("H2-TASK:", getDigits("m14i1t"));


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

console.log("TASK I: 1-usul:", majorityElement([1, 2, 3, 4, 5, 4, 5, 4]));

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

console.log("TASK I: 2-usul:", majorityElement1([1, 2, 3, 4, 5, 4, 3, 4]));


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

console.log("TASK J:", findLongestWord("I came from Uzbekistan !"));


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

console.log("TASK K: ", countVowels("Abdukarim"));