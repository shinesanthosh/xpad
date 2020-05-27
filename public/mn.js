function redir(url) {
	window.location.href = '/detail?id=' + url;
}

function red(url) {
	window.location.href = url;
}

function del(id) {
	if (confirm('Do you want to delete this??')) {
		window.location.href = '/delete?id=' + id;
	}
}

var countDownDate, x;

function countDown() {
	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (distance < 0) {
		clearInterval(x);
		document.getElementById('counter').innerHTML = 'LAUNCHED';
		document.getElementById('counter').style.color = 'red';
		document.getElementById('box').style.borderColor = 'red';
	} else {
		document.getElementById('counter').innerHTML =
			'Launches in: ' +
			days +
			'd ' +
			hours +
			'h ' +
			minutes +
			'm ' +
			seconds +
			's ';
	}
}

function _(id) {
	return document.getElementById(id);
}

function timer() {
	var string = _('date').innerHTML + 'T' + _('time').innerHTML;
	countDownDate = Date.parse(string);
	x = setInterval(countDown, 1000);
}
