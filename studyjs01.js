// Single line comment
 
/*
    Multi
    line
    comement
*/
 
// คำสั่งแสดงผลข้อมูลที่ Console (สำหรับ Dev. ใช้เท่านั้น)
// string
console.log("AAAAA")
console.log('BBBBB')
console.log(`CCCCC`)
 
// number
console.log(123213)     //integer
console.log(12.3213)    //float
 
// boolean ตรรกะ
console.log(true)
console.log(false)
 
// array คือ ข้อมูลหลายๆ ข้อมูล
// แต่ต้องเขียนอยู่ใน [ ] (square bracket) คั่นด้วย , (comma)
console.log([1,2,3,4,5])
console.log(["KFC", "Pizza", "Macdonal"])
console.log(["Cat", 555, true, 555.48987, [10, 20, 30], { data: "Hello", info: 123 } ])
 
// object คือ ข้อมูลหลายๆ ข้อมูล
// แต่ต้องเขียนอยู่ใน { } (curly bracket) คั่นด้วย , (comma)
// เพียงแต่ว่าแต่ละข้อมูลจะเขียนในรูป key: value (คีย์:ค่าข้อมูล)
console.log({
    fullname: "Sombat Jaidee",
    age: 22,
    food: ["KFC", 'Pizza', `Macdonal`],
    isStudent: true,
    address: {
        city: "Bangkok",
        district: "Bang Phlat"        
    }
})
 
// undefined คือ ค่าที่ยังไม่ได้กำหนด
console.log(undefined)
// null คือ ค่าที่ไม่มีอะไรเลย
console.log(null)
// nan (Not a Number) คือ ค่าที่ไม่ใช่ตัวเลข
console.log(NaN)