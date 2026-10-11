// Control Statement คำสั่งควบคุม มี 2 กลุ่มใหญ่
// กลุ่มที่ 1 : Conditional/Selection Statement
// คือ การทำงานทีต้องมีการพิสูจน์-ตรวจสอบ ก่อนที่จะทำงานใดๆ แยกเป็น 3 ประเภท
// 1. พิสูจน์เงื่อนไขเดียว จริงทำ เท็จไม่ทำ คำสั่งที่ใช้คือ if
let data = 20
if (data > 5){
    console.log('Wow....');
    console.log('---------------------');
}
 
// 2. พิสูจน์เงื่อนไขเดียว จริงทำ เท็จก็ทำ คำสั่งที่ใช้คือ if-else
let data2 = 100
if (data2 < 99){
    console.log('Hello....');
    console.log('---------------------');
}else{
    console.log('Hi....');
    console.log('---------------------');
}
 
//3. พิสูจน์หลายเงื่อนไข คำสั่งที่ใช้คือ if-else-if, switch-casef
// if-else-if ใช้ได้กับเงื่อนไขทุกรูปแบบ
// ตัวอย่างคิดเกรด
let score = 65;
if( score > 80 ){
    console.log('Grade A');
}else if( score > 70 ){
    console.log('Grade B');
}else if( score > 60){
    console.log('Grade C');    
}else if( score > 50){
    console.log('Grade D');
}else {  //มักจะไม่มี if แต่หากมีก็ บ่ เป็นหยัง
    console.log('Grade F');
}
console.log('---------------------');
// switch-case ใช้ได้กับเงื่อนไขที่เป็นตรวจสอบว่าเท่ากันหรือไม่เท่านั้น
// ตัวอย่างสอบถามข้อมูลสายรถเมล์
let busNo = 99
switch( busNo ){
    case 3 : console.log('ไปสนามหลวง'); break;
    case 81 : console.log('ไปศิริราช'); break;
    case 84 : console.log('ไปไร่ขิง'); break;
    case 123 : console.log('ไปพาต้า'); break;
    default : console.log('ยังไม่มีข้อมูล') //ไม่มีก็ บ่ เป็นหยัง
}