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
    let links = [...props.user.videos];
    console.log('1',links)
    let final = order.splice(0, links.length, ...links)
    console.log('2',links, order)

    return(
        <div className='uni-list'>
            {order.map((item, index) => <ListItem order={index+1} url={item}/>)}
        </div>
    )
}

function ListItem(props) {
    const {addVideo} = useGlobalContext();
    const [state, setState] = useState({
        edit:false,
        
    });
    let embed;
    if(props.url) {
        embed = props.url.html;
        console.log('these', embed)
       
    }
    function handleSubmit(e) {
        e.preventDefault();
        addVideo(state.urlInput)
        console.log('was submitted')

    }
    function findYoutubeId(url='https://youtu.be/y1hWi-vgoaU') {
        let [youtube, id] = url.split('.be/');
        console.log(id)
        return id;
    }
    function handleInputChange(e) {
        const {target:{value, name}} = e;
        console.log(state.urlInput)
        setState({
            ...state,
          [name]:value,
        })
      }
    if(props.url?.html && state.edit == false) {
        return(
            <div className='list-item'>
                <div className='title-edit-wrap'>
                    <div className='list-num'>
                        {props.order}.
                    </div>
                    <div className='item-title'>
                        Hello
                    </div>
                    <FontAwesomeIcon className='edit' icon={faEdit} onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}/>
                </div>
                <span dangerouslySetInnerHTML={{__html: embed}}></span>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${findYoutubeId()}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <Markup content={'<iframe src="http://google.com"></iframe>'} /> */}
                    {/* <Video link={props.url.html}/> */}
                    
                
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
                    Hello
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
                    <form className='form empty-title' onSubmit={handleSubmit} onBlur={()=>{
                        let newState ={edit:false}
                        setState(newState)}} noValidate autoComplete="off">
                        <TextField value={state.urlInput} onChange={handleInputChange} name='urlInput' autoFocus className="outlined-basic" label="Enter URL" variant="outlined" />
                        <Button type='submit'>Submit</Button>
                    </form>
                </>
            </div>
        )
    }
}
