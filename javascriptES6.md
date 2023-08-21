# Frontend study

### 호이스팅 (var, let, const)

- 호이스팅이란?
선언된 함수와 변수를 코드를 실행하기 전 Heap 메모리에 미리 할당하는 작업을 의미합니다.
즉, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것입니다.
  * var와 함수 선언문은 호이스팅이 일어나고,
  * const, let, 함수 표현식은 호이스팅이 일어나지 않습니다. (더 안전하다.)

- var
  - ES5 이전
  - 변수(사용 권장 x)
  - 함수 스코프
```javascript
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('모든 상품 삭제'); // 왜 실행?? numProducts 가 undefined, var를 쓰지 말아라
}

```
  --> 이때 호이스팅이 발생해서 numProducts가 선언된 상태가 이미 되어버려 undefined가 되고, falsy한 값이기 때문에 deleteShoppingCart()가 실행되어서 모든 상품 삭제가 찍히게 된다.
- const
  - ES6 이후
  - 상수(사용 권장)
  - 블록 스코프
- let
  - ES6 이후
  - 변수
  - 블록 스코프


<!-- ### vanillaJS

- vanillajs branch (git checkout vanillajs)
  - clone coding
    - wordle game
    - 당근 마켓

### Vue

- vue_study branch (git checkout vue_study)

### React

### Nuxt -->
