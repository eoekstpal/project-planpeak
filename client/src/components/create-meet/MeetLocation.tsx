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
      <div className="mb-4">
        <h3 className="text-xl font-bold">지역</h3>
      </div>{' '}
      <br />
      <div>
        <label className="text-sm">활동 영역:</label> <br />
        <div className="flex mt-3">
          <div className="flex">
            <input
              className="mr-1"
              onChange={() => setMethod('온라인')}
              checked={method === '온라인'}
              type="radio"
              name="on-off"
            />
            <label className="ml-1 mr-4" htmlFor="">
              온라인
            </label>
          </div>
          <div className="flex">
            {' '}
            <input
              className="mr-1"
              onChange={() => setMethod('오프라인')}
              checked={method === '오프라인'}
              type="radio"
              name="on-off"
            />
             <label htmlFor="">오프라인</label>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {method === '온라인' && (
          <div>
            <label>온라인 링크:</label>
            <input
              type="text"
              className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
            />
          </div>
        )}{' '}
      </div>
      <div className="mt-3">
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
    </div>
  );
}

export default MeetLocation;
