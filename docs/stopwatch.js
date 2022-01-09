
let stopwatch_start_time = 0;
let stopwatch_curr_time = 0;
let stopwatch_is_running = false;
let stopwatch_was_reset = false;

const zeroPad = (num, places) => String(num).padStart(places, '0');

function getSpans () {
	return {
		"hours": document.getElementById("span_hours"),
		"minutes": document.getElementById("span_minutes"),
		"seconds": document.getElementById("span_seconds"),
		"cs": document.getElementById("span_cs")
	};
}

function getButtons () {
	return {
		"start": document.querySelector("button[name='start']"),
		"stop": document.querySelector("button[name='stop']"),
		"reset": document.querySelector("button[name='reset']")
	};
}



function UpdateStopwatch (myTimer) {
	let current_time = performance.now();
	time_difference = stopwatch_curr_time + parseInt(current_time - stopwatch_start_time);

	let cs = parseInt(time_difference / 10) % 100;
	cs = zeroPad(cs, 2);

	let seconds = parseInt(time_difference / 1000);
	let minutes = parseInt(seconds / 60);
	let hours = parseInt(minutes / 60);
	hours = zeroPad(hours, 2);
	minutes = minutes % 60;
	minutes = zeroPad(minutes, 2);
	seconds = seconds % 60;
	seconds = zeroPad(seconds, 2);

	let spans = getSpans();
	spans.hours.innerHTML = hours;
	spans.minutes.innerHTML = minutes;
	spans.seconds.innerHTML = seconds;
	spans.cs.innerHTML = cs;
	// console.log(`${hours}:${minutes}:${seconds}:${cs} have passed.`);

	if (!stopwatch_is_running) {
		clearInterval(myTimer);
		if (stopwatch_was_reset) {
			stopwatch_curr_time = 0;
		} else {
			stopwatch_curr_time = time_difference;
		}
	}
}

function startStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();

	stopwatch_is_running = true;
	stopwatch_start_time = performance.now();
	UpdateStopwatch();

	let myTimer = setInterval(function () {
		UpdateStopwatch(myTimer);
	}, 100);
}

function stopStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();
	stopwatch_is_running = false;
	stopwatch_was_reset = false;
}

function resetStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();
	stopwatch_is_running = false;
	stopwatch_was_reset = true;
}


