import { Link } from 'react-router-dom';

//존재하지 않는 주소로 이동할 경우, 돌아가는 컴포넌트
//Router에서 '*'을 할당할경우, 할당되지않은 모든 주소는 이곳으로 향함

export default function EmptyPage() {
    return (
        <>
            <h2>잘못된 접근입니다.</h2>
            <Link to="/">돌아가기</Link>
        </>
    );
}
