import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul className="flex p-1 items-center">
        <li>
          <Link to="/">
            <img style={{ width: '126px' }} src="/assets/logo/planpeakHorizontal.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">모임참가하기</Link>
        </li>
        <li>
          <Link to="/">모임관리하기</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
