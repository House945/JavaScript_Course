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

/*
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

// next lesson
let f = 7;
let g = 4;
let wynik = (f > g) ? "True" : "False";
document.write(wynik + " // wyrazenia warunkowe<br /><br />");

// next lesson: Tablice - wprowadzenie
let liczby = new Array();
liczby[0] = 1000;
liczby[1] = 2000;
liczby[2] = 3000;
document.write(liczby[2] + "// Tablice - wprowadzenie<br /><br />");

// next lesson: inicjalizacja tablic
let liczby2 = new Array(1000, 2000, 3000, 4000);
document.write(liczby2[2] + "// inicjalizacja tablic<br /><br />");

let liczby3 = [10, 20, 30, 40, 50];
document.write(liczby3[4] + "// inicjalizacja tablic<br /><br />");

let liczby4 = ["kurs excel", "kurs php"];
document.write(liczby4[1] + "// inicjalizacja tablic<br /><br />");

// next lesson: FOR loop
for( let i = 20; i >= 10; i--)
{
    document.write(i+"<br />");
}
// next lesson: matrix & loop
let liczby5 = new Array(100 ,200, 300, 400, 500, 600, 700);
//document.write(liczby5[0]);
for(let j=0; j < liczby5.length; j++)
{
    document.write(liczby5[j]+"<br />");
}

let liczby6 = new Array();
for (let k = 0; k <12; k++)
{
    liczby6[k] = k * 2;
    document.write(liczby6[k]+"<br />");
}
*/
// next lesson: WHILE loop + DO WHILE loop
/*
let h = 30;
while (h >= 20)
{
    document.write(h+"<br/>");
    h--;
}

while(warunek)
{
    instrukcje
}

do
{
    instrukcje
}
while(warunek)

let l = 15;
do
{
    document.write(l+"<br/><br/>");
    l++;
}
while(l<=30);

// zagniezdzanie pętli

for (let m =1; m <= 4; m++)
{
    for(let n =1; n<=4; n++)
    {
        document.write(n+"<br/>")
    }
}
*/
// next lesson: break & continue
/*
for (let i =1; i <=100; i++)
{
    
    if((i % 2 != 0))
    {
        continue;
    }
    document.write(i+"<br/>");
}
*/
// next lesson: wprowadzenie do funkcji
function pokazNazweKursu()
{
    document.write("Kurs JavaScript"+"<br/>");
}
pokazNazweKursu();

function pokazInfo()
{
    document.write("Kurs JavaScript"+"<br/>");
    document.write(42.00+"PLN"+"<br/>");
    document.write("Biurowe"+"<br/>");
}
pokazInfo();

document.write("---------------------------------------------<br/>");
function pokazTytul(tytul)
{
    document.write(tytul+"<br/>");
}
pokazTytul("Kurs Word");
pokazTytul("Kurs PHP");
pokazTytul("Kurs Japierdole alez dzisiaj dlugi dzien");

function pokazInfo2(tytul, cena, kategoria)
{
    document.write(tytul+"<br/>");
    document.write(cena+"PLN"+"<br/>");
    document.write(kategoria+"<br/>");
}
pokazInfo2("Excel", 1500, "zajebiste");
document.write("---------------------------------------------<br/>");

function suma(x,y,z)
{
    document.write(x + y + z);
}
suma(1500,100,900);
document.write("---------------------------------------------<br/>");

//next lesson: funkcja zwracająca wartość

function zwroc()
{
    document.write("Funkcja<br/>");
    return 100;
}
document.write(zwroc());
document.write("---------------------------------------------<br/>");

/*function sumuj(x,y)
{
    return x+y;
}
document.write(sumuj(4, 15));
document.write("---------------------------------------------<br/>");
*/

function porownaj(x,y)
{
    return x==y;
}
document.write(porownaj(6,6));
