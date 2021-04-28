
export default function SocialList() {
    let sites=["YouTube", "Spotify", "IMBD"];
    return(
        <div className="social-list">
            {sites.map(thing => <Social web={thing} click={()=>console.log(`hello this is ${thing}`)}/>)}
        </div>
        // <div className="social-list">
        //     <Social web={site} click={()=>console.log(`hello this is ${site}`)}/>
        // </div>
    )
}

// function Social(props) {
//     return(
//         <div className="social-button">
//             {props.web}
//         </div>
//     )
// }

function Social(props) {
    return(
        <div className="social-button" onClick={props.click}>
            {props.web}
        </div>
    )
}