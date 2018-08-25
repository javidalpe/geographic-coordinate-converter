export function decimalLatToDegree(l) {
	let array = decimalToDegree(l);
	let str = p10(array[0]) + "º " + p10(array[1].toFixed(3));
	if (l > 0)
		str = str + "' N";
	else
		str = str + "' S";

	return str;
}

export function decimalLngToDegree(l) {
	let array = decimalToDegree(l);
	let str = p100(array[0]) + "º " + p10(array[1].toFixed(3));
	if (l > 0)
		str = str + "' E";
	else
		str = str + "' W";

	return str;
}

export function p10(n) {
	return n < 10 ?  '0' + n : n.toString();
}

export function p100(n) {
	return n < 100 ?  (n < 10 ?  '00' + n : '0' + n) : n.toString();
}

export function decimalLatToDegreeMinutesSeconds(l) {
	let array = decimalToDegreesMinutesSeconds(l);
	let str = p10(array[0]) + "º " + p10(Math.floor(array[1]))  + "' " + p10(array[2].toFixed(1));
	if (l > 0)
		str = str + "'' N";
	else
		str = str + "'' S";

	return str;
}

export function decimalLngToDegreeMinutesSeconds(l) {
	let array = decimalToDegreesMinutesSeconds(l);
	let str = p100(array[0]) + "º " + p10(Math.floor(array[1]))  + "' " + p10(array[2].toFixed(1));
	if (l > 0)
		str = str + "'' E";
	else
		str = str + "'' W";

	return str;
}

function decimalToDegree(decimal) {
	let d = parseInt(decimal);
	let md = Math.abs(decimal - d) * 60;
	let m = parseFloat(md);
	return [Math.abs(d), m];
}

function decimalToDegreesMinutesSeconds(decimal) {
	let degree = decimalToDegree(decimal);
	let d = parseInt(degree[1]);
	let md = Math.abs(degree[1] - d) * 60;
	let seconds = parseFloat(md);
	return degree.concat(seconds);
}


let decimalPartFromDegreesMinutes = function (degree) {
	let i = degree.indexOf('º');
	let deg = degree.substring(0, i);
	let fdeg = parseFloat(deg);
	let i2 = degree.indexOf('\'');
	let dec = degree.substring(i + 2, i2);
	let fdec = parseFloat(dec) / 60;
	let decimal = fdeg + fdec;
	return {i2, decimal};
};

export function degreeLatToDecimal(degree) {
	let {i2, decimal} = decimalPartFromDegreesMinutes(degree);

	let s = degree.substring(i2 + 2, i2 + 3);
	if (s === 'S' || s === 's')
		decimal = decimal * (-1);

	return roundTo(decimal, 5);
}

export function degreeLngToDecimal(degree) {
	let {i2, decimal} = decimalPartFromDegreesMinutes(degree);

	let s = degree.substring(i2 + 2, i2 + 3);
	if (s === 'W' || s === 'w')
		decimal = decimal * (-1);

	return roundTo(decimal, 5);
}

let decimalPartFromDegreesMinutesSeconds = function (degree) {
	let i = degree.indexOf('º');
	let deg = degree.substring(0, i);
	let fdeg = parseFloat(deg);

	let i2 = degree.indexOf('\'');
	let mins = degree.substring(i + 2, i2);
	let fmins = parseFloat(mins) / 60;

	let i3 = degree.indexOf('\'\'');
	let secs = degree.substring(i2 + 2, i3);
	let fsecs = parseFloat(secs) / 3600;

	let decimal = fdeg + fmins + fsecs;
	return {i3, decimal};
};

let roundTo = function (number, decimalsPositions) {
	const pow = Math.pow(10, decimalsPositions);
	return Math.round(number * pow) / pow;
};

export function degreeMinutesSecondsLatToDecimal(degree) {
	let {i3, decimal} = decimalPartFromDegreesMinutesSeconds(degree);

	let s = degree.substring(i3 + 3);
	if (s === 'S' || s === 's')
		decimal = decimal * (-1);

	return roundTo(decimal, 5);
}

export function degreeMinutesSecondsLngToDecimal(degree) {
	let {i3, decimal} = decimalPartFromDegreesMinutesSeconds(degree);

	let s = degree.substring(i3 + 3);

	if (s === 'W' || s === 'w')
		decimal = decimal * (-1);

	return roundTo(decimal, 5);
}

export function decimalPositionToDegreeString(lat, lng) {
	let flat = decimalLatToDegree(lat);
	let glng = decimalLngToDegree(lng);
	return flat + " " + glng;
}

export function decimalPositionToDegreeMinutesSecondsString(lat, lng) {
	let flat = decimalLatToDegreeMinutesSeconds(lat);
	let glng = decimalLngToDegreeMinutesSeconds(lng);
	return flat + " " + glng;
}