import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";

export default function PubProfile(props) {
    return (
        <div class='main-content'>
            <LeftBar />
            <RightBar selected={props.selected} view='pubprofile'/>
        </div>
    )
}