import React from 'react'
import '../component css/Video.css'
export const Section6 = () => {
  return (
    <>
        <section className='video-campo'>
            <video controls>
                <source src='/public/Video/video.mp4' type='video/mp4'></source>
            </video>
        </section>
    </>
  )
}
