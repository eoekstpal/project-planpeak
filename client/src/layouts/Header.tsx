import { Link, Router } from 'react-router-dom';
import Logo from '../assets/logo/planpeakHorizontal.jpg';

function Header() {
  return (
    <header>
      <div className="content flex items-center justify-between py-1">
        <ul className="flex p-1 items-center space-x-4">
          <li>
            <Link to="/">
              <img style={{ width: '126px' }} src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 참가하기
            </Link>
            <ul className="hidden">
              <li>
                <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  모든 모임 둘러보기
                </Link>
              </li>
              <li>
                <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  내가 참여중인 모임
                </Link>
              </li>
              <li>
                <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  나의 모임 이력
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 관리하기
            </Link>
          </li>
          <li>
            <Link to="/" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              플랜픽 소개
            </Link>
          </li>
        </ul>
        <div className="flex p-2 space-x-4">
          <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
            <Link to="/" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
              로그인
            </Link>
          </span>
          <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
            <Link to="/" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
              회원가입하기
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
