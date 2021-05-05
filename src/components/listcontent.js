import Video from './video'
import VideoList from './videolist'
import Heading from './rightheading'
import UniList from './unilist';

export default function ListContent(props) {
    return (
        <div class='list-content'>
            <Heading />
            
            <UniList user={props.user}/>
        </div>
    )
}