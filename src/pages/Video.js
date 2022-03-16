import { Link } from "react-router-dom";
import "../styles/styles.css";

function Video(video) {
  
  return (
    <section className="next-video__list">
    <Link className="Video" to={`/videos/${video.id}`}>
      <div className="next-videos">
        <div className="video-list__image-container">
            <img src={video.image} alt="video-thumbnails" className="video-list__image" />
        </div>
        <div className="video-list__comments-container">
          <p className="video-list__title" id={video.id}>{video.title}</p>
          <p className="video-list__channel" id={video.id}>{video.channel}</p>
        </div>
      </div>
    </Link>
    </section>
  );
}

  export default Video;
  