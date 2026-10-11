// ใน JavaScript ตัว { ..... } cury bracket คือ ขอบเขตของการทำงานหนึ่งๆ
 
// Variable ตัวแปร ******************
// เป็นชื่อที่ Dev. กำหนดขึ้นมาเอง เอาไว้เก็บค่าข้อมูล
// ประกาศตัวเพื่อเอาไปใช้งานมี 3 วิธี ผ่าน var, let, const
var scoreMidterm = 80    //เป็นแบบ Global (ใช้ที่ไหนก็ได้) แก้ไข/เปลี่ยนค่าได้  (* เลี่ยงได้เลี่ยง)
let scoreFinal = 90      //เป็นแบบ Local (ใช้ได้เฉพาะใน { ... } นั้นๆ เท่านั้น) แก้ไข/เปลี่ยนค่าได้
const scoreTotal = 500    //เป็นแบบ Local (ใช้ได้เฉพาะใน { ... } นั้นๆ เท่านั้น) แก้ไข/เปลี่ยนค่าไม่ได้
 
scoreMidterm = 99
scoreFinal = 20
// scoreTotal = 1000   ERROR
{
    var a = 10
    let b = 20
    const c = 30
    {
        var x = 100
        let y = 200
        const z = 300
        {
            var m = 1000
            let n = 2000
            const o = 3000
        }
    }
}