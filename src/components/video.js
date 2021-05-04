let vidLink = <iframe width="560" height="315" src="https://www.youtube.com/embed/ZRd3lrukxu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
export default function Video(props) {
    return (
        <div className="video">
            {props.link}
        </div>
    )
}