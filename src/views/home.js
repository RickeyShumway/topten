import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {appData, Profile} from '../components/data';

const profileList = appData.profiles;
export default function HomePage() {
    return (
        <div className='main-content'>
            <LeftBar />
            <RightBar view="home" />
        </div>
    )
}
