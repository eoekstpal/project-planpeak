import { Link } from 'react-router-dom';
import BtnLarge from '../../components/common/buttons/BtnLarge';
import Input from '../../components/common/forms/Input';

function FindPassword() {
  return (
    <div className="w-2/5 py-10 px-12 mx-auto my-96 text-center">
      {/* border-solid border border-slate-100 rounded-2xl shadow-md shadow-slate-300 */}
      <p className="text-ppBlack text-4xl font-bold">비밀번호 찾기</p>
      <p className="text-ppVeryLightGray pt-10 text-start">
        가입하신 이메일 주소를 입력해 주세요.
        <br />
        비밀번호를 다시 설정할 수 있는 메일을 보내드립니다.
      </p>
      <div className="flex flex-col pt-8 pb-4">
        <Input name={''} id={''} placeholderText={'Email'} />
        {/* <BtnLarge bgColor={'bg-yellow-300 my-4 text-ppBlack hover:bg-yellow-400'} text={'카카오 로그인'}/> */}
        <Link to={'/setpw'}>
          <BtnLarge
            bgColor={'bg-ppBlue my-4 hover:bg-ppMoveBlue text-ppWhite'}
            text={'이메일 보내기'}
          />
        </Link>
      </div>
    </div>
  );
}

export default FindPassword;
