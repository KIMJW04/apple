# Apple Web Application

<img src="/img/APPLE01.png" alt="Apple Web App">

[사이트 링크](https://your-apple-web-app.web.app/)

이 프로젝트는 React와 Vite를 사용하여 애플 관련 정보를 표시하는 애플리케이션입니다. 3D 애플리케이션 렌더링과 애니메이션 효과를 위해 다양한 라이브러리를 활용했습니다.

## 주요 기능

<img src="/img/APPLE02.png" alt="Feature 1">
<img src="/img/APPLE03.png" alt="Feature 2">

- 애플 제품의 세부 정보 표시
- 3D 모델 렌더링
- 애니메이션 효과 및 전환
- 반응형 디자인

## 사용된 라이브러리

- **React**: 사용자 인터페이스를 구축하기 위한 주요 JavaScript 라이브러리
- **Vite**: 개발 및 빌드를 위한 최신 프론트엔드 툴링
- **GSAP**: 고급 애니메이션 및 타임라인 기능을 제공하는 라이브러리
- **Three.js**: 3D 그래픽 렌더링을 위한 JavaScript 라이브러리
- **@react-three/fiber**: React와 Three.js를 통합하여 3D 씬을 관리하는 라이브러리
- **@react-three/drei**: Three.js에서 유용한 구성 요소를 제공하는 라이브러리
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크로, 빠르고 일관된 스타일링을 지원
- **ESLint**: 코드 품질을 유지하기 위한 린터

## 설치 및 설정

1. 리포지토리를 클론합니다:

   ```bash
   git clone https://github.com/your-username/apple-web-app.git
   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd apple-web-app
   ```

3. 필요한 패키지를 설치합니다:

   ```bash
   npm install
   ```

4. 애플리케이션을 로컬 서버에서 실행합니다:

   ```bash
   npm run dev
   ```

5. 빌드를 생성하려면:

   ```bash
   npm run build
   ```

6. 빌드된 애플리케이션을 미리 보려면:

   ```bash
   npm run preview
   ```

## 프로젝트 구조

- **`src`**: 주요 소스 코드 디렉토리
  - **`components`**: React 컴포넌트 파일
  - **`views`**: 페이지별 React 컴포넌트 파일
  - **`three`**: Three.js 관련 구성 요소 및 설정 파일
  - **`assets`**: 스타일시트 및 이미지 파일
  - **`App.jsx`**: 애플리케이션의 루트 컴포넌트
  - **`main.jsx`**: 애플리케이션의 진입점

## 개발 팁

- **GSAP**: 애니메이션을 추가하거나 조정할 때 유용합니다. [GSAP Documentation](https://greensock.com/docs/)
- **Three.js**: 3D 모델을 커스터마이즈하거나 추가할 때 참고하세요. [Three.js Documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- **Tailwind CSS**: 유틸리티 클래스를 활용하여 빠르게 스타일링하세요. [Tailwind CSS Documentation](https://tailwindcss.com/docs)