import { Link } from 'react-router-dom';
import Logo from '../assets/logo/planpeakHorizontal.jpg';
import { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <header>
      <div className="content flex items-center justify-between py-1">
        <ul className='flex p-1 items-center space-x-4'>
          <li>
            <Link to="/">
              <img style={{ width: '126px' }} src={Logo} alt="PlanPeak logo" />
            </Link>
          </li>
          <li className='md:flex p-1 items-center space-x-4'>
            <Link to="/user/meetinglist" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 참가하기
            </Link>
            <ul className="hidden md:flex items-center space-x-1">
              <li>
                <Link to="/browse" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  모든 모임 둘러보기
                </Link>
              </li>
              <li>
                <Link to="/participations" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  내가 참여중인 모임
                </Link>
              </li>
              <li>
                <Link to="/history" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  나의 모임 이력
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin/meetinglist" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 관리하기
            </Link>
          </li>
          <li>
            <Link to="/landing" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              플랜픽 소개
            </Link>
          </li>
        </ul>
        <div className='flex p-2 space-x-4 md:flex'>
          {isLoggedIn ? (
            <>
              <span className="overflow-hidden rounded-full">
                <Link to="/" className="block py-2 px-3 hover:text-white">
                  {userName}
                </Link>
              </span>
              <span className="overflow-hidden rounded-full">
                <Link to="/mypage" className="block py-2 px-3 hover:text-white">
                  마이페이지
                </Link>
              </span>
              <span className="overflow-hidden rounded-full">
                <Link to="/logout" className="block py-2 px-3 hover:text-white" onClick={() => setIsLoggedIn(false)}>
                  로그아웃
                </Link>
              </span>
            </>
          ) : (
            <>
              <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                <Link to="/login" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
                  로그인
                </Link>
              </span>
              <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                <Link to="/signup" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
                  회원가입하기
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;