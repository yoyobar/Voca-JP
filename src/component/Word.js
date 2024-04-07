import { useState } from 'react';

//label
//이름이 겹치므로 word로 받은 props 데이터를 w로 바꾸어서 할당
export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function onShow() {
        setIsShow(!isShow);
    }
    //기본적으로 show는 계속해서 보여주게 되어있음.

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
        //put, update를 활용하여 데이터를 받아들임. headers 내용은 json-server기준 변할일은 없음
        //body에 JSON타입으로 변환시켜 ...word의 값을 그대로 할당하고, isDone의 값을 뒤집음
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
        //isDone이 존재할경우 off라는 클래스를 적용시켜 스타일을 바꿈
        //onChange에 onDone을 할당시켜 onDone이 바뀌게되는 체크박스여부를 확인함
        //checked가 되어있을경우, isDone의 현재 state 정보를 반영함
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
