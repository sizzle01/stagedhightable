import React from 'react'
import Avatar from '../components/profileimage/Avatar'
import dynamic from 'next/dynamic'

const Avatar = dynamic(() => import('../components/profileimage/Avatar'), {
  ssr: false,
})

const displayPicture = () => {
  return (
    <div>
      <Avatar />
    </div>
  )
}

export default displayPicture
