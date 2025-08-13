import '../style.css'
function Card({logo,title})
{
    return(
        <>
        <div className="card-container">
        
        <div className="box">
            <div className='box-contain'>
            <div className="app-icon">
                <img src={logo} alt={title} />
            </div>
           
            <h4>{title}</h4>
          
            </div>
            
            </div>
            
        
        </div>
        </>
    )
}
export default Card