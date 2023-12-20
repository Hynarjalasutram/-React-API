import "./Dashboard.css"
import Graph from "./Graph"
import Piechart from "./Piechart"
import Products from "./Products"
let Dashboard=()=>{
    return(
        <div className="dashboard">
            <h2>Hello Hynar !</h2>
            <div className="dashboardtop">
                <div className="dashboardtop1">
                    <div className="left"><i class="fa-solid fa-dollar-sign"></i></div>
                    <div className="right">
                        <h6>Earning</h6>
                        <h1>$198K</h1>
                        <p>^ 37.8% this month</p>
                    </div>
                </div>
                <div className="dashboardtop2">
                <div className="left2"><i class="fa-solid fa-dollar-sign"></i></div>
                    <div className="right2">
                        <h6>Earning</h6>
                        <h1>$148K</h1>
                        <p>^ 30.8% this month</p>
                    </div>
                </div>
                <div className="dashboardtop3">Earning $ 150k this month</div>
                <div className="dashboardtop4">Earning $ 170k this month</div>
            </div>
            <div className="dashboardmid">
                <div className="dbmgraph"><Graph/></div>
                <div className="dbmpie"><Piechart/></div>
            </div>
            <div>
                <h2>Products :</h2>
                <Products/>
            </div>
        </div>
    )
}
export default Dashboard