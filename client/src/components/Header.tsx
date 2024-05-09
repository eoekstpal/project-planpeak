import { Link } from 'react-router-dom';
import Logo from '../assets/logo/planpeakHorizontal.jpg';

function Header() {
  return (
    <div className='flex items-center justify-between mx-20 py-1'>
      <ul className='flex p-1 items-center space-x-4 text-ppVeryLightGray'>
        <li>
          <Link to="/">
            <img style={{ width: '126px' }} src={Logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">모임 참가하기</Link>
          <ul className='hidden'>
            <li><a href='#'>모든 모임 둘러보기</a></li>
            <li><a href='#'>내가 참여중인 모임</a></li>
            <li><a href='#'>나의 모임 이력</a></li>
          </ul>
        </li>
        <li>
          <Link to="/">모임 관리하기</Link>
        </li>
        <li>
          <Link to="/">플랜픽 소개</Link>
        </li>
      </ul>
      <div className='flex p-2 space-x-4 font-semibold text-ppVeryLightGray'>
        <button className="bg-transparent hover:bg-ppBlue font-semibold hover:text-ppWhite py-1 px-4 border border-ppBlack hover:border-transparent rounded-full">
          <Link to="/">로그인</Link>
        </button>
        <button className="bg-transparent hover:bg-ppBlue font-semibold hover:text-ppWhite py-1 px-4 border border-ppBlack hover:border-transparent rounded-full">
          <Link to="/">회원가입하기</Link>
        </button>
      </div>
    </div>


  );
}

export default Header;
