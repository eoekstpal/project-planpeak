import { useState } from "react"
import { Link } from "react-router-dom";

interface UserInfo {
  email: string,
  name: string,
  password: string,
  passwordCheck: string,
  gender: string,
  year: string,
  month: string,
  day: string,
  region: string,
  emailAgreeCheck: boolean,
  marketingAgreeCheck: boolean,
}

function SignUp() {
  // const [email, setEmail] = useState<string>('');
  // const [name, setName] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [passwordCheck, setPasswordCheck] = useState<string>('');
  // const [gender, setGender] = useState<string>('');
  // const [year, setYear] = useState<string>('');
  // const [month, setMonth] = useState<string>('');
  // const [day, setDay] = useState<string>('');
  // const [region, setRegion] = useState<string>('');
  // const [emailAgreeCheck, setEmailAgreeCheck] = useState<boolean>(false);
  // const [marketingAgreeCheck, setMarketingAgreeCheck] = useState<boolean>(false);

  // const [emailErr, setEmailErr] = useState<boolean>(false);
  // const [passwordErr, setPasswordErr] = useState<boolean>(false);
  // const [passwordCorrect, setPasswordCorrect] = useState<boolean>();


const [userInfo, setUserInfo] = useState<UserInfo>({
  email: '',
  name: '',
  password: '',
  passwordCheck: '',
  gender: '',
  year: '',
  month: '',
  day: '',
  region: '',
  emailAgreeCheck: false,
  marketingAgreeCheck: false,
});

  const yearList = Array.from({ length: 94 }, (_, i) => i + 1930);
  const monthList = Array.from({ length: 12 }, (_, i) => i + 1);
  const dayList = Array.from({ length: 31 }, (_, i) => i + 1);
  const regionList : string[] = [
    "서울특별시",
    "인천광역시",
    "대전광역시",
    "광주광역시",
    "대구광역시",
    "울산광역시",
    "부산광역시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주도",
  ]
  // // 이메일 포멧
  // const emailRegEx =
  //   /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  // // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
  // const passwordRegex =
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  // const isPasswordCorrect = (password == passwordCheck)
  // const isValid = (
  //   email !== '' && name !== '' && password !== '' && isPasswordCorrect === true && 
  //   gender !== '' && year !== '' && month !== '' && day !== '' && region !== '' &&
  //   emailErr === false && passwordErr === false
  // )

  const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log()
    } catch (error) {
      console.log(error);
    }
  }

  // const handleEmailRegex = () => {
  //   if (!emailRegEx.test(email)) {
  //     setEmailErr(true);
  //     alert('d')
  //   } else {
  //     setEmailErr(false);
  //   }
  // }

  // const handlePasswordRegex = () => {
  //   if (!passwordRegex.test(password)) {
  //     setPasswordErr(true);
  //   } else {
  //     setPasswordErr(false);
  //   }
  // }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserInfo ({
      ...userInfo,
      [name]: value
    })
  }

  const handleEmailAgree = () => {
    if(userInfo.emailAgreeCheck = false) {
      userInfo.emailAgreeCheck = true
    }else {
      userInfo.emailAgreeCheck = false
    }
  };
  
  const handleClick = () => {
    console.log(userInfo)
    // handleEmailRegex();
    // handlePasswordRegex();
  }; 

  return (
    <div className='w-6/12 py-10 px-20 mx-auto my-40 text-center content-center'>
      <p className='mb-10 text-ppBlack text-4xl font-bold'>
      회원가입
      </p>
      <form onChange={handleSubmit}>
        <input 
          type='text'
          id='email'
          name='email'
          placeholder='Email'
          maxLength={100}
          value={userInfo.email}
          onChange={handleInput}
          className='w-full py-4 px-4 my-2 text-lg font-medium'
          required
        />

        <input 
          type='text'
          id='name'
          name='name'
          placeholder='이름'
          maxLength={50}
          value={userInfo.name}
          onChange={handleInput}
          className='w-full py-4 px-4 my-2 text-lg font-medium'
          required
        />
        <input 
          type='password'
          id='password'
          name='password'
          placeholder='비밀번호'
          maxLength={100}
          value={userInfo.password}
          onChange={handleInput}
          className='w-full py-4 px-4 my-2 text-lg font-medium'
          required
        />
        {/* {passwordErr ? 
          <p className="text-red-500 font-medium">최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자</p> 
          : null
        } */}
        <input 
          type='password'
          id='passwordCheck'
          name='passwordCheck'
          placeholder='비밀번호확인'
          maxLength={100}
          value={userInfo.passwordCheck}
          onChange={handleInput}
          className='w-full py-4 px-4 my-2 text-lg font-medium'
          required
        />
        {/* {passwordErr ? 
          null 
          : <p className="text-red-500 font-medium">비밀번호가 일치하지 않습니다.</p>
        } */}

        <div className="flex font-medium items-center">
          <label htmlFor='gender' 
            className='py-4 px-4 my-2 text-lg  text-ppGray'
          >
            성별
          </label>
          <div className='flex px-4 text-lg text-ppGray'>
            <input 
              type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={handleInput}
            />
            <label htmlFor='male'className='py-4 px-4 my-2'>남</label>
            <input 
              type='radio'
              id='female'
              name='gender'
              value='femail'
              onChange={handleInput}
            />
            <label htmlFor='female' className='py-4 px-4 my-2'>여</label>
          </div>
        </div>

        <div className='flex'>
          <p className='py-4 px-4 my-2 text-lg font-medium text-ppGray'>생년월일</p>
          <div>
            <select id='year' name='year' value={userInfo.year}
              onChange={handleInput}
              className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'
              required
            >
              <option
                value=''
                disabled
                hidden
                selected
              >
                년
              </option>
              {yearList.map((year) =>
                <option key={year} value={year}>
                  {year}년
                </option>
              )}
            </select>
            <select id='month' name='month' value={userInfo.month}
              onChange={handleInput}
              className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'
              required
            >
              <option
                value=''
                disabled
                hidden
                selected
              >
                월
              </option>
              {monthList.map((month) =>
                <option key={month} value={month}>
                  {month}월
                </option>
              )}
            </select>
            <select id='day' name='day' value={userInfo.day} 
              onChange={handleInput}
              className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'
              required
            >
              <option
                value=''
                disabled
                hidden
                selected
              >
                일
              </option>
              {dayList.map((day) =>
                <option key={day} value={day}>
                  {day}일
                </option>
              )}
            </select>
          </div>
        </div>
          
        <div className="flex">
          <label htmlFor='region' 
            className='py-4 px-4 my-2 text-lg font-medium text-ppGray'
          >
            지역
          </label>
          <select id='region' name='region' value={userInfo.region}
           onChange={handleInput}
            className='py-4 px-4 my-2 text-lg text-ppBlack'
            required
          >
            <option
              value=''
              disabled
              hidden
              selected
            >
              지역
            </option>
            {regionList.map((region) =>
              <option key={region} value={region}>
                {region}
              </option>
            )}
          </select>          
        </div>

        <div className="form-group pl-4 text-left text-ppVeryLightGray">
          <div className='flex'>
            <input
              type="checkbox"
              id="emailAgreeCheck"
              name="emailAgreeCheck"
              // checked={userInfo.emailAgreeCheck}
              onChange={handleEmailAgree}
              required
              className='py-4 px-4 my-2'
            />
            <label htmlFor="emailAgreeCheck"
            className='p-2'>이메일 수신 동의</label>
          </div>
          <div className='flex'>
            <input
              type="checkbox"
              id="marketingAgreeCheck"
              name="marketingAgreeCheck"
              onChange={handleEmailAgree}
            />
            <label htmlFor="marketingAgreeCheck"
            className='p-2'>마케팅 정보 수신 동의</label>
          </div>
        </div>
        <Link to={'/login'}>
          <button
            type='button'
            className='rounded w-full py-4 px-4 text-lg font-bold text-center bg-ppBlue my-6 text-ppWhite'
            onClick={handleClick}
          >
            제출
          </button>
        </Link>
      </form>   
    </div>

  )
}

export default SignUp