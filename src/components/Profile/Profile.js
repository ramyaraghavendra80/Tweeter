import './Profile.css';
import Homeoption from '../Homeoption/Homeoption';
import Loginoption from '../Loginoption/Loginoption';
import ProfileMain from '../ProfileMain/ProfileMain';

function Profile(){
    return (
        <div className="homeContainer">
            <div className="leftContainer">
                <Homeoption />
            </div>
            <div className="centerContainer">
                <ProfileMain />
            </div>
            <div className="rightContainer">
                <Loginoption />
            </div>
        </div>
    )
}
export default Profile;