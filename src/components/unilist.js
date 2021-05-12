import Video from './video'
import { Button, TextField } from '@material-ui/core';
import { faThList, faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useGlobalContext } from './data';
import {useState} from 'react';
import { Markup } from 'interweave';


export default function UniList(props) {

    let order = Array.apply(null, Array(10)).map(function () {})
    //let order = [1,2,3,4,5,6,7,8,9,10];
    console.log('user',props.user)
    let links = [...props.user.urls];
    // console.log('1',links)
    let final = order.splice(0, links.length, ...links)
    // console.log('2',links, order)
    if(props.view== 'view') {
        return(
            <div className='uni-list'>
                {order.map((item, index) => <ListItemView  order={index+1} url={item}/>)}
            </div>
        )
    } else if(props.view == 'edit') {
        return (
            <div className='uni-list'>
                {order.map((item, index) => <ListItem  order={index+1} url={item}/>)}
            </div>
        )
    }
}

function ListItem(props) {
    const {addVideo, state:{userProfile}} = useGlobalContext();
    const [state, setState] = useState({
        edit:false,
    });
    let embed;
    if(props.url) {
        embed = props.url;
        
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(state.urlInput) {
            addVideo(state.urlInput, props.order-1)
            console.log('was submitted')
        } 
        let newState = {
            ...state,
            edit:false}
        setState(newState)



    }
    function findYoutubeId(link) {
        let [shareLink, id] = link.split('.be/');
        let [url, id2] = link.split('=');
        if(id) {
            return id;
        } else {
            return id2;
        }   
    }
    function handleInputChange(e) {
        const {target:{value, name}} = e;
        console.log(state.urlInput)
        setState({
            ...state,
          [name]:value,
        })
      }
    if(props?.url && state.edit == false) {
        return(
            <div className='list-item'>
                <div className='title-edit-wrap'>
                    <div className='list-num'>
                        {props.order}.
                    </div>
                    <div className='item-title'>
                        {userProfile.videos[props.order-1].title}
                    </div>
                    <FontAwesomeIcon className='edit' icon={faEdit} onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}/>
                </div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${findYoutubeId(embed)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
        )
    } else if(state.edit == false) {
        return(
            <div className='list-item'>
                <div className='title-edit-wrap'>
                <div className='list-num'>
                    {props.order}.
                </div>
                <div className='item-title'>
                   EMPTY
                </div>
                <FontAwesomeIcon className='edit' icon={faEdit} onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}/>
                        </div>
                <>
                    <div className='empty-title' onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}>
                        ...Add Link
                    </div>
                    
                </>
            </div>
        )
    } else if(state.edit == true) {
        return(
            <div className='list-item'>
                <div className='list-num'>
                 {props.order}.
                </div>
                <>
                    <form className='form empty-title' onSubmit={handleSubmit} onBlur={handleSubmit} noValidate autoComplete="off">
                        <TextField value={state.urlInput} onChange={handleInputChange} name='urlInput' autoFocus className="outlined-basic" label="Enter URL" variant="outlined" />
                        <Button type='submit'>Submit</Button>
                    </form>
                </>
            </div>
        )
    }
}
function ListItemView(props) {
    const {state:{selectedProfile}} = useGlobalContext();
    const [state, setState] = useState();
    // console.log('plase work',selectedProfile)

    let embed;
    if(props.url) {
        embed = props.url;
        
    }
    function findYoutubeId(link) {
        let [shareLink, id] = link.split('.be/');
        let [url, id2] = link.split('=');
        if(id) {
            return id;
        } else {
            return id2;
        }   
    }
    if(props?.url) {
        return(
            <div className='list-item'>
                <div className='title-edit-wrap'>
                    <div className='list-num'>
                        {props.order}.
                    </div>
                    <div className='item-title'>
                    {selectedProfile.videos[props.order-1].title}
                    </div>
                </div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${findYoutubeId(embed)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
        )
    } else {
        return(
            <div className='list-item'>
                <div className='title-edit-wrap'>
                <div className='list-num'>
                    {props.order}.
                </div>
                <div className='item-title'>
                   EMPTY
                </div>
                
                        </div>
             
            </div>
        )
                    }
}