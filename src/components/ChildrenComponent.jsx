import React from 'react'

export const ChildrenComponent = ({title, children}) => {


  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>


    </div>
  )
}
