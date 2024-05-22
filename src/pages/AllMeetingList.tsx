// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardImage from '../components/common/Card';
import Search from '../components/common/forms/Search';
import BtnLarge from '../components/common/buttons/BtnLarge';

interface Event {
  imageSrc: string;
  name: string;
  date: string;
  description: string;
}

const events: Event[] = [
  {
    name: '커피 원데이 클래스',
    description: '커피를 좋아하는 사람들의 모임',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '드로잉 모임',
    description: '그림을 그려봐요',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '영화 평론 모임',
    description: '영화관람 좋아 하시죠?',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '문문문',
    description: '달과 별을 보러 갈까요?',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '영화연구',
    description: '영화관람 좋아하세요?',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '밴드 모임',
    description: '같이 악기연주 해봐요',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '영화 평론 모임',
    description: '영화관람 좋아 하시죠?',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
  {
    name: '문문문',
    description: '달과 별을 보러 갈까요?',
    date: '을지로, 2024. 4. 29',
    imageSrc: 'path_to_image',
  },
];

const tags = [
  '#자기계발',
  '#운동',
  '#아웃도어/여행',
  '#독서/인문학',
  '#음악/악기',
  '#문화/예술',
  '#스터디',
  '#클래스/강의',
  '#N잡',
  '#기타',
];

function renderItems(items: Event[]) {
  return items.map((item) => (
    <li key={item.name} className="col text-left items-center">
      <CardImage  title={'title'} content={'description'} info="info" />
      <span className="text-sm text-bold">{item.name}</span> <br />
      <span className="text-sm">{item.description}</span> <br />
      <span className="text-sm">{item.date}</span>
    </li>
  ));
}

function AllMeetingList() {

  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedTag, setSelectedTag] = useState<string>('');

  useEffect(() => {
    if (selectedTag) {
      // 태그에 맞는 이벤트 필터링
      const filtered = events.filter(event => event.description.includes(selectedTag));
      setFilteredEvents(filtered);
    } else {
      // 태그가 선택되지 않았을 때는 모든 이벤트 표시
      setFilteredEvents(events);
    }
  }, [selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="flex content">
      {/* <nav className="SideNavCount">
        <ul className="py-7 px-4">
          <li className="text-ppBlack text-xl font-bold py-5">모임 참가하기</li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>내가 참여중인 모임</Link>
          </li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>내가 찜한 모임</Link>
          </li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>모든 모임 둘러보기</Link>
          </li>
        </ul>
      </nav> */}
      <div className="container p-8">
        <div className="flex py-6 px-4 space-between">
          <h2>모든 모임 둘러보기</h2>
          <Search />
        </div>
        <div className="flex text-bold text-2xl px-4">
          <h2>태그 검색</h2>
          <ul className="grid grid-cols-5 gap-5 ml-40">
          {tags.map((tag) => (
              <BtnLarge 
                key={tag}
                textColor={'text-ppLightGray'} 
                bgColor={'bg-[#d9d9d9]'} 
                text={'#자기계발'} 
                onClick={() => handleTagClick(tag)}
              />
          ))}
          </ul>
        </div>
        <div>
          <ul className="mt-10 grid grid-cols-4 gap-4 [&_span]:text-ppGray">
            {renderItems(events)}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AllMeetingList;
