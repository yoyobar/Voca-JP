import { useParams } from 'react-router-dom';
import useFetch from '../hooks/userFetch';
import Word from './Word';

//useParams 다이나믹한 데이터 처리, App.js에서 보내준 :page 변수

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
