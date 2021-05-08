import {useGlobalContext } from './data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useState} from 'react';
export default function Drag() {
    const {state:{userProfile}} = useGlobalContext();
    return(
       
            <Droppable droppableId='items'>
                {(provided) => (
                    <ul className='dragging=list' {...provided.droppableProps} ref={provided.innerRef}>
                        <DraggingList />
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable> 
       
    )
}
function DraggingList() {
    let listArr= [1,2,3,4,5,6,7,8,9,10];
    let titles=['cool','chill', 'nice', 'wow', 'nice', 'chee', 'hoo', 'cmon', 'baby', 'haha']
    let objArr = listArr.map((item, index) => new testVid(titles[index], item))

    console.log(objArr)
    return(
        <>
            {objArr.map(({name, thing}, index) => {
                return (
                    <Draggable key={name} draggableId={name} index={index}>
                        {(provided) => (
                            <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                {name}
                            </li>
                        )}
                    </Draggable>
                );
            })}
        </>
    )
}
function testVid(name, thing) {
    this.name = name;
    this.thing=thing;
}