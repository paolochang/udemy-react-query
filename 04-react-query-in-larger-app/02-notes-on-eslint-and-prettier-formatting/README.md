# 02. ESLint와 Prettier 포맷팅 관련 정보

## ESLint와 Prettier 포맷팅

Lazy Days Spa 앱은 [ESLint 구성](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.eslintrc.json), [Prettier 구성](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.prettierrc.json)과 [저장할 때 자동 포맷팅되는 VSCode 설정](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.vscode/settings.json)과 함께 제공됩니다. 설정에서 자동 포맷팅이 작동하지 않으면 코드가 실행되기 전에 지루한 수동 포맷팅을 해야 될 수 있습니다. 다음은 수동 포맷팅 없이는 코드 실행이 되지 않는 경우, 몇 가지 제안 사항입니다:

1. VSCode에 저장할 때 자동 포맷팅되지 않는 문제 해결

VSCode에 저장할 때 자동 포맷팅하려면 다음을 확인해 주세요:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 확장 프로그램 설치 여부

- ESLint 확장 프로그램이 출력 창에서 에러를 띄우진 않는지

- VSCode에서 연 폴더가 상위디렉토리가 아닌 프로젝트의 최상위 디렉토리인지

  > **참고**: VSCode 확장 프로그램 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)는 create-react-app command-line Prettier 🤦 ‍♀️와 **충돌할** 수 있기 때문에 이 확장 프로그램을 **비활성화**하는 것이 도움이 될 수 있습니다.

2. 명령행에서 자동 포맷팅하기

ESLint가 코드 편집기에서 작동하지 않는 경우 명령행에서 다음을 실행하여 자동으로 수정 가능한 모든 것을 자동으로 수정할 수 있습니다 (`.eslintrc.json`과 `.prettierrc.json` 파일사용함):

```
eslint --fix src/ --ext ".jsx,.js,.ts,.tsx"
```

3. . 린팅/ 포맷팅 요구 사항을 완전히 제거하세요

에러 메시지가 뜨는데 문제를 해결하고 싶지 않다면 [.eslintrc.json](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.eslintrc.json)과 [.prettierrc.json](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.prettierrc.json)을 삭제하면 됩니다.

## `␍` prettier/prettier 에러 삭제하기

다음 스크린샷처럼 보일 때도 있습니다:

이 에러는 라인의 끝이 차이 나는 이유로 가끔 Windows에서 발생합니다. 다음은 에러를 해결하기 위해 할 수 있는 몇 가지 시도입니다:

1. 프로젝트의 모든 파일에서 `prettier` 를 실행합니다(참고: create-react-app 문서):

```
./node\*modules/.bin/prettier --write "src/\*\*/\_.{js,jsx,ts,tsx,json,css,scss,md}"
```

2. 참고: 다음과 같이 하면 [전역 git 설정](https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)이 업데이트됩니다. `git config --global core.autocrlf true` 를 실행하고 GitHub에서 코드를 다시 pull합니다(또는 저장소를 다시 복제해도 됩니다). (참고: [GitHub 문서](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#global-settings-for-line-endings))

3. [.eslintrc.json](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.eslintrc.json)과 [.prettierrc.json](https://github.com/bonnie/udemy-REACT-QUERY/blob/dffb7dc8108c2c28e3064781955f8ed2f37682f6/base-lazy-days/client/.prettierrc.json)을 삭제하여 **린팅/ 포맷팅 요구 사항을 완전히 제거하세요**. 이렇게 하면 코딩할 때 린팅과 포맷팅의 장점도 없어지므로 최후의 수단입니다.

---

강의 저장소에 이미 적용된 해답:

1. eslintrc.json 파일에서 prettier/prettier 규칙 업데이트:

```json
{
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ]
}
```

2. vscode/settings.json에서 라인의 끝을 설정:

```json
{
  "files.eol": "\n"
}
```

---

작동하는 데 문제가 있는 경우 언제든지 Q&A에 질문을 남겨주세요.
