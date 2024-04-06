import { Link } from 'react-router-dom';
import useFetch from '../hooks/userFetch';

//useEffect는 어떤 상황이 변경되었을때 렌더링이 끝나고 호출됨
//2번째 매개변수로 []를 전달할경우 의존성배열이 생성됨
//함수로서 작동

export default function DayList() {
    const days = useFetch('http://localhost:3001/days');

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
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
