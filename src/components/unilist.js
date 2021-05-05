import Video from './video'
export default function UniList(props) {
    let order = [props.user.iframes];
    console.log('can i see the ifram?', order)
    console.log('hello')

    return(
        <div className='uni-list'>
            {order.map(item => (<div className='list-item'>
                   <div class="num-title">
                        <div className='list-num'>
                            
                        </div>
                        <div className="vid-title">
                            Title
                        </div>
                    </div>
                    <div className="item-container">
                      <iframe>{item}</iframe>
                    </div>
                </div>))}
        </div>
    )
}