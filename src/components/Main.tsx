import React from 'react'
import data from '../data.json';      //data from JSON file is fed into data object.
import Card from './Card';            //component for displaying cards.


const Main = () => {
  return (
    <div className='main'>
        {data.map(record => {                //passing the data to the component as prop.
            return (
                <Card
                    record={record}
                />
            )
        })}
    </div>
  )
}

export default Main