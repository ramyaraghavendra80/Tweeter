import './Home.css';
import Homeoption from '../Homeoption/Homeoption';
import Loginoption from '../Loginoption/Loginoption';
import Feed from '../Feed/Feed/Feed';

function Home(){
    return (
        <div className="homeContainer">
            <div className="leftContainer">
                <Homeoption />
            </div>
            <div className="centerContainer">
                <Feed />
            </div>
            <div className="rightContainer">
                <Loginoption />
            </div>
        </div>
    )
}

export default Home;