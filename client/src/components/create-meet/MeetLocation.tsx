import { useState } from 'react';
import DaumPost, { AddressProps } from './DaumPost';

function MeetLocation({ onChange }: AddressProps) {
  const [method, setMethod] = useState<string>('');
  const [outputAddress, setOutputAddress] = useState('');

  const handleAddress = (address: string) => {
    console.log(address);
    setOutputAddress(address);
    onChange(address);
  };
  return (
    <div>
      {' '}
      <br /> <br /> <br />
      <h2>중심 활동 지역이 있나요?</h2> <br />
      <div>
        <label className="text-sm">활동 영역:</label> <br />
        <div className="flex">
          <div>
            <input
              className="inline"
              onChange={() => setMethod('온라인')}
              checked={method === '온라인'}
              type="radio"
              name="on-off"
            />
            <label htmlFor="">온라인</label>
          </div>
          <div>
            {' '}
            <input
              className="inline"
              onChange={() => setMethod('오프라인')}
              checked={method === '오프라인'}
              type="radio"
              name="on-off"
            />
             <label htmlFor="">오프라인</label>
          </div>
        </div>
      </div>
      {method === '온라인' && (
        <div>
          <label>온라인 링크:</label>
          <input
            type="text"
            className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
          />
        </div>
      )}
      {method === '오프라인' && (
        <div>
          <label>주소:</label>
          <input
            className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
            type="text"
            value={outputAddress}
          />
          <DaumPost onChange={(address) => handleAddress(address)} />
        </div>
      )}
    </div>
  );
}

export default MeetLocation;
