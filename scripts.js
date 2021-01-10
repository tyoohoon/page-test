const sen = ['คุณเบียว', 'ยังเบียวอยู่ดี', 'ฝืนชะตาว่าเบียวไม่ได้หรอก', 'พอเถอะเขียนไว้แค่4อัน']
var i=0;
function showResult(){
    document.getElementById("select").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("theSen").innerHTML = sen[i];
    if(i<3) i++;
}
function replayFunc(){
    document.getElementById("select").style.display = "block";
    document.getElementById("result").style.display = "none";
}
