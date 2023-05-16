let date = new Date('july 01 2023 00:00:00');
function counts() {
	let now = new Date();
	let gap = date - now;
	//console.log(gap);

	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(gap / 1000 / 60) % 60;
	let seconds = Math.floor(gap / 1000) % 60;
	//console.log(days);
	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	};
	if (gap < 0) {
		days = days + 7;
		hours = hours + 24;
		minutes = minutes + 60;
		seconds = seconds + 60;
	}

	document.getElementById('days').innerHTML = addZero(days) + ':';
	document.getElementById('hours').innerHTML = addZero(hours) + ':';
	document.getElementById('minutes').innerHTML = addZero(minutes) + ':';
	document.getElementById('seconds').innerHTML = addZero(seconds);
	document.getElementById('days2').innerHTML = addZero(days) + ':';
	document.getElementById('hours2').innerHTML = addZero(hours) + ':';
	document.getElementById('minutes2').innerHTML = addZero(minutes) + ':';
	document.getElementById('seconds2').innerHTML = addZero(seconds);
}
counts();

setInterval(counts, 1000);

new SimpleBar(document.getElementById('scrollbar'), {
	autoHide: false,
	scrollbarMaxSize: 64
});
