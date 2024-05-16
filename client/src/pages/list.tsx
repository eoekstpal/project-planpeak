
import CardImage from '../components/Common/Card'
import Input from '../components/forms/Input';

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

function renderItems(items: Event[])  {
    return items.map((item) => (
        <li key={item.name} className="col text-left items-center">
          <CardImage src={item.imageSrc} alt={item.altText || item.name} />
          <span className='text-sm text-bold'>{item.name}</span> <br />
          <span className='text-sm'>{item.description}</span> <br />
          <span className='text-sm'>{item.date}</span>
        </li> 
    ));
};


function List () {
    return (
      <div>
        <div className='mt-10 flex items-start ml-60'>
            <span className="text-ppGray mr-6 font-['Pretendard'] ">
                모든 모임 둘러보기
            </span>
            <Input />
            <div>

            </div>
        </div>
        <div>
            <div>
                태그검색
            </div>
            <div></div>
        </div>
      </div>      
    )
}



export default List;

