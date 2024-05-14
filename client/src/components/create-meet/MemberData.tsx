import { useState } from 'react';
import Chip from './Chip';
import Textarea from './Textarea';
interface MemberDataProps {
  onDataChange: (data: MemberDataFormData) => void;
}

export interface MemberDataFormData {
  selectedOption: string | null;
  selectedChips: string[];
  selectedNumberOption: string | null;
  selectedNumber: number | null;
  memberTextData: string | null;
}

function MemberData({ onDataChange }: MemberDataProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [selectedNumberOption, setSelectedNumberOption] = useState<string | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [memberTextData, setMemberTextData] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setSelectedChips([]);
    setSelectedNumber(null);
    onDataChange({
      selectedOption: option,
      selectedChips: [],
      selectedNumber: null,
      memberTextData,
      selectedNumberOption,
    });
  };

  const handleNumberOptionChange = (option: string) => {
    setSelectedNumberOption(option);
    onDataChange({
      selectedOption,
      selectedChips,
      selectedNumber: null,
      memberTextData,
      selectedNumberOption,
    });
  };

  const handleNumberInputChange = (value: number) => {
    setSelectedNumber(value);
    onDataChange({
      selectedOption,
      selectedChips,
      selectedNumber: value,
      memberTextData,
      selectedNumberOption,
    });
  };

  const handleChipSelect = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedChips((prevSelectedChips) => [...prevSelectedChips, id]);
    } else {
      setSelectedChips((prevSelectedChips) => prevSelectedChips.filter((chipId) => chipId !== id));
    }
    onDataChange({
      selectedOption,
      selectedChips,
      selectedNumber,
      memberTextData,
      selectedNumberOption,
    });
  };

  const handleTextDataChange = (text: string) => {
    setMemberTextData(text);
    onDataChange({
      selectedOption,
      selectedChips,
      selectedNumber,
      memberTextData: text,
      selectedNumberOption,
    });
  };

  return (
    <div>
      <div className="">
        {' '}
        <br /> <br />
        <h2>어떤 사람을 초대하고 싶어요?</h2> <br />
        <div className="flex">
          {' '}
          <div>
            {' '}
            <input
              className="inline mr-1"
              type="radio"
              id="unlimited"
              name="memberOption"
              value="unlimited"
              checked={selectedOption === 'unlimited'}
              onChange={() => handleOptionChange('unlimited')}
            />
            <label className="mr-4" htmlFor="unlimited">
              제한없음
            </label>
          </div>{' '}
          <div>
            <input
              className="inline mr-1"
              type="radio"
              id="age"
              name="memberOption"
              value="age"
              checked={selectedOption === 'age'}
              onChange={() => handleOptionChange('age')}
            />
            <label htmlFor="age">연령대 설정</label>
          </div>{' '}
        </div>
      </div>
      {selectedOption === 'age' && (
        <div className="flex">
          <Chip name={'10대'} id={'10s'} onSelect={handleChipSelect} />
          <Chip name={'20대'} id={'20s'} onSelect={handleChipSelect} />
          <Chip name={'30대'} id={'30s'} onSelect={handleChipSelect} />
          <Chip name={'40대'} id={'40s'} onSelect={handleChipSelect} />
          <Chip name={'50대'} id={'50s'} onSelect={handleChipSelect} />
          <Chip name={'60대'} id={'60s'} onSelect={handleChipSelect} />
          <Chip name={'70대'} id={'70s'} onSelect={handleChipSelect} />
          <Chip name={'80대'} id={'80s'} onSelect={handleChipSelect} />
        </div>
      )}
      {/* <div>
        <p>선택된 칩:</p>
        <ul>
          {selectedChips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div> */}{' '}
      <br />
      <div className="flex">
        <input
          className="mr-1 text-blue-500 border-blue-500 focus:ring-blue-500"
          type="radio"
          id="unlimited"
          name="memberNumberOption"
          value="unlimited"
          checked={selectedNumberOption === 'unlimited'}
          onChange={() => handleNumberOptionChange('unlimited')}
        />
        <label className="mr-4" htmlFor="unlimited">
          제한없음
        </label>
        <input
          className="mr-1"
          type="radio"
          id="number"
          name="memberNumberOption"
          value="number"
          checked={selectedNumberOption === 'number'}
          onChange={() => handleNumberOptionChange('number')}
        />
        <label htmlFor="number">인원 설정</label>{' '}
      </div>
      <div>
        {selectedNumberOption === 'number' && (
          <div>
            {' '}
            <br />
            <input
              className="w-10 inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
              type="number"
              onChange={(e) => handleNumberInputChange(Number(e.target.value))}
            />
            <label htmlFor="">명</label>
          </div>
        )}{' '}
        <br />{' '}
      </div>
      <Textarea
        title="어떤 분이 들어오셨으면 좋겠는지 적어주세요"
        onTextChange={handleTextDataChange}
      />
    </div>
  );
}

export default MemberData;
