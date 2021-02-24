## Geographic Coordinate Format Converter

A library to transform geospatial coordinates.

## Installation
To install the stable version:

	npm install --save geographic-coordinate-converter
	
This assumes you are using npm as your package manager.	


## Usage

Instance the converter from one of the following methods:

```javascript
import { CoordinateConverter } from "./coordinate-converter"; 
		
CoordinateConverter.fromDecimal(array)
CoordinateConverter.fromDecimal(string)
CoordinateConverter.fromDegreeMinutes(string)
CoordinateConverter.fromDegreeMinutesSeconds(string)
```	

Convert to the desired format:

```javascript
.toDecimalArray();
.toDecimal();
.toDegreeMinutes()
.toDegreeMinutesArray()
.toDegreeMinutesSeconds()	
.toDegreeMinutesSecondsArray()	
```

## Examples

```javascript
CoordinateConverter.fromDecimal([-36.01011, -2.34856])
	.toDegreeMinutes() //"36º 00.607' S 002º 20.914' W"
CoordinateConverter.fromDecimal([-36.01011, -2.34856])
    .toDegreeMinutesArray() //["36º 00.607' S", "002º 20.914' W"]
CoordinateConverter.fromDegreeMinutes("36º 00.607' S 002º 20.914' W")
	.toDegreeMinutesSeconds() //"36º 00' 36.4'' S 002º 20' 54.8'' W"
CoordinateConverter.fromDegreeMinutesSeconds("36º 00' 36.4'' S 002º 20' 54.8'' W")
	.toDecimal() //"-36.01011 -2.34856"
CoordinateConverter.fromDegreeMinutes("36º 00.607' S 002º 20.914' W")
	.toDecimalArray() //[-36.01012, -2.34857]		
```
		
## License

MIT
