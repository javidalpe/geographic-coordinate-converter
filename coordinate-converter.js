import {
	decimalPositionToDegreeMinutesSecondsString,
	decimalPositionToDegreeString,
	degreeLatToDecimal,
	degreeLngToDecimal,
	degreeMinutesSecondsLatToDecimal,
	degreeMinutesSecondsLngToDecimal
} from "./utils";

class GeographicCoordinateConverterBuilder {

	fromDecimal(coordinate) {
		const latlng = coordinate.split(" ");
		return new GeographicCoordinateConverter(Number.parseFloat(latlng[0]), Number.parseFloat(latlng[1]));
	}

	fromDegreeMinutes(coordinate) {
		const slicePoint = Math.max(coordinate.indexOf('s'), coordinate.indexOf('S'), coordinate.indexOf('n'), coordinate.indexOf('N'));
		let latDecimal = coordinate.slice(0, slicePoint + 1);
		let lngDecimal = coordinate.slice(slicePoint + 3);
		return new GeographicCoordinateConverter(degreeLatToDecimal(latDecimal), degreeLngToDecimal(lngDecimal));
	}

	fromDegreeMinutesSeconds(coordinate) {
		const slicePoint = Math.max(coordinate.indexOf('s'), coordinate.indexOf('S'), coordinate.indexOf('n'), coordinate.indexOf('N'));
		let latDecimal = coordinate.slice(0, slicePoint + 1);
		let lngDecimal = coordinate.slice(slicePoint + 3);
		return new GeographicCoordinateConverter(degreeMinutesSecondsLatToDecimal(latDecimal), degreeMinutesSecondsLngToDecimal(lngDecimal));
	}
}

export const CoordinateConverter = new GeographicCoordinateConverterBuilder();

export class GeographicCoordinateConverter {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}

	toDecimal() {
		return `${this.lat} ${this.lng}`;
	}

	toDegreeMinutes() {
		return decimalPositionToDegreeString(this.lat, this.lng);
	}

	toDegreeMinutesSeconds() {
		return decimalPositionToDegreeMinutesSecondsString(this.lat, this.lng);
	}
}