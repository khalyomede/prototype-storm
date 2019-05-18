


## Array.max()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/array/max.js)

Returns the maximum among all the numbers of the array.

**return**
Number

**since** 0.1.0

```javascript
const array = [1, 2, 3];
array.max(); // 3
```
## Array.unduplicate()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/array/unduplicate.js)

Returns the array and removes any duplicates.

**return**
Array

**since** 0.2.0

```javascript
const array = [1, 1, 2, 3, 3, 0, -1];
array.unduplicate(); // [1, 2, 3, 0, -1]
```
## Number.absolute()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/absolute.js)

Return the absolute value of the number.

**return**
Number

**since** 0.1.0

```javascript
const number = -42;
number.absolute(); // 42
```
## Number.ceil()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/ceil.js)

Return the ceil of the number.

**return**
Number

**since** 0.1.0

```javascript
const number = 41.1;
number.ceil(); // 42
```
## Number.degrees()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/degrees.js)

Convert the number from radians to degrees.

**return**
Number

**since** 0.1.0

```javascript
const number = 1;
number.degrees(); // 57.2958
```
## Number.floor()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/floor.js)

Returns the floor of the number.

**return**
Number

**since** 0.1.0

```javascript
const number = 42.1;
number.floor(); // 42
```
## Number.isPositive()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/is-positive.js)

Returns true if the number is greater or equal to 0, else returns false.

**return**
Boolean

**since** 0.1.0

```javascript
const number = 42;
number.isPositive(); // true
```
## Number.json()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/json.js)

Returns true if the number is greater or equal to 0, else returns false.

**return**
String

**since** 0.2.0

```javascript
const number = 42;
number.json(); // "42"
```
## Number.radians()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/radians.js)

Convert the number from degrees to radians.

**return**
Number

**since** 0.1.0

```javascript
const number = 1;
number.radians(); // 0.0174533
```
## Number.round()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/round.js)

Rounds the number to the number of desired digits.

**return**
Number

**since** 0.1.0

```javascript
const number = 42.12345;
number.round(3); // 42.123
```
## Number.truncate()

[CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/truncate.js)

Truncates the number.

**return**
Number

**since** 0.1.0

```javascript
const number = 42.123;
number.truncate(); // 42
```