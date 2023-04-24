import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { AccountHeader } from "../../components/AccountHeader";
import { Avatar } from "../../components/Avatar";
import { AuthContext } from "../../contexts/AuthContext";
import { ColorPalette, ContentAccountContainer, PreviewContainer, SettingsContainer } from "./styles";
import Switch from 'react-switch'
import { Trash } from "phosphor-react";
import { ILinks, IUser } from "../../types/user";
import { createLink, deleteLink, updateLinkByID, updateUser, updateUsernameById } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatFieldName, isValidUrl } from "../../utils";
import { Loading } from "../../components/Loading";
import { ButtonDefault } from "../../components/ButtonDefault";
import { ColorPicker } from "../../components/ColorPicker";

interface IContentAccount {
  host: string
}

export function ContentAccount({ host }: IContentAccount) {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [addLinkLoading, setAddLinkLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  async function handleAddNewLink() {
    const update = {...user} as IUser;
    setAddLinkLoading(true);
    
    const { linkId } = await createLink({
      user_id: update._id,
      title: "",
      url: ""
    });
    
    const newLink:ILinks = {
      _id: linkId,
      is_active: true,
      title: "",
      url: ""
    }
    
    update.links = [...update.links, newLink];
    
    setUser(update);
    setAddLinkLoading(false);
  }

  async function handleHideLink(index: number) {
    const update = {...user} as IUser;
    update.links[index].is_active = !update.links[index].is_active;
    setUser(update);

    const linkInfo = {
      link_id: update.links[index]._id,
      field: 'is_active',
      value: update.links[index].is_active
    }

    await updateLinkByID(linkInfo);
  }

  async function handleDeleteLink(index: number) {
    const update = {...user} as IUser;
    await deleteLink(update.links[index]._id);
    delete update.links[index];
    setUser(update);
  }

  function updateLinkTitle(e: ChangeEvent<HTMLInputElement>, index:number) {
    const update = {...user} as IUser;

    update.links[index].title = e.target.value;

    setUser(update);
  }

  function updateLinkUrl(e: ChangeEvent<HTMLInputElement>, index:number) {
    const update = {...user} as IUser;

    update.links[index].url = e.target.value;

    setUser(update);
  }

  async function updateLinkOnBlur(index:number, field:string) {
    const update = {...user} as IUser;

    const title = update.links[index].title;
    const url = update.links[index].url;
    const linkID = update.links[index]._id

    const linkInfo = {
      link_id: linkID,
      field,
      value: field === 'title' ? title : url
    }

    const urlValid = isValidUrl(url);

    if (!urlValid && field === 'url') {
      return toast.error("invalid url");
    }

    await updateLinkByID(linkInfo);

    toast.success(`${formatFieldName(field)} updated successfully`);
  }

  function onChangeUpdateUsername(e: ChangeEvent<HTMLInputElement>) {
    const update = {...user} as IUser;

    update.username = e.target.value.replace("@", "");

    setUser(update);
  }

  async function onClickUpdateUsername() {
    const response = await updateUsernameById({
      user_id: user?._id,
      value: user?.username
    })

    if (response.message === "username already exists") {
      return toast.error("Username already exists");      
    }
    
    toast.success("Username updated successfully");
  }

  useEffect(() => {
    if (usernameRef) {
      usernameRef.current!.value = `${user?.username}`
    }
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  interface IFormatFieldName {
    [key: string]: string
  }

  async function updateStyle(field: string, color: any) {
    const update = {...user} as IUser;

    setCounter(prev => prev + 1);
    
    if (update.bg_color !== undefined && counter >= 4) {
      update[field as keyof IUser] = color;
      
      try {
        await updateUser({
          field,
          user_id: `${update._id}`,
          value: color
        })
        
        // toast.success(`${formatFieldName(field)} updated successfully`);
      } catch (error) {
        toast.error(`${error}, try again!`);      
      }
      
      setUser(update);
    };    
  }

  return (
    <ContentAccountContainer>
      <ToastContainer position="top-right" />
      <AccountHeader user={user} />
      <SettingsContainer>
        <Loading isLoading={isLoading} />
        <div className="settings-wrapper">
          <div className="header-content">
            <div className="avatar">
              <Avatar
                width={160}
                height={160}
                hasEditButton
                user_id={user?._id}
              />
            </div>
            <div className="username-field">
              <input
                ref={usernameRef}
                type="text"
                style={{fontSize: 18, fontWeight: 'bold' }}
                onChange={(e) => onChangeUpdateUsername(e)}
              />
              <button 
                className="update-username"
                onClick={onClickUpdateUsername}
              >
                update username
              </button>
            </div>
          </div>
          <ColorPalette>
            <h4>Color Palette</h4>
            <main>
              <ColorPicker
                title="background"
                handleChangeColor={(color) => updateStyle('bg_color', color)}
                defaultColor={user?.bg_color}
              />
              <ColorPicker
                title="text color"
                handleChangeColor={(color) => updateStyle('text_color', color)}
                defaultColor={user?.text_color}
              />
              <ColorPicker
                title="border color"
                handleChangeColor={(color) => updateStyle('border_color', color)}
                defaultColor={user?.border_color}
              />
              <ColorPicker
                title="link background"
                handleChangeColor={(color) => updateStyle('bg_color_link', color)}
                defaultColor={user?.bg_color_link}
              />
            </main>
          </ColorPalette>
          <div className="links-container">
            <header>
              <ButtonDefault
                className="add-link"
                title="add new link"
                onClick={handleAddNewLink}
                isLoading={addLinkLoading}
              />
            </header>
            <main className="links-main">
              {user?.links?.map((link, index) => (
                <div className="link-wrapper" key={`link${index}`}>
                  <div className="link-input">
                    <input
                      type="text"
                      placeholder="Add title"
                      defaultValue={link?.title}
                      style={{fontWeight: "bold"}}
                      onChange={(e) => updateLinkTitle(e, index)}
                      onBlur={() => updateLinkOnBlur(index, 'title')}
                    />
                    <input
                      type="text"
                      placeholder="Add URL"
                      defaultValue={link?.url}
                      onChange={(e) => updateLinkUrl(e, index)}
                      onBlur={() => updateLinkOnBlur(index, 'url')}
                    />
                  </div>
                  <span>
                    <Switch
                      onChange={() => handleHideLink(index)}
                      checked={user?.links[index]?.is_active}
                      height={18}
                      width={32}
                      offColor="#9F9F9F"
                      onColor="#000000"
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                    <Trash
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteLink(index)}
                      size={24}
                    />
                  </span>
                </div>
              ))}
            </main>
          </div>
        </div>
      </SettingsContainer>
      <PreviewContainer
        bg_color={user?.bg_color}
        bg_color_link={user?.bg_color_link}
        text_color={user?.text_color}
        border_color={user?.border_color}
      >
        <div className="share">
          <a href={`/${user?.username}`} target="_blank" rel="noreferrer">
            <p>{host}/{user?.username}</p>
          </a>
        </div>
        <div className="preview">
          <Avatar width={80} height={80}/>
          <h4>{`@${user?.username}`}</h4>
          {user?.links?.map((link, index) => (
            <div
              className="preview-links"
              style={{display: `${link?.is_active ? 'flex' : 'none'}`}}
              key={`preview${index}`}
            >
              <p>{link?.title}</p>
            </div>
          ))}
        </div>
      </PreviewContainer>
    </ContentAccountContainer>
  )
}