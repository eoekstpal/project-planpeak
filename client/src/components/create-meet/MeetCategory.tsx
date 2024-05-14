import { useState } from 'react';

interface Chip {
  id: number;
  label: string;
}

interface MeetCategoryChipsProps {
  onSelectedChipsChange: (chips: Chip[]) => void;
}

function MeetCategoryChips({ onSelectedChipsChange }: MeetCategoryChipsProps) {
  const [selectedChips, setSelectedChips] = useState<Chip[]>([]);

  const chips: Chip[] = [
    { id: 1, label: '운동' },
    { id: 2, label: '자기 계발' },
    { id: 3, label: '아웃도어/여행' },
    { id: 4, label: '독서/인문학' },
    { id: 5, label: '음악/악기' },
    { id: 6, label: '문화/예술' },
    { id: 7, label: '스터디' },
    { id: 8, label: '클래스/강의' },
    { id: 9, label: 'N잡' },
  ];

  const handleChipToggle = (id: number) => {
    const chipIndex = selectedChips.findIndex((chip) => chip.id === id);
    if (chipIndex === -1) {
      const chipToAdd = chips.find((chip) => chip.id === id);
      if (chipToAdd) {
        setSelectedChips([...selectedChips, chipToAdd]);
        console.log(selectedChips);
        onSelectedChipsChange([...selectedChips, chipToAdd]);
      }
    } else {
      const updatedChips = [...selectedChips];
      updatedChips.splice(chipIndex, 1);
      setSelectedChips(updatedChips);
      onSelectedChipsChange(updatedChips); // 여기로 이동
    }
  };
  return (
    <div>
      <br /> <br />
      <p>모임 카테고리</p> <br />
      {chips.map((chip) => (
        <div
          key={chip.id}
          style={{
            display: 'inline-block',
            borderRadius: 20,
            padding: '8px',
            margin: '3px',

            backgroundColor: selectedChips.some((c) => c.id === chip.id) ? 'blue' : '#f0f0f0',
            cursor: 'pointer',
            color: 'gray',
          }}
          onClick={() => handleChipToggle(chip.id)}
        >
          {chip.label}
        </div>
      ))}
    </div>
  );
}

export default MeetCategoryChips;
