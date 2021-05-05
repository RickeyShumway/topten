import Video from './video'
import {useGlobalContext } from './data';
import {useState} from 'react';

export default function VideoList(props) {
    const {state:{selectedProfile}} = useGlobalContext();
    const [state, setState] = useState();

    let vidArr = selectedProfile.urls;
    console.log(vidArr)
    let order = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div className='video-list'>
            {vidArr.map(item => (<div className='list-item'>
                   <div class="num-title">
                        <div className='list-num'>
                            {item}.
                        </div>
                        <div className="vid-title">
                            Title
                        </div>
                    </div>
                    <div className="item-container">
                      <Video link='linkplaceholder'/>
                    </div>
                </div>))}
        </div>
    )
}