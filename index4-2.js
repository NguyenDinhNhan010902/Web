let x1, x2;


let a = prompt("hệ số a ");
let b = prompt("hệ số b ");
let c = prompt("hệ số c ");

denta = b*b-4(a*c);
if(denta>0){
    alert("pt có 2 nghiệm phân biệt:x1"+((-b-Math.sqrt(denta))/(2*a))+"x2="+ ((-b+Math.sqrt(denta))/(2*a)) );
}
else if(denta==0){alert("pt có nghiệm kép x1 và x2 ="+(-b)/(2*a));}
else alert("pt vô nghiệm");