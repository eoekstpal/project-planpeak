import { Link } from 'react-router-dom';
import BtnLarge from '../../components/common/buttons/BtnLarge';
import Input from '../../components/common/forms/Input';

function SetNewPassword() {
  return (
    <div className="w-2/5 py-10 px-12 mx-auto my-96 text-center">
      {/* border-solid border border-slate-100 rounded-2xl shadow-md shadow-slate-300 */}
      <p className="text-ppBlack text-4xl font-bold">새로운 비밀번호</p>
      <p className="text-ppVeryLightGray pt-10 text-start">
        새로운 비밀번호를 입력해주세요.
        <br />
        영문, 숫자 합산하여 8자 이상으로 입력해주세요.
      </p>
      <div className="flex flex-col pt-8 pb-4">
        <Input name={''} id={''} placeholderText={'새로운 비밀번호'} />
        <Input name={''} id={''} placeholderText={'비밀번호 확인'} />
        {/* <BtnLarge bgColor={'bg-yellow-300 my-4 text-ppBlack hover:bg-yellow-400'} text={'카카오 로그인'}/> */}
        <Link to={'/login'}>
          <BtnLarge bgColor={'bg-ppBlue my-4 hover:bg-ppMoveBlue text-ppWhite'} text={'변경하기'} />
        </Link>
      </div>
    </div>
  );
}

export default SetNewPassword;
