import { useEffect, useState } from 'react';
import axios from 'axios';
function MeetDetail() {
  const [formData, setFormData] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3306/meet');
        console.log(response.data[0].formData);
        const parsedData = JSON.parse(response.data[0].formData);
        setFormData(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  //   useEffect(() => {
  //     const fetchFile = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:3306/file/26');

  //         console.log(response.data);
  //         setFileUrl(response.data);
  //       } catch (error) {
  //         console.error('Error fetching file:', error);
  //       }
  //     };

  //     fetchFile();
  //   }, []);

  return (
    <div>
      {formData && (
        <div>
          {Object.keys(formData).map((key) => (
            <p key={key}>
              {key}: {formData[key]}
            </p>
          ))}{' '}
          {fileUrl && <img src={fileUrl} alt="Fetched Image" />}
        </div>
      )}
    </div>
  );
}

export default MeetDetail;
