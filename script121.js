function usunKlase()
{
	var obrazek = document.getElementById("obrazek");
	obrazek.onclick = function()
	{
		if(obrazek.className == "obrazki")
		{
			obrazek.className = "";
		}
		else
		{
			obrazek.className = "obrazki";
		}
		
	}
}

function noweOkno()
{
	przycisk = document.getElementById("przycisk");
	przycisk.onclick = function()
	{
		let zapytanie = confirm("Czy na pewno chcesz otworzyć nowe okno?");
		if(zapytanie == true)
		{
		open("http://strefakursow.pl");
		}
	}
}
function pokazOkno()
{
	//setInterval("window.location.reload();", 2000); - troche zjebana funckja ale jest
	setTimeout("alert('Kurs JS');", 2000);
	//alert("Kurs JS");
}
window.onload = function()
{
	usunKlase();
	noweOkno();
	pokazOkno();
}