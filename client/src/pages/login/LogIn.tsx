import { Link } from 'react-router-dom';
import BtnLarge from '../../components/common/buttons/BtnLarge';
import Input from '../../components/common/forms/Input';

function LogIn() {
  return (
    <div className="w-2/5 py-10 px-12 mx-auto my-96 text-center">
      <p className="text-ppBlack text-4xl font-bold">로그인</p>
      <div className="flex flex-col pt-10 pb-4">
        <Input name={''} id={''} placeholderText={'Email'} />
        <Input name={''} id={''} placeholderText={'Password'} />
        <Link to={'/'}>
          <BtnLarge
            bgColor={'bg-ppBlue my-4 hover:bg-ppMoveBlue text-ppWhite'}
            text={'PlanPeak 로그인'}
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="grow text-start">
          <Link to={'/findpw'} className="text-ppBlue border-2 border-slate-950">
            PW 찾기
          </Link>
        </div>
        <div className="flex">
          <p className="text-ppVeryLightGray">회원이 아니신가요? &nbsp;</p>
          <Link to={'/signup'} className="text-ppBlue border-2 border-slate-950">
            Create an acount
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
