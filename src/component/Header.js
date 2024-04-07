import { Link } from 'react-router-dom';

//react-router를 통한 링크 할당
//Link to를 활용하며, {}를 활용하여 수식등을 사용할 수 있음.
//App.js 에서 링크를 할당중

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">일본어 단어장</Link>
            </h1>
            <div className="menu">
                <a href="/create_word" className="link">
                    단어 추가
                </a>
                <a href="/create_day" className="link">
                    Day 추가
                </a>
            </div>
        </div>
    );
}
