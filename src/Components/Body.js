import React, { useState } from 'react'
import Image from './shree.jpg'
import ReactPlayer from 'react-player'
import './Body.css'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }
    const [dramas, setDramas] = useState([
      { drama: 'angels last mission' },
      { drama: 'love o2o' },
      { drama: 'the mask' },
      { drama: 'my secret life of my secratory'},
      { drama: 'my girlfriend is an alien'},
      { drama: 'put your head on my shoulders'},
      { drama: 'do you like brahms'}
  ])
  const [index, setIndex] = useState(0)  // 1
  function change() {  //0+1%7
      const newIndex = (index + 1) % dramas.length
      setIndex(newIndex)
  }

    

    return (
        <div>
            <div>
                <img src={Image} alt="images" /> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '30px' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'margin', alignItems: 'margin', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=LLgtNiYgHQQ'} height={200}  width={200}controls />
                <div>
                    <p>kdrama:i like this </p>
                </div>
            </div>
            <p>i like this {dramas[index].drama}</p>
            <button onClick={change}>Change me</button>
        </div>
    )
}
export default Body