import useFetch from '../hooks/userFetch';

import { useNavigate } from 'react-router-dom';

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();

    function createDay() {
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res) => {
            if (res.ok) {
                alert('생성이 완료 되었습니다.');
                history(`/`);
            }
        });
    }
    return (
        <>
            <h3>현재 {days.length}일</h3>
            <button onClick={createDay}>Day 추가</button>
        </>
    );
}
