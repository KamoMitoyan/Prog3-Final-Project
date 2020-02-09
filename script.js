
//! Setup function fires automatically
function setup() {


    var socket = io();

    var side = 10;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let reaperCountElement = document.getElementById('reaperCount');
    let creatorCountElement = document.getElementById('creatorCount');
    let hunterCountElement = document.getElementById('hunterCount');
	let grassQuantityElement = document.getElementById('grassQuantity');
	let grassEaterQuantityElement = document.getElementById('grassEaterQuantity');
	let predatorQuantityElement = document.getElementById('predatorQuantity');
	let reaperQuantityElement = document.getElementById('reaperQuantity');
	let creatorQuantityElement = document.getElementById('creatorQuantity');
	let hunterQuantityElement = document.getElementById('hunterQuantity');
	let weatherNameElement = document.getElementById('weather');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
	
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
		matrix = data.matrix;
		weather = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        reaperCountElement.innerText = data.reaperCounter;
        creatorCountElement.innerText = data.creatorCounter;
        hunterCountElement.innerText = data.hunterCounter;
		grassQuantityElement.innerText = data.grassQuantity;
		
		grassEaterQuantityElement.innerText = data.grassEaterQuantity;
		predatorQuantityElement.innerText = data.predatorQuantity;
		reaperQuantityElement.innerText = data.reaperQuantity;
		creatorQuantityElement.innerText = data.creatorQuantity;
		hunterQuantityElement.innerText = data.hunterQuantity;
		weatherNameElement.innerText = data.weather;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side);
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
				if(weather == "winter"){
					if (matrix[i][j] == 1) {
				        fill("#a9ffa1");
				    } else if (matrix[i][j] == 2) {
				        fill("#fffca1");
				    } else if (matrix[i][j] == 0) {
				        fill('#acacac');
				    } else if (matrix[i][j] == 3) {
				        fill('#ffa1a1');
				    } else if (matrix[i][j] == 4) {
				        fill('black');
				    } else if (matrix[i][j] == 5) {
				        fill('white');
				    }else if(matrix[i][j] == 6){
				        fill('#a1d9ff');
					}
				}
				if(weather == "summer"){
					if (matrix[i][j] == 1) {
					    fill("green");

					} else if (matrix[i][j] == 2) {
					    fill("yellow");

					} else if (matrix[i][j] == 0) {
					    fill('#acacac');

					} else if (matrix[i][j] == 3) {
					    fill('red');

					} else if (matrix[i][j] == 4) {
					    fill('black');

					} else if (matrix[i][j] == 5) {
					    fill('white');

					}else if(matrix[i][j] == 6){
					    fill('blue');

					}
				}
				if(weather == "spring" || weather == "autumn"){
					if (matrix[i][j] == 1) {
					    fill("#1a6b15");

					} else if (matrix[i][j] == 2) {
					    fill("#d3d624");

					} else if (matrix[i][j] == 0) {
					    fill('#acacac');

					} else if (matrix[i][j] == 3) {
					    fill('#a60d0d');

					} else if (matrix[i][j] == 4) {
					    fill('#5c5858');

					} else if (matrix[i][j] == 5) {
					    fill('#f0e8ce');

					}else if(matrix[i][j] == 6){
					    fill('#0f1b73');

					}
				}
				rect(j * side, i * side, side, side);
            }
        }
    }
}