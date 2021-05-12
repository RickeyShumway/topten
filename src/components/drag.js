import {useGlobalContext } from './data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useHistory } from 'react-router-dom';
import {useState} from 'react';
import { Button } from '@material-ui/core';
export default function Drag() {
    const {reorderList, state:{userProfile}} = useGlobalContext();
    const history = useHistory();
    const [state, setState] = useState({
        userProfile
    });
    function handleOnDragEnd(result) {
        let newUser = {...userProfile};

        console.log('dragesoure',result.source.index,'drag destination',result.destination.index);
        const tempArr1 = Array.from(newUser.videos);
        const [reorderedItem1] = tempArr1.splice(result.source.index,1)
        tempArr1.splice(result.destination.index,0,reorderedItem1);
        console.log('temp array, and reordered',tempArr1)
        const tempArr2 = Array.from(newUser.urls);
        const [reorderedItem2] = tempArr2.splice(result.source.index,1)
        tempArr2.splice(result.destination.index,0,reorderedItem2);
        newUser.videos=tempArr1;
        newUser.urls=tempArr2;
        console.log('newUser', newUser)
        reorderList(newUser);
        setState(userProfile)

    }
    console.log('this is the state', state)
    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='items'>
                {(provided) => (
                    <div className='dragging-list' {...provided.droppableProps} ref={provided.innerRef}>
                        <DraggingList />
                        {provided.placeholder}
                        <Button onClick={()=> {history.push(`/admin/${userProfile.id}`)}}>Done</Button>
                    </div>
                )}
            </Droppable> 
            </DragDropContext>
       
    )
}
function DraggingList() {
    const {reorderList, state:{userProfile}} = useGlobalContext();
    const [state, setState] = useState({
        userProfile,
    });
    
    let titles = ["EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY","EMPTY"];
    // let titles=['cool','chill', 'nice', 'wow', 'woo', 'chee', 'hoo', 'cmon', 'baby', 'haha']
    let links = userProfile.urls;
    let vids = userProfile.videos.map(item => item?.title);
    console.log('userProfile', userProfile.videos);
    let newTitles=titles.splice(0,vids.length, ...vids)
    
    let objArr = titles.map(function(item, index) {
        if(item) {
            return new testVid(item, index)
        } else {
            return "EMPTY"
        }
        })
    // console.log('objArr', objArr);
    
    // console.log(objArr)
    return(
        <>
            {objArr.map((obj, index) => {
                // console.log(obj)
                let title;
                if (obj==="EMPTY") {
                    title = 'EMPTY'
                } else {
                    title = obj.title;
                }
                return (
                    <Draggable key={title+ index} draggableId={title + index} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className="drag-item">
                                {title}
                            </div>
                        )}
                    </Draggable>
                );
            })}
        </>
    )
}
function testVid(title, current) {
    this.title = title;
    this.current=current;
}
function DragItem(props) {
        return (
            <Draggable key={props.title + props.index} draggableId={props.title} index={props.index}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className="drag-item" style={{height:'100px'}}>
                        {props.title}
                    </div>
                )}
            </Draggable>
        )
}