import Headers from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//BrowerRouter를 활용하여 내용을 송출함
//Router내부 Routes에서 Route를 각각 할당하며, exact키워드는 연관 주소가아닌 항상 그주소로 이동하게 됨
//Route는 한번에 하나의 주소만 할당할 수 있으므로, 주소를 묶는 LayOut() function에 각각의 주소 할당

function App() {
    return (
        <>
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
        </>
    );
}

function MainLayOut() {
    //메인 화면
    return (
        <>
            <Headers />
            <DayList />
        </>
    );
}
function DayLayOut() {
    //날짜별 화면
    return (
        <>
            <Headers />
            <Day />
        </>
    );
}
function CreateWordLayOut() {
    //단어 생성 화면
    return (
        <>
            <Headers />
            <CreateWord />
        </>
    );
}
function CreateDayLayOut() {
    //날짜 생성 화면
    return (
        <>
            <Headers />
            <CreateDay />
        </>
    );
}

export default App;
