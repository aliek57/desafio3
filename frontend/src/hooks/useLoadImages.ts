import { useEffect, useState } from 'react'
import { uploadFile } from '../services/imageRef'; 

const useLoadImages = () => {
    const [imgURL, setImgURL] = useState<Record<string, string>>({});

    useEffect(() => {
        const fetchImage = async () => {
            const urls = await uploadFile();
            setImgURL(urls);
        }

        fetchImage();
    }, []);
    
  return imgURL;
}

export default useLoadImages
