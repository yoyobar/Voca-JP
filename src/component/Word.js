import { useState } from 'react';

//label
export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function onShow() {
        setIsShow(!isShow);
    }
    function onDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }
    function onDel() {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input onChange={onDone} checked={isDone} type="checkbox"></input>
            </td>
            <td>{word.jp}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={onShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button onClick={onDel} className="btn_del">
                    삭제
                </button>
            </td>
        </tr>
    );
}
