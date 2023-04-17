//creating repository - IIFE
let pokemonRepository = (function() {
	//array listing some pokemon
	let pokemonList = [
		{ 
			name: "Eevee", 
			height: 0.3, 
			types: ["normal"]
		},
		{ 
			name: "Vaporeon", 
			height: 1, 
			types: ["water"]
		},
		{ 
			name: "Jolteon", 
			height: 0.8, 
			types: ["electric"]
		},
		{ 
			name: "Flareon", 
			height: 0.9, 
			types: ["fire"]
		},
		{ 
			name: "Espeon", 
			height: 0.9, 
			types: ["psychic"]
		},
		{ 
			name: "Umbreon", 
			height: 1, 
			types: ["dark"]
		},
		{ 
			name: "Leafeon", 
			height: 1, 
			types: ["grass"]
		},
		{ 
			name: "Glaceon", 
			height: 0.8, 
			types: ["ice"]
		},
		{ 
			name: "Sylveon", 
			height: 1, 
			types: ["fairy"]
		},
		{ 
			name: "Wailord", 
			height: 14.5, 
			types: ["water"]
		}

	]

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		pokemonList.push(pokemon);
	}
	
	function addListItem(pokemon) {
		let listedPokemon = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('pokemon-class');
		listItem.appendChild(button);
		listedPokemon.appendChild(listItem);

		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		});
	}

	function showDetails(pokemon) {
		console.log(pokemon);
	}


	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem
	};
})();


//forEach function that calls a loop and displays each Pokemon's details
pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);
});