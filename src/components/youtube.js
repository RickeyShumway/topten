
let urlTest= 'https://www.youtube.com/watch?v=8_T5oSUP-Kc';




export default async function fetchYoutube(link) {
    let response = await fetch(`https://www.youtube.com/oembed?url=${link}&format=json`)
    let stringify = await response.json();
    await console.log('stringigyf', stringify);
    let iframe = await stringify;
    
    //document.getElementById('test').innerHTML = await iframe;
    return await iframe;
}



// function fetchYoutube(link) {
//     let html;
//     fetch(`https://www.youtube.com/oembed?url=${link}&format=json`).then(res => res.json()).then(data => console.log(data.html))
// }
// let lionVid = fetchYoutube(url);
// console.log('lionVid', lionVid);



