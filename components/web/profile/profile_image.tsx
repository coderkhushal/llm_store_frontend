import Image from 'next/image'
import React from 'react'

const ProfileImage = ({image}: {image: string | null} ) => {
  return (
    <div className='w-full h-1/4 mb-10 rounded-t-3xl relative bg-gradient-to-r from-pink-500 to-yellow-500'>
        <Image
            src={image ? image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
            alt="llm"
            className='w-32 h-32 rounded-full absolute -bottom-10 left-20 border-white border-8 '
            height={80}
            width={80}
        />
    </div>
  )
}

export default ProfileImage