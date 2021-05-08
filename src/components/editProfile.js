import { Button } from "@material-ui/core";
import { Route, Link, Switch } from 'react-router-dom';
import {useGlobalContext } from './data';
import {useState} from 'react';
import Drag from './drag'
export default function EditProfile() {
   
    return(
        <div>
            <Link to='/edit-order'>
                Edit List Order
                
            </Link>
        </div>
    )
}