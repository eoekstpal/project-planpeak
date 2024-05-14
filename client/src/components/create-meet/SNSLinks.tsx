import { useState } from 'react';

export interface SNSLinksData {
  instagram: string;
  youtube: string;
  other: string;
}

interface SNSLinksProps {
  onSNSLinksChange: (links: SNSLinksData) => void;
}

function SNSLinks({ onSNSLinksChange }: SNSLinksProps) {
  const [instagramLink, setInstagramLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [otherLink, setOtherLink] = useState('');

  const handleInputChange = (linkType: keyof SNSLinksData, value: string) => {
    switch (linkType) {
      case 'instagram':
        setInstagramLink(value);
        break;
      case 'youtube':
        setYoutubeLink(value);
        break;
      case 'other':
        setOtherLink(value);
        break;
      default:
        break;
    }

    const snsLinks: SNSLinksData = {
      instagram: linkType === 'instagram' ? value : instagramLink,
      youtube: linkType === 'youtube' ? value : youtubeLink,
      other: linkType === 'other' ? value : otherLink,
    };
    onSNSLinksChange(snsLinks);
  };

  const renderInputField = (label: string, placeholder: string, linkType: keyof SNSLinksData) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <span style={{ marginRight: '5px' }}>{label}</span>
      <input
        className="inline-block border border-solid border-ppVeryLightGray rounded overflow-hidden"
        type="text"
        placeholder={placeholder}
        value={
          linkType === 'instagram'
            ? instagramLink
            : linkType === 'youtube'
              ? youtubeLink
              : otherLink
        }
        onChange={(e) => handleInputChange(linkType, e.target.value)}
      />
    </div>
  );

  return (
    <div>
      {' '}
      <br /> <br /> <p>외부 링크</p> <br />
      {renderInputField('Instagram', 'Instagram link', 'instagram')}
      {renderInputField('Youtube', 'Youtube link', 'youtube')}
      {renderInputField('URL', 'Other link', 'other')}
    </div>
  );
}

export default SNSLinks;
