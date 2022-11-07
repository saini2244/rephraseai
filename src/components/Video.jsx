import { useEffect, useState } from 'react';
import '../scss/video.scss';

export function Video(props) {

    const { video = {} } = props;

    const { url = "", thumbnail_url = "" } = video || {};

    const [mute, setMute] = useState(true);

    useEffect(() => {
        setMute(false);
      }, [video]);

    const onMouseOut = (event) => {
        if(event) {
            event.target.pause();
        }
    }

    const onMouseOver = (event) => {
        //TODO on hover video is not playing first time beacuse of security 
        // https://developer.chrome.com/blog/autoplay/
        if(event) {
            try {
                event.target.play();
            } catch(err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="video-wrapper">
            {
                url && 
                <video className="video"
                    controls
                    poster={thumbnail_url}
                    muted={mute}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    src={url}>
                </video>
            }
        </div>
    );
}
