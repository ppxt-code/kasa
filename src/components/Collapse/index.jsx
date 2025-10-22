import arrowUp from '../../assets/arrow_up.png'

function Collapse({title, content}) {
    return (
                  <div className="detail">
                    <input type="checkbox" className="detailToggle" />
                    <div className="detailTitle">
                      <p>{title}</p>
                      <div className="detailArrow">
                        <img src={arrowUp} alt="detail arrow" />
                      </div>
                    </div>
                    <div className="detailContent">	
                      {content}
                    </div>
                  </div>)
}
export default Collapse