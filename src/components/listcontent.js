import Video from './video'
import VideoList from './videolist'
import Heading from './rightheading'
import UniList from './unilist';
import Drag from './drag';


export default function ListContent(props) {
    console.log(props.per)
    if(props.per == 'drag') {
        return (
            
            <Drag />
        )
    }
    return (
        <div class='list-content'>
            <Heading />
            <UniList view={props.per} user={props.user}/>
        </div>
    )
}