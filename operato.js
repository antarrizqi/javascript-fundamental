/*
operator
1.aritmatic
2.logical
3.assignment
*/

/*
arithmetic
1.angka
2.operasi aritmatika

Contoh syntax operator=

The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values
*/


let angka1 = 10;
angka0 = angka1 + 20;
console.log(angka0)

/*
! -> tidak sama dengan
&& --> and
|| --> OR
*/
let number1 = 5;
let number2 = 7;
let result = number1 || number2;
console.log(result)


let assignment = 2;
assignment += 2;
console.log(assignment)

/*
comparsion --> perbandingan
== -> mmebandingkan value
=== --> membandingkan value dan tipe data
!=  -> tidak sama dengan


*/

let data1 = "abc";
let data2 = "abc";

let resultofcomparsion = data1 != data2;




/*
termary = perbandingan
abc ? = "123" : "321"
*/

const termaryExample = 50;
termaryExample > 50 ? console.log("diatas 50") : console.log("di bawah 50");
//if(condition) ? true : false