// Operator ตัวดำเนินการ/เครื่องหมายๆ ที่ใช้ในการทำงานกับข้อมูล
// Arithemetic Operator คือ ตัวดำเนินการคณิตศาสตร์
// ตัวเลขกระทำ กับ ตัวเลข ได้ตัวเลข
// +, -, *, /, %, **
console.log(10 + 3)
console.log(10 - 3)
console.log(10 * 3)
console.log(10 / 3)
console.log(10 % 3) //เครื่องหมาย mod คือ หารเอาเศษ
console.log(10 ** 3)
console.log('------------------------')

// Comparison Operator คือ ตัวดำเนินการเปรียบเทียบ
// ข้อมูลกระทำกับข้อมูล ได้ค่าเป็น true จริง หรือ false เท็จ
// ==, ===, !=, !==, >, <, >=, <=
console.log(10 == 8)     //เท่ากันจริงไหม
console.log(10 === 8)    //เท่ากันจริงไหม  
console.log(10 != 8)     //ไม่เท่ากันจริงไหม
console.log(10 !== 8)    //ไม่เท่ากันจริงไหม
console.log(10 > 8)
console.log(10 < 8)
console.log(10 >= 8)
console.log(10 <= 8)
console.log('------------------------')
console.log("Bangna" == "Bangpoo")      //false
console.log("Bangna" === "Bangpoo")     //false
console.log("Bangna" != "Bangpoo")      //true
console.log("Bangna" !== "Bangpoo")     //true
console.log("Bangna" < "Bangpoo")       //true
console.log("Bangna" > "Bangpoo")       //false
console.log("Bangna" <= "Bangpoo")      //true
console.log("Bangna" >= "Bangpoo")      //false
console.log('------------------------')
console.log("15" == 15)      //เปรียบเทียบแบบไม่สนใจชนิดข้อมูล
console.log("15" === 15)     //เปรียบเทียบแบบสนใจชนิดข้อมูล
console.log("15" != 15)      //เปรียบเทียบแบบไม่สนใจชนิดข้อมูล
console.log("15" !== 15)     //เปรียบเทียบแบบสนใจชนิดข้อมูล
console.log('------------------------')

// Logical Operators คือ ตัวดำเนินการตรรกะ
// ! คือ not, && คือ and, || คือ or
// ! Exclamation, & ampersand, | คือ pipe
// true/false กระทำ true/false ได้ค่าเป็น true/false
console.log(! true)             //false
console.log(! false)            //true
console.log(true && true)       //true
console.log(true && false)      //false
console.log(false && true)      //false
console.log(false && false)     //false
console.log(true || true)       //true
console.log(true ||false)       //true
console.log(false || true)      //true
console.log(false || false)     //false
console.log('------------------------')

// Ternary Operators คือ ตัวดำเนินการเงื่อนไข (เงื่อนไข คือ พิสูจน์/ตรวจสอบ)
// เงื่อนไข  ?  ทำเมื่อจริง  :  ทำเมื่อเท็จ
// _______ ? _________ : ________
console.log(25 >= 52 ? "Wow...." : "Hum.....")
console.log('------------------------')
 
// Nullish Coalescion Operators คือ ตัวดำเนินการเช็คค่า null/undefined/0/""/NaN
// &&  (ต้องระวังเพราะมันเหมือนเครื่อง and)
let xx = 555
let yy = ""
let zz = null
console.log(xx && 'Hello')
console.log(yy && 'Hi')
console.log(zz && 'Hey')
console.log('------------------------')
 
 // Increment/Decrement Operators คือ ตัวเพิ่ม/ลดค่า ตัวมันเอง ทีละ 1
// ++  และ --
let number = 10
number++
console.log(number)
++number
console.log(number)
number--
console.log(number)
--number
console.log(number)
console.log('------------------------')

// Assignment Operators คือ ตัวกำหนดค่า (ทำทางขวาของเครื่องให้เสร็จ แล้วเอาไปใส่ทางซ้าย)
// =  และตัวกำหนดค่าอย่างย่อ +=  -=  *=  /=  %=  **=
let a = 10
console.log(a);
a = a + 15 - 3
console.log(a);
let b = 100;
b += 30  //มันย่อมาจาก  b = b + 30
console.log("B is ", b);
let c = 5
c *= b + 10 - 2  //มันย่อมาจาก c = c * (b + 10 - 2)
//********* กรณีใช้เครื่องหมายอย่างย่อ ต้องทำไอ้ที่ไม่ย่อก่อน ถึงจะได้ค่าที่ถูกต้อง *********
console.log("C is ", c);
console.log('------------------------')