import Checkbox from '../../components/common/forms/Checkbox';
import Selectbox from '../../components/common/forms/Selectbox';
import BtnSmall from '../../components/common/buttons/BtnSmall';
import Input from '../../components/common/forms/Input';
import PaginatedTable from '../../components/common/PaginatedTable';
import BtnMedium from '../../components/common/buttons/BtnMedium';
import AdminNav from '../../layouts/AdminNav';

function MeetingUserList() {
  const DepositStatus = [
    { value: '입금완료', name: '입금완료' },
    { value: '미입금', name: '미입금' },
  ];
  const StateOPTIONS = [
    { value: '신청완료', name: '신청완료' },
    { value: '참여중', name: '참여중' },
    { value: '노쇼/환불', name: '노쇼/환불' },
    { value: '마무리안내', name: '마무리안내' },
    { value: '기타', name: '기타' },
  ];
  const applicantHeaderList: string[] | any = [
    <Checkbox></Checkbox>,
    '이름',
    '연락처',
    '이메일',
    '거주지',
    '생년월일',
    '성별',
    '입금확인',
    '비고',
    '참여자 선정',
  ];

  const applicantTableList: any = [
    [
      <Checkbox></Checkbox>,
      '이지혜',
      '010-1234-1234',
      '경상북도',
      '2024/08/15',
      '여',
      <Selectbox options={DepositStatus} />,
      <Input name="meno" id="meno" placeholderText="비고" />,
      <BtnSmall bgColor={'bg-ppBlue'} text={'승인'}></BtnSmall>,
      <BtnSmall bgColor={'bg-ppLightGray'} text={'거절'}></BtnSmall>,
    ],
  ];
  const participantsHeaderList: string[] | any = [
    <Checkbox></Checkbox>,
    '이름',
    '연락처',
    '이메일',
    '거주지',
    '생년월일',
    '성별',
    '입금확인',
    '비고',
    '참여자 선정',
  ];

  const participantsTableList: any = [
    [
      <Checkbox></Checkbox>,
      '이지혜',
      '010-1234-1234',
      '경상북도',
      '2024/08/15',
      '여',
      <Selectbox options={DepositStatus} />,
      <Input name="meno" id="meno" placeholderText="비고" />,
      <BtnSmall bgColor={'bg-ppBlue'} text={'승인'}></BtnSmall>,
      <BtnSmall bgColor={'bg-ppLightGray'} text={'거절'}></BtnSmall>,
    ],
  ];

  return (
    <div className="SideNavCont">
      <AdminNav />
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
          <h3 className="mt-4 mb-5 text-lg font-bold">신청자 정보</h3>
          <PaginatedTable headers={applicantHeaderList} data={applicantTableList}></PaginatedTable>
        </div>
        <div className="px-2 py-6">
          <div className="flex justify-between">
            <h3 className="mt-4 mb-5 text-lg font-bold">참여자 정보</h3>
            <Selectbox options={StateOPTIONS} />
          </div>

          <PaginatedTable
            headers={participantsHeaderList}
            data={participantsTableList}
          ></PaginatedTable>
        </div>
        <div className="py-4 text-right">
          <BtnMedium bgColor={'bg-ppBlue mx-4'} text={'저장'} />
          <BtnMedium bgColor={'bg-ppGray'} text={'선택 인원 메일 발송'} />
        </div>
      </div>
    </div>
  );
}

export default MeetingUserList;
