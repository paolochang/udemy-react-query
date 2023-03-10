# 03. React Query ESLint plugin!

이 과정이 게시된 후 React Query에 [ESLint 플러그인](https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query)이 제공되었습니다. 이 과정에서는 플러그인을 사용하지 않지만 과정 프로젝트에 플러그인을 추가하여 사용해 보시기 바랍니다!

## 과정 코드에 플러그인 및 린트 규칙 적용하기

[React Query v4 브랜치에 대한 이 커밋](https://github.com/bonnie/udemy-REACT-QUERY/commit/2b78a9830c6bc1b7790e3ca2fc6bd7fc8a245b7b)에 React Query ESLint 플로그인을 설치하고 구성하는 방법의 예시, 그 결과 코드에 나타날 변경 사항이 나와 있습니다. 대부분 ESLint auto-fix로 코드를 변경했지만 몇몇 종속성은 직접 수정해야 했습니다(주석 처리함).

## 린트 규칙 세부 정보

1. **@tanstack/query/exhaustive-deps**
   이 규칙은 쿼리 함수에서 종속성을 포함하지 않는 쿼리 키를 강조합니다("react-hooks/exhaustive-deps" 규칙이 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)의 useEffect 종속성 배열에 작용하는 것과 유사함).
   자세한 내용은 [공식 문서](https://tanstack.com/query/v4/docs/react/eslint/exhaustive-deps)를 참조하세요.

2. **@tanstack/query/prefer-query-object-syntax**

   현재 useQuery에 인수를 제공하는 방법은 두 가지입니다:

   인수 여러 개:

   `useQuery(queryKey, queryFn, { onSuccess,});`
   객체 인수 한 개:

   `useQuery({ queryKey, queryFn, onSuccess,});`

### 여러 버전에서 인수 지원

(이 과정 작성 시 가장 최신 버전이었던) React Query 3에서는 ‘인수가 여러 개인’ 구문만 지원했습니다.
React Query 4에서는 두 구문 옵션을 모두 지원합니다.

(아직 릴리스되지 않은) React Query 5에서는 객체 구문만 지원됩니다([React Query v5 로드맵](https://github.com/TanStack/query/discussions/4252)에서 ‘remove overloads’ 부분 참조).

이 규칙에는 객체 구문이 요구되어 useQuery 구문을 나중에도 사용할 수 있으므로, React Query 5 업그레이드 시 오류가 발생하지 않습니다. 이와 더불어 **코드를 자동으로 수정**하고 ‘인수가 여러 개인’ 구문을 ‘객체 구문’으로 바꿉니다. 자세한 내용은 [공식 문서](https://tanstack.com/query/v4/docs/react/eslint/prefer-query-object-syntax)를 참조하세요.
