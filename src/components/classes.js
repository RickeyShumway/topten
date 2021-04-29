import React from "react";


class VideoData extends React.Component {
    constructor(name) {
        super();
        this.name = name;
        this.vids = [];
    }
    render() {
        return(<>
            This is the iframe data.
        </>
        )
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