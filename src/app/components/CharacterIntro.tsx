import React from "react"

interface CharacterIntroProps {
  videoSource: string,
  title: string,
  mark: string,
  firstName: string,
  lastName: string,
  contentHtml: string,
  containStyle?: React.CSSProperties,
  markStyle?: React.CSSProperties,
}

export default function CharacterIntro({
  videoSource,
  title,
  mark,
  firstName,
  lastName,
  contentHtml,
  containStyle,
  markStyle,
}: CharacterIntroProps) {

  const handlePlayVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play()
  }

  const handlePauseVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause()
  }

  return (
    <div className='relative flex-1 top-44' style={containStyle}>
      <div className='absolute flex flex-col items-end max-w-sm top-32 left-60'>
        <video onMouseEnter={(e) => handlePlayVideo(e)} onMouseLeave={(e) => handlePauseVideo(e)} muted loop className='rounded-md' width="100%" height="auto">
          <source src={videoSource} type="video/mp4" />
        </video>
        <span className='text-end'>{title}</span>
      </div>
      <div className='flex flex-col my-96 w-1/2 z-10 text-second mix-blend-difference'>
        <span className='mb-20' style={markStyle}>{mark}</span>
        <div className='text-6xl font-PtypeDisplay'>{firstName}</div>
        <div className='text-6xl font-PtypeDisplay'>{lastName}</div>
        <span className='text-lg' dangerouslySetInnerHTML={{__html: contentHtml}}></span>
      </div>
    </div>
  )
}