// key가 눌렸을 때 입력되도록
// keydown event -> update

let answer = 'APPLE'
let index = 0;
let attempts = 0;
let timer;
function appStart() {
  //로직들
	const displayGameover = () => {
		const div = document.createElement('div');
		div.innerHTML = '!!게임 종료!!';
		div.style = "display:flex; justify-content:center; align-items:center; position:absolute; top:45vh; left:45vw; background-color:white; width:200px; height:100px;"
		document.body.appendChild(div)
	}
	const nextLine = () => {
		if (attempts === 6 ){
			return gameover();
		}
		attempts++;
		index = 0
	}
	const gameover= () => {
		displayGameover();
		clearInterval(timer)
		window.removeEventListener('keydown', handleKeydown)
	}
	const handleBackspaceKey = () => {
		if (index>0) {
			const previousBlock = document.querySelector(`.board-block[data-index='${attempts}${index-1}']`)
			previousBlock.innerText = '';
			index -= 1;
		}
	}

	const handleEnterKey = () => {
		let correctTimes = 0;
		for (let i=0; i <5; i++) {
			const block = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
			const letter = block.innerHTML
			const answerLetter = answer[i]
			if (letter === answerLetter) { 
				correctTimes += 1
				block.style.background = '#6AAA64'
			} else if (answer.includes(letter)) block.style.background = '#C9B458'
			else block.style.background = '#787C7E'
		}
		if (correctTimes === 5 ) {
			gameover();
		} else nextLine();
	}
	const handleKeydown = (e) => {
		const key = e.key.toUpperCase();
		const keyCode = e.keyCode;
		const currentBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);
		if (e.key === 'Backspace') {
			handleBackspaceKey();
		} else if (index === 5) {
			if (e.key === 'Enter') {
				handleEnterKey();
			} else return;
		} else if (keyCode >= 65 && keyCode <= 90) {
			currentBlock.innerHTML = key;
			index++;
		}
		console.log('키 눌림', e.key, e.keyCode);
	}
	const startTimer = () =>  {
		const startTime = new Date();
		function setTime() {
			const currentTime = new Date();
			const time = new Date(currentTime - startTime);
			const minute = time.getMinutes().toString().padStart(2, "0");
			const second = time.getSeconds().toString().padStart(2, "0");
			const timeH1= document.querySelector('.time');
			timeH1.innerText = `${minute} : ${second}`
		}
		timer = setInterval(setTime, 1000);
	}
	startTimer();

	window.addEventListener("keydown", handleKeydown)


}

appStart();