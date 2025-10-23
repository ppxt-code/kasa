import {useState} from 'react'
import arrowUp from '../../assets/arrow_up.png'

function Collapse({title, content}) {
  const [open, setOpen] = useState(false)
    return (
                  <div className="detail">
                    <div className="detailTitle">
                      <p>{title}</p>
                      <label>
                        <div className="detailArrow">
                          <input type="checkbox" onChange={()=>setOpen(!open)} className="detailToggle" hidden/>
                          <img src={arrowUp} alt="detail arrow" className={open ? "rotated" : ""}/>
                        </div>
                      </label>  
                    </div>
                    <div className={open ? "detailContentWrapper translated" : "detailContentWrapper"}>
                      <div className={open ? "detailContent translated" : "detailContent"}>{content}</div>
                    </div>
                  </div>)
}
export default Collapse