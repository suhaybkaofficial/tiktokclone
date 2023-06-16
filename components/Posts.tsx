import React from 'react'
import Post from './Post'
import Image from 'next/image'

function Posts() {
    return (
        <div className='b'>
            
            {/* Post */}
            <Post name="Cristiano Ronaldo" username="cristiano_ronaldo" tags="#ronaldo #skills #foryou" caption="Follow me for more" />
            <Post name="Cristiano Ronaldo" username="cristiano_ronaldo" tags="#ronaldo #skills #foryou" caption="Follow me for more" />
            <Post name="Cristiano Ronaldo" username="cristiano_ronaldo" tags="#ronaldo #skills #foryou" caption="Follow me for more" />
            <Post name="Cristiano Ronaldo" username="cristiano_ronaldo" tags="#ronaldo #skills #foryou" caption="Follow me for more" />
        </div>
    )
}

export default Posts