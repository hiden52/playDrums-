const numDrumBtn = document.querySelectorAll(".drum").length;

addEventListener("keydown", function(e) {
	makeSounds(e.key);
	buttonAnimation(e.key);
});

for ( let i = 0; i < numDrumBtn; i++)
{
	const selecteItem = document.querySelectorAll(".drum")[i];
	selecteItem.addEventListener("click", function(){
		makeSounds(this.textContent);
		buttonAnimation(this.textContent);
	});
}


function makeSounds(key){		
		let drumSound;
		switch(key)
		{
			case "w": 
				drumSound = new Audio("./sounds/tom-1.mp3"); 
				drumSound.play();
				break;

			case "a": 
				drumSound = new Audio("./sounds/tom-2.mp3"); 
				drumSound.play();
				break;

			case "s": 
				drumSound = new Audio("./sounds/tom-3.mp3"); 
				drumSound.play();
				break;

			case "d": 
				drumSound = new Audio("./sounds/tom-4.mp3"); 
				drumSound.play();
				break;

			case "j": 
				drumSound = new Audio("./sounds/snare.mp3"); 
				drumSound.play();
				break;

			case "k": 
				drumSound = new Audio("./sounds/crash.mp3"); 
				drumSound.play();
				break;

			case "l": 
				drumSound = new Audio("./sounds/kick-bass.mp3"); 
				drumSound.play();
				break;
			
			defualt:
				console.log(key);

		}
		//var drumSound = new Audio("./sounds/crash.mp3");
		//drumSound.play();
	}

	function buttonAnimation(currentKey)
	{
		const activeBtn = document.querySelector(`.${currentKey}`);
		activeBtn.classList.add("pressed");
		setTimeout(function () {activeBtn.classList.remove("pressed")}, 100);

	}

// function keyDownHandle(e){
// 		const key = e.key;
// 		//console.log(key);
// 		let drumSound;

// 		switch(key)
// 		{
// 			case "w": 
// 				drumSound = new Audio("./sounds/tom-1.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "a": 
// 				drumSound = new Audio("./sounds/tom-2.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "s": 
// 				drumSound = new Audio("./sounds/tom-3.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "d": 
// 				drumSound = new Audio("./sounds/tom-4.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "j": 
// 				drumSound = new Audio("./sounds/snare.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "k": 
// 				drumSound = new Audio("./sounds/crash.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "l": 
// 				drumSound = new Audio("./sounds/kick-bass.mp3"); 
// 				drumSound.play();
// 				break;
			
// 			defualt:
// 				console.log(key);

// 		}
// 		//var drumSound = new Audio("./sounds/crash.mp3");
// 		//drumSound.play();
// 	}

// function clickHandle(e){
// 		//console.log(this);
// 		const clickeddBtn = this;
// 		const key = this.textContent;
// 		//console.log(key);
// 		let drumSound;

// 		switch(key)
// 		{
// 			case "w": 
// 				drumSound = new Audio("./sounds/tom-1.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "a": 
// 				drumSound = new Audio("./sounds/tom-2.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "s": 
// 				drumSound = new Audio("./sounds/tom-3.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "d": 
// 				drumSound = new Audio("./sounds/tom-4.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "j": 
// 				drumSound = new Audio("./sounds/snare.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "k": 
// 				drumSound = new Audio("./sounds/crash.mp3"); 
// 				drumSound.play();
// 				break;

// 			case "l": 
// 				drumSound = new Audio("./sounds/kick-bass.mp3"); 
// 				drumSound.play();
// 				break;
			
// 			defualt:
// 				console.log(key);

// 		}
// 		//var drumSound = new Audio("./sounds/crash.mp3");
// 		//drumSound.play();
// 	}