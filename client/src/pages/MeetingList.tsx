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
          <li className="text-ppBlack text-xl font-medium py-5">관리자 페이지</li>
          <li className="text-ppGray leading-10 hover:text-ppBlue">
            <Link to={'/'}>개설한 모임 목록</Link>
          </li>
        </ul>
      </nav>
      <div className="container p-8">
        <div className="flex px-2 py-4 justify-between">
          <h2 className="text-xl font-medium">개설한 모임 목록</h2>
          <span className={`inline-block overflow-hidden bg-ppBlue rounded`}>
            <Link to={'/'} className="block py-2 px-3 text-white">
              새로운 모임 만들기
            </Link>
          </span>
        </div>
        <ul className="my-5">
          <li className="flex px-2 py-4 border-t border-solid border-slate-300 justify-between">
            <Link to={'/MemberList'} className="flex">
              <span className="block w-14 h-14 mr-2 bg-slate-200">
                <img src="" alt="" />
              </span>
              <div className="px-1">
                <h3 className="mb-1 text-lg">모임 이름</h3>
                <p className="text-sm text-ppLightGray">모임 설명</p>
              </div>
            </Link>
            <ul className="flex">
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">신청자 수</h4>
                <span className="block text-sm text-ppLightGray">00명</span>
              </li>
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">일정확인</h4>
                <span className="block text-sm text-ppLightGray">00명</span>
              </li>
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">진행상태</h4>
                <span className="block text-sm text-ppLightGray">진행 중</span>
              </li>
            </ul>
          </li>
          <li className="flex px-2 py-4 border-t border-solid border-slate-300 justify-between">
            <Link to={'/MemberList'} className="flex">
              <span className="block w-14 h-14 mr-2 bg-slate-200">
                <img src="" alt="" />
              </span>
              <div className="px-1">
                <h3 className="mb-1 text-lg">모임 이름</h3>
                <p className="text-sm text-ppLightGray">모임 설명</p>
              </div>
            </Link>
            <ul className="flex">
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">신청자 수</h4>
                <span className="block text-sm text-ppLightGray">00명</span>
              </li>
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">일정확인</h4>
                <span className="block text-sm text-ppLightGray">00명</span>
              </li>
              <li className="px-4 text-center">
                <h4 className="mb-1 text-lg">진행상태</h4>
                <span className="block text-sm text-ppLightGray">진행 중</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MeetingList;
