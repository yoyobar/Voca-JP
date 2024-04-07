import { useRef, useState } from 'react';
import useFetch from '../hooks/userFetch';
import { useNavigate } from 'react-router-dom';

export default function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();
    const [isLoading, setLoading] = useState(false);

    //isLoading 여부를 확인하여, fetch가 진행중일땐 다시 fetch할 수 없게 제한
    //데이터를 추가, POST를 통하여 각 데이터를 할당
    //여기서 데이터는 useRef() 훅을 사용하며, 인풋등의 데이터를 불러올때 사용할 수 있음
    //생성이 완료되면 useNavigate를 활용하여 해당주소로 이동시킴
    function onSubmit(e) {
        if (!isLoading) {
            setLoading(true);
            e.preventDefault();
            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: Number(dayRef.current.value),
                    jp: jpRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),
            }).then((res) => {
                if (res.ok) {
                    alert('생성이 완료 되었습니다.');
                    history(`/day/${dayRef.current.value}`);
                    setLoading(false);
                }
            });
        }
    }

    const jpRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>일본어</label>
                <input type="text" ref={jpRef} placeholder="日本語"></input>
            </div>
            <div className="input_area">
                <label>발음 / 한국어</label>
                <input type="text" ref={korRef} placeholder="ほんご / 일본어"></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>{isLoading ? 'Saving...' : '저장'}</button>
        </form>
    );
}
