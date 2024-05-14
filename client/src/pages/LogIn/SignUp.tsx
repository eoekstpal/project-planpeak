import React, { useState } from 'react';
import BtnLarge from '../../components/Common/buttons/BtnLarge';
// import RegionSelect from './RegionSelect';

interface IFormValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  gender: string;
  year: string;
  month: string;
  day: string;
  region: string;
  emailAgreement: boolean;
  marketingAgreement: boolean;
}

const SignUp: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    year: '2000',
    month: '01',
    day: '01',
    region: '서울특별시',
    emailAgreement: false,
    marketingAgreement: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}
      className='w-6/12 py-10 px-20 mx-auto my-40 text-center content-center'>
      <p className="mb-10 text-ppBlack text-4xl font-bold">회원가입</p>
      <div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='이메일'
            value={formValues.email}
            onChange={handleChange}
            required
            className='w-full py-4 px-4 my-2 text-lg font-medium'
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='이름'
            value={formValues.name}
            onChange={handleChange}
            required
            className='w-full py-4 px-4 my-2 text-lg font-medium'
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='비밀번호'
            value={formValues.password}
            onChange={handleChange}
            required
            className='w-full py-4 px-4 my-2 text-lg font-medium'
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='비밀번호확인'
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
            className='w-full py-4 px-4 my-2 text-lg font-medium'
          />
        </div>

        <div className="form-group flex text-lg font-medium">
          <label className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppGray'>성별</label>
          <div className='flex text-lg font-medium'>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formValues.gender === 'male'}
              onChange={handleChange}
            />
            <label htmlFor="male"
            className='f-1 py-4 px-4 my-2 text-lg font-medium'>남</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formValues.gender === 'female'}
              onChange={handleChange}
            />
            <label htmlFor="female"
            className='f-1 py-4 px-4 my-2 text-lg font-medium'>여</label>
          </div>
        </div>

        <div className="form-group flex">
          <label className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppGray'>생년월일</label>
          <div>
            <select id="year" name="year" value={formValues.year} onChange={handleChange}
            className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'>
              {Array.from({ length: 100 }, (_, i) => i + 1924).map((year) => (
                <option key={year} value={year.toString()}>
                  {year}년
                </option>
              ))}
            </select>
            <select id="month" name="month" value={formValues.month} onChange={handleChange}
            className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'>
              {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>
            <select id="day" name="day" value={formValues.day} onChange={handleChange}
            className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppBlack'>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day.toString().padStart(2, '0')}>
                  {day}일
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group flex">
        <label htmlFor="region" className='f-1 py-4 px-4 my-2 text-lg font-medium text-ppGray'>지역</label>
        <select id="region" name="region" value={formValues.region} onChange={handleChange} required>
          <option value="서울특별시">서울특별시</option>
          <option value="인천광역시">인천광역시</option>
          <option value="대전광역시">대전광역시</option>
        </select>
      </div>
    </div>
    <div className="form-group pl-4 text-left text-ppVeryLightGray">
      <div className='flex'>
        <input
          type="checkbox"
          id="emailAgreement"
          name="emailAgreement"
          checked={formValues.emailAgreement}
          onChange={handleChange}
          required
          className='py-4 px-4 my-2'
        />
        <label htmlFor="emailAgreement"
        className='p-2'>이메일 수신 동의</label>
      </div>
      <div className='flex'>
        <input
          type="checkbox"
          id="marketingAgreement"
          name="marketingAgreement"
          checked={formValues.marketingAgreement}
          onChange={handleChange}
          required

        />
        <label htmlFor="marketingAgreement"
        className='p-2'>마케팅 정보 수신 동의</label>
      </div>
    </div>
    <BtnLarge 
          bgColor={'bg-ppBlue my-6 hover:bg-ppMoveBlue'} 
          text={'제출하기'} 
          type='submit'
        />
  </form>
  );
}
  export default SignUp;