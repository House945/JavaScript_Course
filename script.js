//Javascript Document

/*outputs text to the screen
document.write("<h1>Kurs Javascript</h1>");
document.write("<br />");
/*
line 8
line 9
line 10
etc.

var kurs = 10;
// next lesson
document.write(kurs);
*/
/*next lesson
var x = "Kurs";
var y = "JavaScript";
document.write(x + " " + y);
*/

/*var x = 4;
x -= 5;
document.write(x);*/

/*next lesson
const cena = 199;
var cena_k = cena * 0.8;
document.write(cena_k);
*/


var y = 11;
if(y == 1)
    document.write("x ma wartosc 1 <br />");
    //document.write("<br />");
    //document.write("x > y");
else if (y==2)
    document.write("y ma wartosc 2 <br />");
    //document.write("<br />");
else if (y==3)
    document.write("y ma wartosc 3 <br />");
    //document.write("<br />");
else
    document.write("y ma wartosc inna niz 1,2,3 <br />");
    //document.write("<br />");

// next lesson

var x = 20;
switch(x)
{
    case 1:
        document.write("x = 1<br />");
    break;
    case 2:
        document.write("x = 2<br />");
    break;
    case 3:
        document.write("x = 3<br />");
    break;
    case 4:
        document.write("x = 4<br />");   
    break;  
    default:
        document.write("x ma wartosc inna niz 1, 2, 3, lub 4<br />");
}

// next lesson

var a = 15;
var b = 6;
if(a - b == 0)
    document.write("true<br />");
else
    document.write("false<br />");

// next lesson
// koniunkcja &&: (x==5) && (y == 1)   true: oba warunki prawdziwe
// alternatywa || (x==5) && (y == 1)   true: jeden warunek prawdziwy
// negacja !      (x==5) && !(y == 1)  true: jeden warunek prawdziwy drugi nieprawdziwy

var c = 1;
var d = 8;
var e = 3;
if((c==1) && !(d==6) && (e==3))
    document.write("TRUE<br />");
else
    document.write("FALSE<br />");
