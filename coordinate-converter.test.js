import {CoordinateConverter, GeographicCoordinateConverter} from "./coordinate-converter";

describe("GeographicCoordinateConverterBuilder build suite", () => {
	it("should return a valid GeographicCoordinateConverter instance", () => {
		expect(GeographicCoordinateConverter.prototype.isPrototypeOf((CoordinateConverter.fromDecimal(""))))
			.toBe(true);
	});

	it("should return a valid GeographicCoordinateConverter instance", () => {
		expect(GeographicCoordinateConverter.prototype.isPrototypeOf((CoordinateConverter.fromDegreeMinutes(""))))
			.toBe(true);
	});

	it("should return a valid GeographicCoordinateConverter instance", () => {
		expect(GeographicCoordinateConverter.prototype.isPrototypeOf((CoordinateConverter.fromDegreeMinutesSeconds(""))))
			.toBe(true);
	});

});

describe("GeographicCoordinateConverter conversion suite", () => {
	it("should convert to decimal", () => {
		expect(new GeographicCoordinateConverter(-36.01011, -2.34856).toDecimal()).toBe("-36.01011 -2.34856");
	});
});
