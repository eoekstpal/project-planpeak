import { useState } from 'react';
import UploadImage from '../components/create-meet/UploadImage';
import MeetCategoryChips from '../components/create-meet/MeetCategory';
import OnelineInput from '../components/create-meet/OnelineInput';
import Editor from '../components/create-meet/Editor';
import Progress, { Item } from '../components/create-meet/Progress';
import SNSLinks, { SNSLinksData } from '../components/create-meet/SNSLinks';
import MeetDate from '../components/create-meet/MeetDate';
import MeetLocation from '../components/create-meet/MeetLocation';
import MemberData, { MemberDataFormData } from '../components/create-meet/MemberData';
import PickMethod from '../components/create-meet/PickMethod';
import Challenge, { ChallengeProps } from '../components/create-meet/Challenge';
import Fee from '../components/create-meet/Fee';
import axios from 'axios';
import BtnLarge from '../components/buttons/BtnLarge';

interface FormData {
  //   imageName: string;
  imageFile: File | null;
  categoryIds: number[];
  meetingName: string;
  meetingDescription: string;
  editorContent: string;
  snsLinks: SNSLinksData;
  applyMotivation: string[];
  progressItems: Item[];
  memberData: MemberDataFormData | null;

  schedule: {
    type: string;
    date: string;
    time: string;
  };
  address: string;
  challenge: ChallengeProps;

  bank: {
    hasFee: boolean;
    feeAmount: string;
    selectedBank: string;
    accountNumber: string;
    refundPolicy: string;
  };
}

function CreateMeet() {
  const [formData, setFormData] = useState<FormData>({
    // imageName: '',
    imageFile: null,
    categoryIds: [],
    meetingName: '',
    meetingDescription: '',
    editorContent: '',
    snsLinks: {
      instagram: '',
      youtube: '',
      other: '',
    },
    applyMotivation: [],
    progressItems: [
      { title: '', description: '', runningTime: '' },
      { title: '', description: '', runningTime: '' },
    ],
    memberData: {
      memberTextData: '',
      selectedChips: [],
      selectedNumber: 0,
      selectedNumberOption: '',
      selectedOption: '',
    },
    schedule: {
      type: '',
      date: '',
      time: '',
    },
    address: '',
    challenge: {
      onChange: () => {},
    },

    bank: {
      hasFee: false,
      feeAmount: '',
      selectedBank: '',
      accountNumber: '',
      refundPolicy: '',
    },
  });

  const handleImageUpload = (imageFile: File) => {
    setFormData((prevData) => ({
      ...prevData,
      //   imageName: imageFile.name,
      imageFile: imageFile,
    }));
  };
  const handleNameInputChange = (name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      meetingName: name,
    }));
  };
  const handleDescriptionInputChange = (description: string) => {
    setFormData((prevData) => ({
      ...prevData,
      meetingDescription: description,
    }));
  };
  const handleEditorContentChange = (content: string) => {
    setFormData((prevData) => ({
      ...prevData,
      editorContent: content,
    }));
  };
  const handleProgressItemChange = (index: number, newItem: Item) => {
    setFormData((prevData) => {
      const newProgressItems = [...prevData.progressItems];
      newProgressItems[index] = newItem;
      return {
        ...prevData,
        progressItems: newProgressItems,
      };
    });
  };
  const handleSNSLinksChange = (snsLinks: SNSLinksData) => {
    setFormData((prevData) => ({
      ...prevData,
      snsLinks: snsLinks,
    }));
  };
  const handleDate = (schedule: { type: string; time: string; date: string }) => {
    console.log(schedule);
    setFormData((prevData) => ({
      ...prevData,
      schedule: schedule,
    }));
  };
  const handleAddress = (data: string) => {
    setFormData((prevData) => ({
      ...prevData,
      address: data,
    }));
  };
  const handleMemberData = (data: MemberDataFormData) => {
    console.log(data);
    setFormData((prevData) => ({
      ...prevData,
      memberData: data,
    }));
  };
  const handleQuestionChange = (questions: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      applyMotivation: questions,
    }));
  };
  const handleChallenge = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      challenge: data,
    }));
  };
  const handleBank = (bankData: any) => {
    setFormData((prev) => ({
      ...prev,
      bank: bankData,
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/submit', {
        formData: JSON.stringify(formData),
      });
      console.log(formData);
      console.log('서버 응답:', response.data);
      alert('데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      alert('데이터 전송 중 오류가 발생했습니다.');
    }
  };
  const handleCategory = (chips: any) => {
    setFormData((prevData) => ({
      ...prevData,
      categoryIds: chips.map((chip: any) => chip.label),
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">모임생성하기</h1> <br />
      <UploadImage onImageUpload={handleImageUpload} />
      <MeetCategoryChips onSelectedChipsChange={handleCategory} />
      <OnelineInput title={'모임 이름'} onInputChange={handleNameInputChange} />
      <OnelineInput title={'한줄 소개'} onInputChange={handleDescriptionInputChange} />
      <Editor onContentChange={handleEditorContentChange} />{' '}
      <OnelineInput title={'제공 사항'} onInputChange={handleDescriptionInputChange} />
      <OnelineInput title={'준비물'} onInputChange={handleDescriptionInputChange} />
      <Progress items={formData.progressItems} onItemChange={handleProgressItemChange} />{' '}
      <SNSLinks onSNSLinksChange={handleSNSLinksChange} />
      <MeetDate
        onScheduleChange={(schedule) => handleDate(schedule)}
        schedule={{
          type: '',
          date: '',
          time: '',
        }}
      />{' '}
      <MeetLocation onChange={handleAddress} />
      <MemberData onDataChange={(data) => handleMemberData(data)} />
      <PickMethod onQuestionChange={handleQuestionChange} />
      <Challenge onChange={handleChallenge} />
      <Fee onChange={handleBank} />
      {/* <button className="" onClick={handleSubmit}>
        submit
      </button> */}{' '}
      <br /> <br />
      <BtnLarge text="모임 생성" bgColor="bg-blue-500" onClick={handleSubmit} />
    </div>
  );
}

export default CreateMeet;
