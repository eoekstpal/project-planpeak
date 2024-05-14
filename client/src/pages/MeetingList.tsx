import { Link } from 'react-router-dom';
import PaginatedTable from '../components/Common/PaginatedTable';
import BtnMedium from '../components/Common/buttons/BtnMedium';
import Checkbox from '../components/Common/forms/Checkbox';
import Input from '../components/Common/forms/Input';
import Selectbox from '../components/Common/forms/Selectbox';

const StateOPTIONS = [
  { value: '신청완료', name: '신청완료' },
  { value: '참여중', name: '참여중' },
  { value: '노쇼/환불', name: '노쇼/환불' },
  { value: '마무리안내', name: '마무리안내' },
  { value: '기타', name: '기타' },
];
const MessageOPTIONS = [
  { value: '신청안내', name: '신청안내' },
  { value: '입금안내', name: '입금안내' },
  { value: '일정안내', name: '일정안내' },
  { value: '노쇼/환불안내', name: '노쇼/환불안내' },
  { value: '챌린지 안내', name: '챌린지 안내' },
  { value: '마무리 안내', name: '마무리 안내' },
];
const tableHeader: string[] | any = [
  <Checkbox></Checkbox>,
  '상태',
  '안내메세지',
  '발송일',
  '안내문구',
  '발송완료여부',
  '발송성공',
  '발송실패',
];

const tableCell: any = [
  [
    <Checkbox></Checkbox>,
    <Selectbox options={StateOPTIONS}></Selectbox>,
    <Selectbox options={MessageOPTIONS}></Selectbox>,
    <Input></Input>,
    <Input></Input>,
    '완료',
    '2000명',
    '3000명',
  ],
];

function MeetingList() {
  return (
    <div className="SideNavCont">
      <nav>
        <ul className="py-7 px-4">
          <li className="text-ppBlack text-xl font-bold py-5">관리자 페이지</li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>참가자 목록</Link>
          </li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>안내메세지 관리</Link>
          </li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>출결 및 과제 관리</Link>
          </li>
        </ul>
      </nav>
      <div className="container p-8">
        <div className="flex py-6 px-4">
          <span className="w-14 h-14 mx-2 my-3">
            <img src="" alt="" />
          </span>
          <div className="p-2">
            <h2 className="text-xl font-bold">모임 이름</h2>
            <p className="mt-1 text-s text-ppGray">모임 설명이 들어갑니다.</p>
          </div>
        </div>
        <div className="px-2 py-6">
          <h3 className="mt-4 mb-5 text-lg font-bold">일정별 자동 안내 예약 설정</h3>
          <PaginatedTable headers={tableHeader} data={tableCell}></PaginatedTable>
        </div>
        <div className="py-4 text-right">
          <BtnMedium bgColor={'bg-ppGray'} text={'예약 설정 저장'} />
        </div>
      </div>
    </div>
  );
}

export default MeetingList;
