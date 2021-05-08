import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {appData, Profile} from '../components/data';
export default function EditListOrder() {
    return(
        <div className='main-content'>
            <LeftBar />
            <RightBar view="edit-order" />
        </div>
    )
}