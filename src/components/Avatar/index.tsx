import Image from 'next/image';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { updateUser } from '../../services';
import { AuthContext } from '../../contexts/AuthContext';
import { storage } from '../../config/firebase.config';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { AvatarContainer } from './styles';

import { IUser } from '../../types/user';

interface IAvatar {
  user_id?: string;
  hasEditButton?: boolean;
  width?: number;
  height?: number;
}

export function Avatar({
  user_id,
  hasEditButton = false,
  width = 40,
  height = 40
}: IAvatar) {
  const [file, setFile] = useState<any>();
  const [imageURL, setImageURL] = useState("");
  const inputFile = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const blankImg = '/images/blank-profile-picture.png'

  const { user, setUser } = useContext(AuthContext);

  const selectFile = () => {
    if (inputFile.current) {
      inputFile.current.click();      
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  function handleUploadClick() {
    if (file) {
      const storageRef = ref(storage, `avatar/${user?._id}_${file?.name}`);
      setIsLoading(true);
  
      uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            setImageURL(url);
          })
          .catch((error) => {
            console.log(error)
          })
      });      
    }
  }

  useEffect(() => {
    handleUploadClick()
  }, [file])

  useEffect(() => {
    async function updateAvata() {
      if (imageURL !== "") {
        await updateUser({
          user_id: `${user_id}`,
          field: 'avatar',
          value: imageURL
        }) 
      
        const updateUserInfo = {...user} as IUser
    
        updateUserInfo.avatar = imageURL
    
        setUser(updateUserInfo);
        setIsLoading(false);
      }  
    }

    updateAvata();
  },[imageURL])

  return (
    <AvatarContainer width={width} height={height}>
      <img
        src={`${user?.avatar ? user.avatar : blankImg}`}
        width={width} height={height}
        alt="avatar"
      />
      <input 
        type='file' 
        style={{display: 'none'}}
        onChange={handleFileChange}
        ref={inputFile}
      />
      {hasEditButton && <p className="edit" onClick={selectFile}>Edit</p>}
      {isLoading && <div className="isloading-container"><div className="isloading"></div></div>}
    </AvatarContainer>
  );
}