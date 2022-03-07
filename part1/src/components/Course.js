import React from 'react'

const Course = ( props ) => {

    const total = props.course.parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return s+p
      })

  return <div>
        {props.course.name}
        {props.course.parts.map(x => <li key={x.id}>{x.name} {x.exercises}</li>)}
        {total}
      
  </div>
}



export default Course