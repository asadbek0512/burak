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


