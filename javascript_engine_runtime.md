### javascript engine과 runtime

#### 자바스크립트 엔진은 자비스크립트 코드를 실행하는 프로그램입니다.

V8 엔진 -> Node.js / Chrome

​자바스크립트 엔진 안에 call stack, heap이 있습니다.

자바스크립트 런타임 에는 여러가지가 있습니다.(browser, node.js)

1. 브라우저

구성요소로는 js engine(call stack, heap), Web api랑 callback Queue가 있습니다.

- WEB APIs
- DOM
- Timers
- Fetch
- Etc..

##### Callback Queue

콜백 큐에서 빼서 실행할 때는 이벤트 루프를 통해 실행됩니다.

​

2. Node.js

nodejs에도 js 엔진이 있고 web api 대신 C++ 바인딩과 스레드 풀이 있고, 콜백 큐가 있습니다.

C++ 바인딩 & thread pool

​

callback Queue
