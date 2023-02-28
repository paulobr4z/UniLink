import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { AccountHeader } from "../../components/AccountHeader";
import { Avatar } from "../../components/Avatar";
import { storage } from "../../config/firebase.config";
import { AuthContext } from "../../contexts/AuthContext";
import { getAccountByID } from "../../services";
import { ContentAccountContainer, PreviewContainer, SettingsContainer } from "./styles";

interface IContentAccount {
  userID: string
}

export function ContentAccount({ userID }: IContentAccount) {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState<any>();
  const [imgURL, setImgURL] = useState("");

  
  useEffect(() => {

    async function onGetUser() {
      const user = await getAccountByID(userID);
      console.log(user);     
    }

    onGetUser();
  }, [])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  async function handleUploadClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const storageRef = ref(storage, `avatar/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
    } catch (error) {
      console.log(error);      
    }
  }

  return (
    <ContentAccountContainer>
      <AccountHeader user={user} />
      <SettingsContainer>
        
      </SettingsContainer>
      <PreviewContainer>
        <div className="preview"></div>
      </PreviewContainer>
    </ContentAccountContainer>
  )
}