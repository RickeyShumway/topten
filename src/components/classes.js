import React from "react";
import axios from 'axios';

const KEY = 'AIzaSyCLu3vq42z4Ay_DJOfvGSjiS-RDno-ETpA'
axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        maxResults: 1,
        key: KEY,
        
    }
})
let url = '';

class VideoData extends React.Component {
    constructor(name) {
        super();
        this.name = name;
        this.vids = [];
    }
    render() {
        <>
            This is the iframe data.
        </>
    }
  }
  function Test() {
    return(
        <div>
            Hello
        </div>
    )
  }
  export { Test }