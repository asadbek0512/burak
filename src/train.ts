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
