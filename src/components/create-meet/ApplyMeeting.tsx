import Textarea from "../common/forms/Textarea";

interface ApplyMeetingProps {}

function ApplyMeeting (_props: ApplyMeetingProps) {

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxes = document.getElementsByName('confirm') as NodeListOf<HTMLInputElement>;

    checkboxes.forEach((checkbox) => {
        checkbox.checked = event.target.checked;
    })
  }  

  return (
    <div>
      <div>
        <fieldset className='p-10 flex felx-col mt-10 ml-10 border border-solid border-ppBlack'>
          <legend className='text-2xl ml-5'>모임 신청정보</legend>
            <div className='flex border border-ppBlack'>
                <div className='w-66 h-26 bg-ppVeryLightGray'></div>
                <div className='text-3xl text-bold ml-5'>
                    <span className='text-ppBlack'>{/* 모임 이름 */}</span>
                    <p className='text-ppBlack'>모임 일정: {/* 날짜 */}</p>
                    <p className='text-ppBlack'>장소: {/* 장소 */}</p>
                    <p className='text-ppBlack'>인원: {/* 인원 */}</p>
                    <p className='text-ppBlack'>참여비: {/* 참여비 */}</p>
                </div>
            </div>
        </fieldset>
      </div>
      <div>
        <div className='flex mt-10 ml-11'>
          <h3 className='text-2xl'>신청자 정보 입력</h3>
          <p className='text-ppLightGray mt-2 ml-3'>*회원 정보와 연동됩니다.</p>
        </div>
        <div className='mt-10 ml-11'>
            <p>이름: {/* name */}</p>
            <p>이메일: {/* e-mail */}</p>
            <p>소속: {/* add */}</p>
            <p>전화번호: {/* phon-number */}</p>
            <p>거주지: {/* place */}</p>
        </div>
      </div>  
      <div className='mt-10 ml-11'>
        <div className='flex'>
          <h3 className='text-2xl'>모임 신청 질문</h3>
          <p className='text-ppLightGray mt-2 ml-3'>*아래의 항목을 작성해주세요. 모임 참여에 많은 참고가 됩니다.</p>
        </div>
        <div className='flex flex-col mt-5'>
          <span>1. 모임을 신청하게 된 동기가 어떻게 되사나요?</span>
          <Textarea />
        </div>
        <div className='flex flex-col mt-5'>
          <span>2. 모임 참여시 가장 기대되는 것은 무엇인가요?</span>
          <Textarea />
        </div>
      </div> 
      <fieldset className='ml-10 mt-5 mb-10 border border-solid border-ppBlack'>
        <legend className='ml-10 mt-5 text-2xl'>개인정보 동의</legend>
            <div className='p-3 flex ml-10'>
                <input type="checkbox" name="confirm" value="selectAll" onChange={selectAll} />  
                <label className='text-ppLightGray ml-3'>전체동의</label>
            </div>
            <div className='p-3 flex ml-10'>
                <input type="checkbox" name="confirm" value="info" />  
                <label><h2 className='ml-3 mt-2'>(필수)개인정보 제3자 제공 동의</h2> <span className='text-ppLightGray ml-3 mt-4'>신청자의 개인정보가 신청여부 확인 등 이벤트 진행을 위해 개설자에게 제공됩니다.</span></label> 
            </div>
            <div className='p-3 flex ml-10'>
                <input type="checkbox" name="confirm" value="cancle" />  
                <label><h2 className='ml-3 mt-2'>(필수)모임 취소/환불약관 동의</h2> <span className='text-ppLightGray ml-3 mt-4'>신청자의 마담 전까지 환불신청 가능(결제수단, 사유, 환불 시점에 따라 수수료 차감.)</span></label>
            </div>
      </fieldset>  
    </div>
  )    
}

export default ApplyMeeting;