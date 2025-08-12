import React, { Children } from 'react'
import {Tabs} from 'antd'
import Theatre from './Theatre'


function Profile() {
    
    const tabItems = [
      {
        key: '1',
        label: "Theatre",
        children:<Theatre/>

      },{
         key: '2',
        label: "Booking"
        
      }
    ]
  return (
    <div>
        <h1>Profile Page</h1>

         <Tabs items={tabItems}/>
    </div>
  )
}

export default Profile