import {CoordinateConverter, GeographicCoordinateConverter} from "./coordinate-converter";

describe("GeographicCoordinateConverterBuilder build suite", () => {
	it("should build a GeographicCoordinateConverter instance fromDecimal array", () => {
		expect(CoordinateConverter.fromDecimal([-36.01011, -2.34856]).lat).toBe(-36.01011);
		expect(CoordinateConverter.fromDecimal([-36.01011, -2.34856]).lng).toBe(-2.34856);
	});

	it("should build a GeographicCoordinateConverter instance fromDecimal", () => {
		expect(CoordinateConverter.fromDecimal("-36.01011 -2.34856").lat).toBe(-36.01011);
		expect(CoordinateConverter.fromDecimal("-36.01011 -2.34856").lng).toBe(-2.34856);
	});

	it("should build a GeographicCoordinateConverter instance fromDegreeMinutes", () => {
		expect(CoordinateConverter.fromDegreeMinutes("36º 00.607' S 002º 20.914' W").lat).toBe(-36.01012);
		expect(CoordinateConverter.fromDegreeMinutes("36º 00.607' S 002º 20.914' W").lng).toBe(-2.34857);
	});

	it("should build a GeographicCoordinateConverter instance fromDegreeMinutesSeconds", () => {
		expect(CoordinateConverter.fromDegreeMinutesSeconds("36º 00' 36.4'' S 002º 20' 54.8'' W").lat).toBe(-36.01011);
		expect(CoordinateConverter.fromDegreeMinutesSeconds("36º 00' 36.4'' S 002º 20' 54.8'' W").lng).toBe(-2.34856);
	});


	it("should build a GeographicCoordinateConverter instance fromDegreeMinutes without spaces", () => {
		expect(CoordinateConverter.fromDegreeMinutes("36º00.607'S 002º20.914'W").lat).toBe(-36.01012);
		expect(CoordinateConverter.fromDegreeMinutes("36º00.607'S 002º20.914'W").lng).toBe(-2.34857);
	});

	it("should build a GeographicCoordinateConverter instance fromDegreeMinutesSeconds without spaces", () => {
		expect(CoordinateConverter.fromDegreeMinutesSeconds("36º00'36.4''S 002º20'54.8''W").lat).toBe(-36.01011);
		expect(CoordinateConverter.fromDegreeMinutesSeconds("36º00'36.4''S 002º20'54.8''W").lng).toBe(-2.34856);
	});

});

describe("GeographicCoordinateConverter conversion suite", () => {
	it("should convert to negative decimal ", () => {
		expect(new GeographicCoordinateConverter(-36.01011, -2.34856).toDecimal()).toBe("-36.01011 -2.34856");
	});

	it("should convert to decimal", () => {
		expect(new GeographicCoordinateConverter(36.01011, 2.34856).toDecimal()).toBe("36.01011 2.34856");
	});

	it("should convert decimal array ", () => {
		expect(new GeographicCoordinateConverter(-36.01011, -2.34856).toDecimalArray()).toEqual([-36.01011, -2.34856]);
	});

	it("should convert to degree minutes (south, west)", () => {
		expect(new GeographicCoordinateConverter(-36.01011, -2.34856).toDegreeMinutes()).toBe("36º 00.607' S 002º 20.914' W");
	});

	it("should convert to degree minutes", () => {
		expect(new GeographicCoordinateConverter(36.01011, 2.34856).toDegreeMinutes()).toBe("36º 00.607' N 002º 20.914' E");
	});

	it("should convert to degree minutes seconds (south, west)", () => {
		expect(new GeographicCoordinateConverter(-36.01011, -2.34856).toDegreeMinutesSeconds()).toBe("36º 00' 36.4'' S 002º 20' 54.8'' W");
	});

	it("should convert to degree minutes seconds", () => {
		expect(new GeographicCoordinateConverter(36.01011, 2.34856).toDegreeMinutesSeconds()).toBe("36º 00' 36.4'' N 002º 20' 54.8'' E");
	});
});
