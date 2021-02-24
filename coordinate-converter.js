import {
    decimalPositionToDegreeMinutesSecondsString,
    decimalPositionToDegreeString,
    decimalPositionToDegreeMinutesSecondsArray,
    decimalPositionToDegreeArray,
    degreeLatToDecimal,
    degreeLngToDecimal,
    degreeMinutesSecondsLatToDecimal,
    degreeMinutesSecondsLngToDecimal
} from "./utils";

class GeographicCoordinateConverterBuilder {

    /***
     * Return a converter instance from an array of coordinates or from a string
     * @param coordinate string|array
     * @returns {GeographicCoordinateConverter}
     */
    fromDecimal(coordinate) {
        if (Array.isArray(coordinate)) {
            return new GeographicCoordinateConverter(coordinate[0], coordinate[1]);
        } else {
            const latlng = coordinate.split(" ");
            return new GeographicCoordinateConverter(Number.parseFloat(latlng[0]), Number.parseFloat(latlng[1]));
        }
    }

    /**
     * Return a converter instance from a degree coordinate string
     * @param coordinate string
     * @returns {GeographicCoordinateConverter}
     */
    fromDegreeMinutes(coordinate) {
        const slicePoint = Math.max(coordinate.indexOf('s'), coordinate.indexOf('S'), coordinate.indexOf('n'), coordinate.indexOf('N'));
        let latDecimal = coordinate.slice(0, slicePoint + 1).replace(/\s/g, '');
        let lngDecimal = coordinate.slice(slicePoint + 2).replace(/\s/g, '');
        return new GeographicCoordinateConverter(degreeLatToDecimal(latDecimal), degreeLngToDecimal(lngDecimal));
    }

    /**
     * Return a converter instance from a degree minutes seconds coordinate string
     * @param coordinate string
     * @returns {GeographicCoordinateConverter}
     */
    fromDegreeMinutesSeconds(coordinate) {
        const slicePoint = Math.max(coordinate.indexOf('s'), coordinate.indexOf('S'), coordinate.indexOf('n'), coordinate.indexOf('N'));
        let latDecimal = coordinate.slice(0, slicePoint + 1).replace(/\s/g, '');
        let lngDecimal = coordinate.slice(slicePoint + 2).replace(/\s/g, '');
        return new GeographicCoordinateConverter(degreeMinutesSecondsLatToDecimal(latDecimal), degreeMinutesSecondsLngToDecimal(lngDecimal));
    }
}

export const CoordinateConverter = new GeographicCoordinateConverterBuilder();

export class GeographicCoordinateConverter {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    /**
     * Returns a string in decimal format
     * @returns {string}
     */
    toDecimal() {
        return `${this.lat} ${this.lng}`;
    }

    /**
     * Returns a array of latitude longitude
     * @returns {*[]}
     */
    toDecimalArray() {
        return [this.lat, this.lng];
    }

    /**
     * Returns a string in degree format
     * @returns {*}
     */
    toDegreeMinutes() {
        return decimalPositionToDegreeString(this.lat, this.lng);
    }

    /**
     * Returns a array in degree format
     * @returns {*}
     */
    toDegreeMinutesArray() {
        return decimalPositionToDegreeArray(this.lat, this.lng);
    }

    /**
     * Returns a string in decimal minutes seconds format
     * @returns {*}
     */
    toDegreeMinutesSeconds() {
        return decimalPositionToDegreeMinutesSecondsString(this.lat, this.lng);
    }

    /**
     * Returns a array in decimal minutes seconds format
     * @returns {*}
     */
    toDegreeMinutesSecondsArray() {
        return decimalPositionToDegreeMinutesSecondsArray(this.lat, this.lng);
    }
}