
import './style.css'
import Card from './cards/card';
function Dashboard()
{
    return(
        <div>
            <div className="head">
            <h1>My
            <span>Services</span>
            </h1>
        </div>
        <div className="cards-contain">
            
        <Card logo={"https://themewagon.github.io/Joyseno/images/icon-1.png"} title={"App Design"}/>
        <Card logo={"https://themewagon.github.io/Joyseno/images/icon-7.png"} title={"Website Design"}/>
        <Card logo={"https://themewagon.github.io/Joyseno/images/icon-6.png"} title={"Html And Css"}/>
        <Card logo={"https://themewagon.github.io/Joyseno/images/icon-8.png"} title={"Logo Designing"}/>

        </div>
        </div>
    )
}
export default Dashboard;