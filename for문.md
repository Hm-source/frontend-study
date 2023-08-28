### for 문 속도 비교
```javascript
JAVASCRIPT
const start = new Date()

//... code ...

console.log((new Date() - start) / 1000)
```
- 방법
  1. 코드를 실행 전 시간을 저장
  2. 코드를 실행
  3. 현재의 시간과 코드를 시작한 시간을 비교

#### for 문
```javascript
const array = new Array(1000000).fill().map((v, i) => i)

const start = new Date()

let str = "";

for (let i = 0; i < array.length; i++) {
    str += array[i]
}

console.log(new Date() - start)

// for문 -> 141
```
#### forEach
```javascript
const array = new Array(1000000).fill().map((v, i) => i)

const start = new Date()

let str = "";

array.forEach(v => {
    str += v
});

console.log(new Date() - start)

// forEach -> 150
```

#### map
- for 문, forEach 보다 속도는 느리다.
- for문과 forEach와는 다르게 반환 값을 모아 새로운 배열을 반환한다.

```javascript
const array = new Array(10000000).fill().map((v, i) => i)

const start = new Date()

let str = "";

array.map(v => {
    str += v
});

console.log(new Date() - start)

// map -> 243
```

#### reduce
```javascript
const array = new Array(1000000).fill().map((v, i) => i)

const start = new Date()

let str = "";

array.reduce((acc, v) => {
    str += v
});

console.log(new Date() - start)

// reduce -> 181
```

** 위와 같이 비교하였지만, +, - 연산이 아닌 배열 관련 연산을 하게 되면 속도는 좀 달라질 수 있다. ** 

### 고차 함수
- 고차 함수(higher order function)는 함수의 형태로 리턴할 수 있는 함수
##### 내장 고차 함수
- Array.filter() : 모든 배열의 요소 중에서 특정 조건을 만족하는 요소를 걸러낼 때 사용
- Array.map() : 하나의 데이터를 다른 데이터로 맵핑(mapping) 할 때 사용
- Array.reduce() : 여러 데이터를, 하나의 데이터로 응축(reduce)할 때 사용


###### 제대로 된 용도에 적절한 for loop, 고차함수를 사용이 중요