import { background } from '@chakra-ui/react'
import React, { useState } from 'react'
import Avatar from 'react-avatar-edit'

const CreateAvatar = ({ getData }) => {
  const [preview, setPreview] = useState('')

  const onCrop = (defaultPreview) => {
    setPreview(defaultPreview)
  }

  const onClose = () => {
    setPreview('')
  }

  const onBeforeFileLoad = () => {}

  const onSelectPic = () => {
    getData(false, preview)
  }

  const onCancelSelect = () => {
    getData(false, '')
  }

  return (
    <>
      <div className="container">
        <div className="row mx-auto my-3">
          <div className="col-md-6 m-auto">
            <div
              className="mx-auto my-4 choose-file"
              // style={{ overflow: "scroll" }}
              style={{
                width: '250px',
                margin: '40px auto',
              }}
            >
              <Avatar
                imageWidth={270}
                width={'100%'}
                height={180}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
              />
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <div
              className="previewDiv rounded-circle m-auto"
              style={{
                border: '1px solid grey',
                width: '150px',
                height: '150px',
                margin: 'auto',
                borderRadius: '50%',
                marginTop: '50px',
                marginBottom: '30px',
              }}
            >
              {preview && (
                <img
                  alt="preview"
                  src={preview}
                  width="100%"
                  height="100%"
                  className="rounded-circle"
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button
              type="button"
              style={{
                minWidth: '100px',
                background: 'grey',
                float: 'left',
                marginLeft: '4px',
                marginBottom: '20px !important',
                textAlign: 'center',
                color: '#ffffff',
              }}
              onClick={onCancelSelect}
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              onClick={onSelectPic}
              disabled={!preview}
              style={{
                minWidth: '100px',
                background: '#FF9916',
                float: 'right',
                marginRight: '4px',
                marginBottom: '',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAvatar
