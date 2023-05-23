const searchBtn = document.getElementById("searchBtn");


var request = new XMLHttpRequest();

request.open('GET', 'http://intergalacticdb.me/api/characters');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
/*
searchBtn.addEventListener("click", (e) => {
	const search = document.getElementById("searchId").value;
	if (search != "") {
		var searchId = search.toLowerCase();
		getCharacter(searchId);
	} else {
		console.log("no input provided");
	}
});
getData();
async function getData() {
const url = 'https://akabab.github.io/starwars-api/api/all.json';
	const response = await fetch(url);
	     if (!response.ok) {
        const message = `${response.status}`;
        throw new Error(message);
    }
  	const data = await response.json();
	return data;
}
const characters = getData() 
characters.then((data) => {
	for (property in data) {
		const charData = {
			fullName: data[property].name,
			image: data[property].image,
			species: data[property].species,
			homeworld: data[property].homeworld,
			height: data[property].height,
			mass: data[property].mass
		}
	let url = `${charData.image}`;
	urlExists(url, function(exists) {
	if (exists) {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML += `<img src=${charData.image}><br><div class="cardtxt"><h3>${charData.fullName}</h3><br><h4>Species: ${charData.species}</h4><br>
							<h4>Homeworld: ${charData.homeworld}</h4><br><h4>Height: ${charData.height}</h4><br><h4>Mass: ${charData.mass}</h4></div>`;

		document.getElementById("cards").appendChild(card);
  	} else {		
		console.log("not found");
	}
	})}
}
).catch(error => {
	console.log("Request failed");
});;
function urlExists(url, callback) {
	fetch(url, { method: 'head' })
		.then(function (status) {
			callback(status.ok)
	})
}
async function getCharacter(id) {
	console.log("get char");
	console.log(id);
	const characters = getData()
	characters.then((data) => {
		for (property in data) {
			const charData = {
				fullName: data[property].name,
				image: data[property].image,
				species: data[property].species,
				homeworld: data[property].homeworld,
				height: data[property].height,
				mass: data[property].mass
			}
			var nameStr = data[property].name;
			let result = nameStr.toLowerCase().includes(id);
			if (result) {
				const searchRes = document.getElementById("searchRes")
				searchRes.classList.toggle("hidden");
				const char = document.createElement("div");
				char.innerHTML += `<img src=${charData.image}><br><h3>${charData.fullName}</h3><br><h4>Species: ${charData.species}</h4><br>
									<h4>Homeworld: ${charData.homeworld}</h4><br><h4>Height: ${charData.height}</h4><br><h4>Mass: ${charData.mass}</h4><br>`;
				document.getElementById("character").appendChild(char);
				document.getElementById("searchId").value = "";
			} else {
				console.log("no match");
			}
		}
	})
}
*/