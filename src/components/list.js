import Video from './video'


// function listItem() {
//     return (

//     )
// }
export default function VideoList() {
    let order = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div className='video-list'>
            {order.map(item => (<div className='empty-list-item'>
                <div className='list-num'>
                {item}.
                </div>
                <div className="empty">Empty</div>
                </div>))}
        </div>
    )
}