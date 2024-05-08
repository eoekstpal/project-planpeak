import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <div className="py-7 px-5">
    <ul className="text-ppBlack text-2xl font-bold py-5">마이페이지</ul>
      <Link to={'/'}>
        <li className="list-none text-ppGray text-lg font-normal leading-10 hover:text-ppBlue">
          관리자 프로필 설정
        </li>
      </Link>
      <Link to={'/'}>
        <li className="list-none text-ppGray text-lg font-normal leading-10 hover:text-ppBlue">
          개인정보 변경
        </li>
      </Link>
    </div>
  );
}

export default SideNav;
