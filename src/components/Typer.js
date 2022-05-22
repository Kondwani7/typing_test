import React from 'react'
import '../App.css'
const Typer = () => {
  return (
    <div className="content-box">
        <div className='typing-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci vel sodales auctor. Vivamus mollis magna eu blandit finibus. 
                Nam dui dui, fermentum quis semper non, accumsan vel nibh. Nunc nisi libero, accumsan nec congue ac, venenatis at eros. 
                Vestibulum mollis sapien sed cursus finibus. Nulla hendrerit porta eros, id sollicitudin purus sodales non. Vivamus suscipit libero at convallis sollicitudin. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Aenean vehicula, mauris non tristique bibendum, orci nulla eleifend ipsum, pharetra cursus neque lacus sed metus. 
                Proin ultricies metus sed nisi pulvinar, in tempus ex dictum. Maecenas vitae justo quis velit tempor tincidunt et ut nulla. 
                Vestibulum imperdiet felis id aliquet commodo. Pellentesque ac leo nec turpis egestas elementum quis ut justo. 
                Ut et velit non leo condimentum viverra in at dui. Cras vitae urna vitae nisl consectetur tristique sit amet sit amet nisi.Generated 1 pa
            </p>
        </div>
        <div className='content'>
            <ul className='result-details'>
                <li className="time">
                    <p>Time Left:</p>
                    <span><b>60</b>s</span>
                </li>
                <li className='mistake'>
                    <p>Mistakes:</p>
                    <span><b>60</b></span>
                </li>
                <li className='wpm'>
                    <p>WPM:</p>
                    <span><b>60</b></span>
                </li>
                <li className='cpm'>
                    <p>CPM:</p>
                    <span><b>0</b></span>
                </li>
            </ul>
            <button className="button">Try Again</button>
        </div>
    </div>
  )
}

export default Typer