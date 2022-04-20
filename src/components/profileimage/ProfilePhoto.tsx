import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ProfilePhoto = ({ getData, imageSrc }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggleClick = () => {
    setToggle(true)
    getData(true, imageSrc)
  }

  const deletePic = () => {
    setToggle(false)
    getData(false, '')
  }

  return (
    <div className="container">
      <button
        type="button"
        onClick={handleToggleClick}
        // className="btn btn-primary rounded-circle mt-2 opaque profile-pic"
        style={{
          backgroundColor: 'blue',
          width: ' 100px',
          height: '100px',
          padding: 0,
          border: 'none',
          borderRadius: '50%',
        }}
        disabled={toggle && imageSrc}
      >
        {(!toggle || !imageSrc) && (
          <FontAwesomeIcon icon={faUserAlt} color="white" size="3x" />
        )}
        {toggle && imageSrc && (
          <img
            alt="profile"
            src={imageSrc}
            className="rounded-circle"
            width="100%"
          />
        )}
      </button>
      {toggle && imageSrc && (
        <button
          type="button"
          //   className="btn btn-danger rounded-circle position-relative delete-button"
          style={{
            left: '-35px',
            top: '40px',
            padding: '0 7px',
            backgroundColor: 'red',
            borderRadius: '50%',
          }}
          onClick={deletePic}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            color="white"
            size="xs"
            style={{
              marginBottom: '0.1rem',
            }}
          />
        </button>
      )}
    </div>
  )
}

export default ProfilePhoto
