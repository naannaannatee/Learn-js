// การเชื่อมข้อมูลหลายๆ ประเภทเข้าด้วยกัน
let a = 10
let b = "hello...."
let c = true

let datya1 = a + " " + b + " " + c + " Wow .... " + 555
let data2 = `${a} ${b} ${c} Wow .... 555)`
// let data3 = a,b,c, "Wow....",555 แบบนี้ใช้ไม่ได้ ERROR

console.log(data1)
console.log(data2)


console.log (a + " " + b + " " + c + " Wow .... " + 555);
console.log (${a} ${b} ${c} Wow .... 555);
console.log (a,b,c, "Wow .........", 555);