import { useState } from 'react';
import DaumPost, { AddressProps } from './DaumPost';

function MeetLocation({ onChange }: AddressProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [outputAddress, setOutputAddress] = useState('');

  const handleAreaSelect = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((selected) => selected !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  const handleAddress = (address: string) => {
    console.log(address);
    setOutputAddress(address);
    onChange(address);
  };
  return (
    <div>
      {' '}
      <br /> <br />
      <h2>중심 활동 지역이 있나요?</h2> <br />
      <div>
        <label>활동 영역:</label>
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '8px',
              margin: '5px',
              backgroundColor: selectedAreas.includes('online') ? 'blue' : '#f0f0f0',
              cursor: 'pointer',
              color: 'gray',
              borderRadius: '10px',
            }}
            onClick={() => handleAreaSelect('online')}
          >
            온라인
          </div>
          <div
            style={{
              display: 'inline-block',
              padding: '8px',
              margin: '5px',
              backgroundColor: selectedAreas.includes('offline') ? 'blue' : '#f0f0f0',
              cursor: 'pointer',
              color: 'gray',
              borderRadius: '10px',
            }}
            onClick={() => handleAreaSelect('offline')}
          >
            오프라인
          </div>
        </div>
      </div>
      {selectedAreas.includes('online') && (
        <div>
          <label>온라인 링크:</label>
          <input
            type="text"
            className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
          />
        </div>
      )}
      {selectedAreas.includes('offline') && (
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
