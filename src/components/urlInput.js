import {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
export default function UrlInputForm() {
    const [state, setState] = useState({});
    function handleSubmit() {

    }
    function handleInputChange(e) {
        const {target:{value, name}} = e;
        setState({
          ...state,
          [name]:value,
        })
      }
    return (
        <div class="url-input">
            <form className='form' onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField value={state.url} onChange={handleInputChange} name='url' className="outlined-basic" label="Enter Url" variant="outlined" />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}