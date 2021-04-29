import Video from './video'

export default function VideoList() {
    let order = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div className='video-list'>
            {order.map(item => (<div className='list-item'>
                   <div class="num-title"> 
                        <div className='list-num'>
                            {item}.
                        </div>
                        <div className="vid-title">
                            Title
                        </div>
                    </div>
                    <div className="item-container">
                      <Video />
                    </div>
                </div>))}
        </div>
    )
}