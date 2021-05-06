import Video from './video'
import { Button, TextField } from '@material-ui/core';
import { faThList, faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useGlobalContext } from './data';
import {useState} from 'react';
export default function UniList(props) {
    let order = [1,2,3,4,5,6,7,8,9,10];
    let links = [...props.user.urls];
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
    const [state, setState] = useState({
        edit:false,

    });
    function handleInputChange(e) {
        const {target:{value, name}} = e;
        setState({
            ...state,
          [name]:value,
        })
      }
      console.log('this is thevid',props.url)
    if(typeof props.url ==='string' && state.edit == false) {
        return(
            <div className='list-item'>
                <div className='list-num'>
                 {props.order}
                </div>
                <div className='title-edit-wrap'>
                    <div className='title'>
                        {props.title}
                    </div>
                    <FontAwesomeIcon icon={faEdit} onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}/>
                </div>
                <>
                    <Video link={props.url}/>
                </>
            </div>
        )
        
    } else if(state.edit == false) {
        return(
            <div className='list-item'>
                <div className='list-num'>
                 {props.order}
                </div>
                <>
                    <div className='empty-title title' onClick={() => {
                        let newState ={edit:true}
                        setState(newState)}}>
                        Add Link
                    </div>
                </>
            </div>
        )
    } else if(state.edit == true) {
        return(
            <div className='list-item'>
                <div className='list-num'>
                 {props.order}
                </div>
                <>
                    <form className='form' onSubmit={console.log('hi')} onBlur={()=>{
                        let newState ={edit:false}
                        setState(newState)}} noValidate autoComplete="off">
                        <TextField value={state.urlInput} onChange={handleInputChange} name='urlInput' className="outlined-basic" label="Enter URL" variant="outlined" />
                        <Button type='submit'>Submit</Button>
                    </form>
                </>
            </div>
        )
    }
}