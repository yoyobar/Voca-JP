import { useParams } from 'react-router-dom';
import useFetch from '../hooks/userFetch';
import Word from './Word';

//useParams 다이나믹한 데이터 처리, App.js에서 보내준 :page 변수
//해당 Params의 주소를 받아들여 각각 날짜별로 다른 days 주소를 불러들임
//해당 words의 값을 filter를 활용하여 day와 같은지 확인함
//필터링 된 wordList를 map을 활용하여 <Word>에 word라는 값과 key라는값을 할당시켜 props로 보내줌
//나머지 내용은 word.js

export default function Day() {
    const { page } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${page}`);
    const wordList = words.filter((word) => word.day === Number(page));

    return (
        <>
            <h2>Day {page}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {wordList.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
