import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AccountHeader } from "../../components/AccountHeader";
import { Avatar } from "../../components/Avatar";
import { AuthContext } from "../../contexts/AuthContext";
import { ContentAccountContainer, PreviewContainer, SettingsContainer } from "./styles";
import Switch from 'react-switch'
import { Trash } from "phosphor-react";
import { ILinks, IUser } from "../../types/user";
import { createLink, deleteLink, updateLinkByID, updateUsernameById } from "../../services";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidUrl } from "../../utils";

export function ContentAccount() {
  const { user, setUser } = useContext(AuthContext);

  async function handleAddNewLink() {
    const update = {...user} as IUser;

    const newLink:ILinks = {
      is_active: true,
      title: 'New link',
      url: ''
    }

    update.links = [...update.links, newLink];
    
    setUser(update);
    
    await createLink(newLink);
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

    if (!urlValid) {
      return toast.error(`invalid url`);
    }

    await updateLinkByID(linkInfo);

    toast.success(`${field} updated successfully`);
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

  return (
    <ContentAccountContainer>
      <ToastContainer position="top-right" />
      <AccountHeader user={user} />
      <SettingsContainer>
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
                type="text"
                defaultValue={`@${user?.username}`}
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
          <div className="links-container">
            <header>
              <button 
                className="add-link"
                onClick={handleAddNewLink}
              >
                add new link
              </button>
            </header>
            <main className="links-main">
              {user?.links?.map((link, index) => (
                <div className="link-wrapper" key={`link${index}`}>
                  <div className="link-input">
                    <input
                      type="text"
                      placeholder="Add title"
                      defaultValue={link.title}
                      style={{fontWeight: "bold"}}
                      onChange={(e) => updateLinkTitle(e, index)}
                      onBlur={() => updateLinkOnBlur(index, 'title')}
                    />
                    <input
                      type="text"
                      placeholder="Add URL"
                      defaultValue={link.url}
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
      <PreviewContainer>
        <div className="preview">
          <Avatar width={80} height={80}/>
          <h4>{`@${user?.username}`}</h4>
          {user?.links.map((link, index) => (
            <div
              className="preview-links"
              style={{display: `${link.is_active ? 'flex' : 'none'}`}}
              key={`preview${index}`}
            >
              <p>{link.title}</p>
            </div>
          ))}
        </div>
      </PreviewContainer>
    </ContentAccountContainer>
  )
}