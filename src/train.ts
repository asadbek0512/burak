//H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
//faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arrey: number[]): number[] {   //buyerda qvuvusdan keyin number[] qoyish shart yani: number[] — bu funksiya qaytaradigan qiymatning turini bildiradi. Bu funksiya faqat sonlar massivini qaytaradi.
    let qiymat: number[] = [];  // buyerda bo'sh arrey berib ketyapmiz yani musbat sonlarni bo‘sh massivga qo‘shishimiz uchun
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] >= 0) {
            qiymat.push(arrey[i]); // buyerda shart bajarilganda musbatni qiymat arreyiga push qiladi
        }
    }
    return qiymat;
}

console.log("Musbat sonlar:", getPositive([1, -4, -2, 0]));