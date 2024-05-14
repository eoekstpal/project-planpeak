import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  width?: number;
  height?: number;
  rounded?: number;
  info: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  width = 200,
  height = 200,
  rounded = 0,
  info,
}) => {
  const roundedStyle = {
    borderRadius: `${rounded}px`,
  };

  return (
    <div
      className="overflow-hidden bg-[#d9d9d9] shadow-lg"
      style={{ width: `${width}px`, height: `${height}px`, ...roundedStyle }}
    >
      {imageUrl && <img src={imageUrl} alt="Card" className="w-full" />}
      <div className="p-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p
          className="overflow-hidden text-base text-gray-700"
          style={{
            maxHeight: '2.5em',
            lineHeight: '1.25em',
            textOverflow: 'ellipsis',
          }}
        >
          {content}
        </p>
        <p
          className="overflow-hidden text-base text-gray-700"
          style={{
            maxHeight: '1.25em',
            lineHeight: '1.25em',
            textOverflow: 'ellipsis',
          }}
        >
          {info}
        </p>
      </div>
    </div>
  );
};

export default Card;
