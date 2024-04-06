import Headers from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    return (
        <>
            <Headers />
            <DayList />
        </>
    );
}
function DayLayOut() {
    return (
        <>
            <Headers />
            <Day />
        </>
    );
}
function CreateWordLayOut() {
    return (
        <>
            <Headers />
            <CreateWord />
        </>
    );
}
function CreateDayLayOut() {
    return (
        <>
            <Headers />
            <CreateDay />
        </>
    );
}
export default App;
