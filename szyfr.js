//tablica przechowująca "literki" alfabetu Morsa
let alfabet=['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.-.-', '-.-..', '..-..', '..-..', '----', '.-..-', '--.--', '---.', '...-...', '--..-.', '--..-', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----', ' '];
//tablica przechowująca litery alfabetu zwykłego
let litery=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ą', 'ć', 'ę', 'e', 'ch', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

//funkcja, która konwertuje zwykły alfabet na morsa i nadaje sygnały dźwiękowe
function konwertuj(){

	//zmienna przechowuje wiadomosc wpisaną przez użytkownika
	let tekst=document.getElementById("text").value;

	//zamiana powyższego na małe literki, bo tylko takie są w tablicy litery
	tekst=tekst.toLowerCase();

	//podzielenie tekstu użytkownika na pojedyncze literki
	let wiad=tekst.split("");

	//zmienna przechowująca . i -
	let out="";

	//2 pętle odpowiedzialna za przypisanie literce odpowiednich kropek i kresek ewentualnie spacji
	for(let i=0; i<wiad.length; i++){
		for(let j=0; j<litery.length; j++){
			if(wiad[i]==litery[j]){
				out+=alfabet[j];
				break;
			}
		}
	}

	//wypisanie . i - na ekranie
	document.getElementById("output").value=out;

	//podzielenie kropek i kresek na pojedyncze znaki
	let znaki=out.split("");

	//pobranie odwołania do dźwięku krótkiego
	let s=document.getElementById("short");

	//pobranie odwołania do dźwięku długiego
	let l=document.getElementById("long");

	//pętla, która identyfikuje czy jest kropka czy kreska i nadaje odpowiedni dźwięk
	for(let i=0; i<znaki.length; i++){

		let a=znaki[i];

		//jeśli dany znak jest kropką
		if(a=="."){
			(function(ind){
				//nadaj sygnał krótki i zrób se 1000 mili sekund przerwy
				setTimeout(function(){s.play();}, 1000 * ind);
			})(i);
		}
		
		//w przeciwnym wypadku, jeśli znak jest -
		else if(a=="-"){
			(function(ind){
				//nadaj sygnał długi i zrób se 1000 mili sekund przerwy
				setTimeout(function(){l.play();}, 1000 * ind);
			})(i);
		}
	}
}