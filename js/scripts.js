let pokemonList = [
{ name: "Eevee", height: 0.3, type: ["normal"]},
{ name: "Vaporeon", height: 1, type: ["water"]},
{ name: "Jolteon", height: 0.8, type: ["electric"]},
{ name: "Flareon", height: 0.9, type: ["fire"]},
{ name: "Espeon", height: 0.9, type: ["psychic"]},
{ name: "Umbreon", height: 1, type: ["dark"]},
{ name: "Leafeon", height: 1, type: ["grass"]},
{ name: "Glaceon", height: 0.8, type: ["ice"]},
{ name: "Sylveon", height: 1, type: ["fairy"]},
{ name: "Wailord", height: 14.5, type: ["water"]},
	];

//loop that displays each Pokemon and comments on their size
for (let i=0; i < pokemonList.length; i++) {
	if (pokemonList[i].height <= 0.9) {
		document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) - Aww, it's so small and cute!" + "<br>");
	}else if  (pokemonList[i].height >= 1 && pokemonList[i].height <3.9) {
		document.write(pokemonList[i].name + " (Height:" + pokemonList[i].height + "m) - Nice, that's a medium-sized Pokemon!" + "<br>");
	}else	{
		document.write(pokemonList[i].name + "(Height:" + pokemonList[i].height + "m) - Wow, that's big!" + "<br>");
	}
};