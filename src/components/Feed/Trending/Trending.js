import './Trending.css'

function Trending(props){

    return(
        <div className="trendingMain">
            <p className="header_small">{props.data.header}</p>
            <p className="text">{props.data.text}</p>
            <p className="header_small">{props.data.tweetCount}</p>
        </div>
    )
}

export default Trending;