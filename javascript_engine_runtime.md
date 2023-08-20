### javascript engine과 runtime

#### 자바스크립트 엔진은 자비스크립트 코드를 실행하는 프로그램입니다.

V8 엔진 (자바스크립트 엔진의 대표적인 예는 Google V8 엔진이다. C++로 작성되었으며, 구글이 개발한 오픈소스이다.)-> Node.js / Chrome

​자바스크립트 엔진 안에 call stack, heap이 있습니다.

1. Memory Heap : 메모리 할당이 일어나는 곳
2. Call Stack : 코드 실행에 따라 호출 스택이 쌓이는 곳

자바스크립트 런타임 에는 여러가지가 있습니다.(browser, node.js)

---

#### 1. 브라우저

구성요소로는 js engine(call stack, heap), Web api랑 callback Queue가 있습니다.

- WEB APIs
- DOM
- Timers
- Fetch
- Etc..

브라우저에서 제공하는 Web API(DOM, Ajax, setTimeout, eventloop, ...) 과 event 등과 함께 동작하면서 런타임이 이루집니다.
이벤트, DOM 이벤트, http 요청, 비동기 함수는 WEB API를 호출하며 WEB API는 콜백함수를 Callback Queue에 넣습니다.

자바스크립트는 1개의 스레드로 동작하고, 1개의 call stack을 가지고 있습니다.
스택이 1개만 있기 때문에, 1번에 1개의 작업만 실행할 수 있기 때문에 blocking이 발생할 수 있습니다.
blocking 문제는 비동기 처리를 통해 해결이 가능합니다.

- javascript runtime의 콜스택에서 비동기 함수를 만나면,
- 콜스택에서 지우고, WEB API로 이동합니다.
- 비동기 함수는 WEB API에 있다가 다 로드가 되면 callback queue로 이동합니다.
- 모든 함수가 실행이 완료되고 call stack이 비면, event loop는 callback queue에 담겨있는 함수들을 들어온 순서대로 call stack으로 전달합니다.

##### Callback Queue

JavaScript 런타임은 Callback Queue라는 처리 할 메시지 목록인 메시지 대기열을 사용하고, 콜백 큐에서 빼서 실행할 때는 이벤트 루프를 통해 실행됩니다.

- Event Loop는 Call Stack과 Callback Queue 사이에서 Call Stack이 비어있는지 확인하는 역할.

---

#### 2. Node.js

nodejs에도 js 엔진이 있고, web api 대신 C++ 바인딩과 스레드 풀이 있고, 콜백 큐가 있습니다.

- C++ 바인딩 & thread pool

- callback Queue
