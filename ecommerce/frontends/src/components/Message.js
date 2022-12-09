import React from 'react'
import {Alert} from 'react-bootstrap'
//for variant of box which we want and children
function Message(variant,children) {
    //variant is what we are passing from front-end
  return (
    <Alert variant={variant}> 
      {children }
    </Alert>
  )
}

export default Message
