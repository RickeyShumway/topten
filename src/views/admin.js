import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";

export default function Admin(props) {
    return (
        <div class='main-content'>
        <LeftBar />
        <RightBar selected={props.selected} view='adminprofile'/>
    </div>
)
}