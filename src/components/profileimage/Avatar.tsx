import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ProfilePhoto from './ProfilePhoto'
import CreateAvatar from './CreateAvatar'
import Portal from './Portal'

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState('')

  const getData = (isOpened, imageSrc) => {
    setIsOpen(isOpened)
    setImageSrc(imageSrc)
  }

  return (
    <React.Fragment>
      <ProfilePhoto getData={getData} imageSrc={imageSrc} />
      <div id="createAvatarDiv" />
      {isOpen && !imageSrc && (
        <Portal portalDiv="createAvatarDiv">
          <div
            className="createAvatarDiv_content m-auto"
            style={{
              width: '70%',
              border: '1px solid grey',
              borderRadius: '4px',
              margin: 'auto',
            }}
          >
            <CreateAvatar getData={getData} />
          </div>
        </Portal>
      )}
      <br />
    </React.Fragment>
  )
}
export default Avatar
