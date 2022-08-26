# ES6/ES.NEXT 개발 환경 구축

## Table of Contents
1. [Babel](#babel)
1. [Webpack](#webpack)
1. [Polyfill](#polyfill)
1. [Webpack DevServer](#webpack-devserver)


## Babel
Babel은 ES6+/ES.NEXT로 구현된 최신 사양의 소스코드를 IE 같은 구형 브라우저에서도 동작하는 ES5 사양의 소스코드로 변환(트랜스파일링)할 수 있다.

```bash
pnpm add -D @babel/core @babel/cli
pnpm add -D @babel/preset-env
```


## Webpack
Webpack은 의존 관계에 있는 모듈(JS, CSS, Image 등의 리소스)을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러이다. Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요없다. 그리고 여러 개의 자바스크립트 파일을 하나의 파일로 번들링하므로 HTML 파일에서 script 태그로 여러 개의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.

```bash
pnpm add -D webpack webpack-cli
pnpm add -D babel-loader
```

**Webpack이 JS 파일을 번들링하기 전에** Babel을 로드하여 ES6+/ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링하는 작업을 실행하도록 설정


## Polyfill
Babel을 사용하여 ES6+/ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링해도 브라우저가 지원하지 않는 코드가 남아 있을 수 있는데, 이때 트랜스파일링 되지 않는 소스 코드를 구형 브라우저에서 사용하기 위해서는 `@babel/polyfill`을 설치해야 한다.

예를 들어, ES6에서 추가된 `Promise`, `Object.assign`, `Array.from` 등은 ES5 사양으로 트랜스파일링해도 ES5 사양에 대체할 기능이 없으므로 트랜스파일링되지 못하고 그대로 남는다. 이렇게 남은 객체나 메서드를 사용하기 위해서는 `@babel/polyfill`을 설치해야 한다.

Babel 7.4.0부터 `@babel/polyfill`은 **deprecated** 되었다. 

```bash
pnpm add @babel/polyfill
# deprecated 되었으므로 제거
pnpm remove @babel/polyfill
```

### Polyfill을 추가하는 더 나은 방법
deprecated 된 `@babel/polyfill` 대신 `@babel/plugin-transform-runtime`을 사용해 폴리필을 추가하면 global을 오염시키지 않고 폴리필을 추가하는 장점이 있다.

```bash
pnpm add -D @babel/plugin-transform-runtime
pnpm add @babel/runtime-corejs3
```

## Webpack DevServer
`webpack-dev-server`는 라이브 리로드 기능을 제공하는 개발용 서버다. 빌드를 실행하면 번들링된 파일을 생성하기 때문에 규모가 큰 프로젝트라면 빌드에 시간이 걸린다. `webpack-dev-server`는 실제 번들링된 파일을 생성하지 않고 번들링된 결과를 메모리에 저장하기 때문에 빌드 속도가 빠르다. 따라서 개발 시에는 매번 빌드를 실행하지 않고 `webpack-dev-server`를 사용하는 편이 좋다.

`webpack-dev-server`는 `webpack.config.js`에 설정을 추가하는 것으로 간단한 사용할 수 있다.

```bash
pnpm add -D webpack-dev-server
```

### HTML Webpack Plugin
HTMLWebpackPlugin을 사용하면 번들링된 자바스크립트 파일을 html 파일에 자동 추가해 준다.

```bash
pnpm add -D html-webpack-plugin
```


## Reference
- [Babel과 Webpack을 이용한 ES6 환경 구축 ②](https://poiemaweb.com/es6-babel-webpack-2)
- [15.10 폐지된 @babel/polyfill 대신 @babel/plugin-transform-runtime을 사용해 폴리필 추가하기](https://poiemaweb.com/babel-polyfill)
- [15.11 Webpack DevServer](https://poiemaweb.com/devServer)
