## 실행 컨텍스트 (Execution Context)

#### 실행 컨텍스트란?

- 자바스크립트가 실행되는 환경이다.

- 원래 js는 인터프리터 언어였지만 성능 문제로 인해 JIT로 컴파일러로 실행하는데 js가 실행이 될 때 가장 먼저 실행되는 것이 전역 실행 컨텍스트를 생성합니다.

- 전역으로 컨텍스트가 생성되는데 각 변수, 함수에 대해서 각각의 컨텍스트가 생성됩니다.

  - 그 과정에서, 함수 실행 및 콜백 기다림이 발생을 합니다.
- Execution Context의 종류
  - global execution context
    - 단 한 개만 정의되는 전역 Context
    - call stack 에 가장 먼저 추가되고 앱이 종료될 때 삭제된다.
  - functional execution context
    - 함수가 실행될 때마다 정의되는 context
    - 함수 실행 시마다 정의되며 함수 실행이 종료되면 call stack에서 제거된다.
  - eval context
- 참고 : Call Stack은 최대 stack 사이즈가 정해져 있다. 최대치를 넘으면 RangeError: Maximum call stacksize exceeded라는 에러가 발생한다.(stack overflow)
---
#### example

```javascript
const title = 'Hello'

const firstFunction = () => {
  let a = 1
  a += 3
  return a
}

const secondFunction = () => {
  const b = 20
  return b
}
```

여기 코드에서 3개의 컨텍스트가 생성됩니다.

1. 전역 실행 컨텍스트

2. firstFunction 실행 컨텍스트

3. secondFunction 실행 컨텍스트

```javascript
const title = 'Hello'

const firstFunction = () => {
  let a = 1
  const b = secondFunction(2, 3)
  a = a + b
  return a
}

const secondFunction = (x, y) => {
  const c = 5
  return c
}

const x = firstFunction()
```

코드가 실행이 되면 글로벌 실행 컨텍스트를 만들고 스택이 쌓입니다.

- firstFunction();이 실행이 될 때 firstFunction() 스택이 쌓이고

- secondFunction() 실행 컨텍스트가 콜스택에 쌓입니다.

- return c;가 끝나면 스택에서firstFunction() pop()이 되고

- return a; 가 끝나면 스택에서 firstFunction()도 pop()이 됩니다.

- 마지막 const x = firstFunction();이 실행되면서 글로벌 컨텍스트도 콜스택에서 빠지게 됩니다.

참고 : 콜스택이란? 자바스크립트 엔진에서 실행 컨텍스트가 쌓여 있는 스택
[js runtime, callstack](https://github.com/Hm-source/frontend-study/blob/javascript/javascript_engine_runtime.md)
