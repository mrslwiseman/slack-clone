import React from 'react'

const Message = ({sender, date, text}) => {
    return (

        <article className='list__message'>
            <span>{sender}</span><span>{date}</span>
            <p>{text}</p>
        </article>
    )
}
export default Message