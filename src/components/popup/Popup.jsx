import { GiCheckMark } from "react-icons/gi";
import './popup.css'



const Popup = ({popup, setPopup}) => {


  return (
      <>
    {popup && <div className='popup center'>
        <div className='icon'>
            <GiCheckMark className='check'/>
        </div>
        <div className='title'>Thank you!    
        </div>
        <div className='description'>
            <p>I'll get back to you as soon as I can ...</p>       
        </div>
        <div className='dismiss-btn'>
            <button id="dismiss-popup-btn" onClick={() =>setPopup(false)}>
                OK
            </button>
        </div>
    </div>}
    </>
  )
}

export default Popup
