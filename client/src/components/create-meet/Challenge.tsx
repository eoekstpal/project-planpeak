import { useState } from 'react';
import BtnMedium from '../buttons/BtnMedium';

export interface ChallengeProps {
  onChange: (data: { number: string; description: string; deadline: string }) => void;
}

function Challenge({ onChange }: ChallengeProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState({
    number: '',
    description: '',
    deadline: '',
  });

  const handleSubmit = () => {
    onChange(data);
    setShowModal(false);
    console.log(data);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {' '}
      <br /> <br />
      <h2>챌린지(과제) 유무</h2> <br />
      <div onClick={handleYesClick} className="flex">
        <input
          className="mr-1 form-radio text-blue-500 bg-red-200"
          type="radio"
          id="yes"
          name="challenge"
          value="yes"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
        />
        <label htmlFor="yes">있어요</label>

        <input
          className="ml-4 mr-1"
          type="radio"
          id="no"
          name="challenge"
          value="no"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
        />
        <label htmlFor="no">없어요</label>
      </div>{' '}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative rounded-lg bg-white p-8 shadow-lg">
            <span className="absolute right-0 top-0 cursor-pointer p-3" onClick={handleCloseModal}>
              &times;
            </span>
            <p>과제 생성</p> <br />
            <label htmlFor="number">번호</label> <br />
            <input
              className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
              placeholder="내용을 입력하세요"
              type="number"
              id="number"
              name="number"
              value={data.number}
              onChange={handleInputChange}
            />{' '}
            <br />
            <label htmlFor="description">설명</label> <br />
            <input
              placeholder="내용을 입력하세요"
              className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />{' '}
            <br />
            <label htmlFor="deadline">기한</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={data.deadline}
              onChange={handleInputChange}
            />
            <button
              className="w-40 m-2 p-1 text-white bg-blue-600 inline-block overflow-hidden rounded"
              onClick={handleSubmit}
            >
              제출
            </button>
            {/* <button
              className="w-20 p-1 w-10 text-white bg-blue-600 inline-block overflow-hidden rounded"
              onClick={handleCloseModal}
            >
              닫기
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Challenge;
