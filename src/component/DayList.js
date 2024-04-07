import { Link } from 'react-router-dom';
import useFetch from '../hooks/userFetch';

//useEffect는 어떤 상황이 변경되었을때 렌더링이 끝나고 호출됨
//2번째 매개변수로 []를 전달할경우 의존성배열이 생성됨
//함수로서 작동

//useFetch 사용자 훅을 활용하여 json-server내 FETCH 진행, 데이터를 불러들임

export default function DayList() {
    const days = useFetch('http://localhost:3001/days');
    //day가 존재하지않을때 나오는 화면, 단 데이터가 0일경우에도 나오는 점은 문제가 있음
    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        //ul내 li를 map을 돌려서 day.id가 존재하는 경우 화면에 송출하고, 각각 day.day로 값을 불러들임
        <>
            <ul className="list_day">
                {days.map((day) => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
