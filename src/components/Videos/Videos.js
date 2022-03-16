import React from "react";
import "../../styles/styles.css"
import axios from "axios";
import Player from "../Player/Player.js";
import Video from "../../pages/Video";
import CommentList from "../CommentList/CommentList";



class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentVideo: {},
            videoDetails: [],
            comment: "",
            image: "",
            title: "",
            id: "",
            channel: "",
        }
    }

    fetchVideoDetails() {
        axios.get('http://localhost:5001/videos')
        .then((response) => {
            const apiData = response.data;
            this.setState({
               data: apiData,
               title: apiData.channel,
               id: apiData.id,
               channel: apiData.channel,
               image: apiData.image
            })
        })
    }

    componentDidMount() {
        this.fetchVideoDetails();
        let videoidentification = this.props.match.params.videoID
        axios.get('http://localhost:5001/videos/'+ videoidentification)
        .then(response => {
            let mainvideoData = response.data
            this.setState({
                currentVideo: mainvideoData,
            })
        })
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        let videoidentification = this.props.match.params.videoID
        axios.get('http://localhost:5001/videos/'+ videoidentification)
        .then(response => {
            let mainvideoData = response.data
            if (prevState.currentVideo.id !== this.props.match.params.videoID) {
                this.setState({
                    currentVideo: mainvideoData,
                })
            }
        })
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

 
    render() {

        return (
           <section className="video-player">
             <Player currentVideoDetails = {this.state.currentVideo}/>

            <section className="video-details__next-videos">
             <CommentList currentVideoDetails = {this.state.currentVideo} />
                <section className="next-videos__video-list">
                <p className="next-videos__label">Next Videos</p>
               {this.state.data.map((video) =>
               <div key={video.id} className="Videos__video">
                    <Video
                        key={video.id}
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        channel={video.channel}
                        video={video.video}
                        handleClick = {this.handleClick}
                        handleDelete = {this.handleDelete}
                        handleSubmit = {this.handleSubmit}
                    />
                    
                 </div>
               )} 
               </section>
               </section>
           </section>
        )
    }
}

export default Videos;

/*
    const videos = (props) => {
        const newVideoArray = props.video.filter((video, index) => {
            console.log(video.id, props.currentVideo);
            return video.id !== props.currentVideo;
        })
    }
    return newVideoArray.map((video, index))
*/