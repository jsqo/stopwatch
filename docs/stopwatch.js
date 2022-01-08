


function getSpans () {
	return {
		"hours": document.getElementById("span_hours"),
		"minutes": document.getElementById("span_minutes"),
		"seconds": document.getElementById("span_seconds"),
		"ms": document.getElementById("span_ms")
	};
}

function getButtons () {
	return {
		"start": document.querySelector("button[name='start']"),
		"stop": document.querySelector("button[name='stop']"),
		"reset": document.querySelector("button[name='reset']")
	};
}



function startStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();
	buttons.start.innerHTML = "Start it!";
}

function stopStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();
	buttons.stop.innerHTML = "Stop it!";
}

function resetStopwatch (e) {
	let spans = getSpans();
	let buttons = getButtons();
	buttons.reset.innerHTML = "Reset it!";
}


