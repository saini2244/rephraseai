import '../scss/list.scss';
import { videoData } from '../services/mock-api';
import { Video } from './Video';

export function List() {
  return (
    <div className="list-wrapper">
        {
            videoData.map((video, index) => {
                return (
                    <Video key={index} video={video}/>
                )
            })
        }
    </div>
  );
}
