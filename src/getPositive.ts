/*

*/
//H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
//faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"
function getPositive(arrey: number[]) {
    let qiymat: number[] = []; // buyerda bo'sh arrey berib ketyapmiz yani musbat sonlarni bo‘sh massivga qo‘shishimiz uchun
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] >= 0) {
            qiymat.push(arrey[i]); // buyerda shart bajarilganda musbatni qiymat arreyiga push qiladi
        }
    }
    return qiymat.join("");
}
console.log("Musbat sonlar: ", getPositive([1, -4, -2, 0]));
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
console.log("result: ", getDigits("m14i1t"));
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
console.log(majorityElement([1, 2, 3, 4, 5, 4, 5, 4]));
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
console.log("Natija :", majorityElement1([1, 2, 3, 4, 5, 4, 3, 4]));