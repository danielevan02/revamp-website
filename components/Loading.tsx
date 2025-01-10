import { cn } from '@/lib/utils'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

const Loading = ({className}: {className?: ClassNameValue}) => {
  return (
    <div className={cn('fixed w-screen h-screen bg-neutral-100 z-50 flex items-center justify-center', className)}>
      <div className="loader">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loading