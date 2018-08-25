class GeographicCoordinateConverterBuilder {

	fromDecimal(coordinate) {
		return new GeographicCoordinateConverter(coordinate);
	}

	fromDegreeMinutes(coordinate) {
		return new GeographicCoordinateConverter(coordinate);
	}

	fromDegreeMinutesSeconds(coordinate) {
		return new GeographicCoordinateConverter(coordinate);
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
		return 2;
	}

	toDegreeMinutesSeconds() {
		return 2;
	}
}