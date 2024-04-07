## REACT VOCA Project

![title](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/150px-React-icon.svg.png) <br><br>
![React](https://img.shields.io/badge/-REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![VS CODE](https://img.shields.io/badge/-VS%20CODE-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)<br>

<a href="https://youtu.be/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-">
<img src="https://img.shields.io/badge/-Reference%20Guide-ac856e?style=for-the-badge&logoColor=white"></img>
</a>

<hr>
리액트를 활용해 구현해보고자 하는 일본어단어 암기 서비스입니다.

### 기능

-   REST API를 구축하여 데이터를 갱신하고 관리
-   CRUD를 지원하여 Rest-Server내에서의 추가, 읽기, 수정, 삭제기능
-   React-Router-DOM을 활용한 홈페이지 전환

### 주요 사용 라이브러리
- React 18.2.0 / React-DOM 18.2.0
- React-Router-DOM 6.22.3
- Json-Server 1.0.0-alpha.23

### 구현목표
- 컴포넌트 별로 구별되어 제작하기 (O)
- REST API를 통해 데이터 관리 (O)
- 타임스크립트로의 변환 (X), 현재로서 급한 문제가 아닌 것 같음. (더 해야할게 많음)
- 에러핸들링 (O)
- 사용자 Hook을 생성하고 사용 (O)

### Trouble Shooting

- **React-Router-DOM의 작동문제**<br>
`Route`를 활용해서 같은화면에 표시할 데이터를 여러개 작성할 경우, 맨위의 작성한 내용만 등장함. (Router-DOM V6버전 이상)

 해결 방법 : Route에 송출할 화면을 하나로 묶는 function을 만들고, 해당 내용을 추가
 ```javascript
    //app.js
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route exact path="/" element={<MainLayOut />}></Route>
                        <Route path="/day/:page" element={<DayLayOut />}></Route>
                        <Route path="*" element={<EmptyPage />} />
                        <Route path="/create_word" element={<CreateWordLayOut />}></Route>
                        <Route path="/create_day" element={<CreateDayLayOut />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
  function MainLayOut() { //메인 화면
    return (
        <>
            <Headers />
            <DayList />
        </>
    );
}
 ```
- **Day 화면의 송출 문제**<br>
  Day버튼을 누를경우 각각의 주소를 할당해줘야 하는데, 해당방법의 대한 대안을 강구<br><br>
  해결 방법 : `const { page } = useParams();`로 데이터를 할당함. <br> 해당 `page`라는 데이터는 `App.js`에서 `<Route path="/day/:page"` 라는 값으로 전달함.<br> 이 값을 기준으로 `WordList`라는 변수에 할당하여, `Array.filter`를 활용하여 각각의 값의 맞는 데이터를 표현할 수 있게 수정함
  
- **모든 컴포넌트에서 fetch를 사용하여 코드가 복잡하고 읽기싫은 코드로 변모함**<br><br>
  해결 방법 : 사용자 전용 `Hook`을 생성하여, `(url)`매개 변수를 받고 해당 값의 대한 `fetch` 데이터를 전송해주는 사용자 훅을 생성.<br> `useEffect`는 함수 도달시 한번만 실행되고, 그 값을 `useState`에 할당하여 데이터를 반환해주는 방식으로 코드를 정돈함.<br>
  ```javascript
    export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, [url]);

    return data;
  }
  ```
  
## 04/06
- 리액트 개념 학습 진행 (useState, useEffect, useRef등의 Hook)
- 기능구현 완료, 각 기능 별 주석 및 Trouble Shooting 기록 필요

## 04/07
- 주석 및 Trouble Shooting 기록완료, ES6문법의 대한 추가학습이 필요하다고 판단, React 입문은 나중에 재차 진행할 예정
- Array.map, Array.reduce, Array.filter의 대한 사용이 미흡하다고 판단됨
- Reference Guide없이 혼자 코딩했을 경우 완성할 수 있을지 미지수

