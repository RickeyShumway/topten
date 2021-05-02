import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {appData, Profile} from '../components/data';

const profileList = appData.profiles;
console.log(profileList)
export default function HomePage(props) {
    let arr = props.profileList;
    console.log('arr', arr)
    return (
        <div className='main-content'>
            <LeftBar />
            <RightBar view="home" profiles={arr}/>
        </div>
    )
}
