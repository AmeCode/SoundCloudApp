import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class YoutubeService {
  constructor(private http:HttpClient){}
  /**
   * Responsible for storing the API key for our app
   */
  api:string="AIzaSyBpMkcA6pu8LBdn2dx02gv7z7PxkwslB14";
  /**
   * Store whether the video is valid and ready or no
   */
  isVideoReady:boolean=false;
  /**
   * Store the Id of the video if it is a valid video on youtube
   */
  videoId="";
  /**
   * Send GET request to the Youtube API with the current videoId
   * @method getVideo
   */
  getVideo(videoId){
    return this.http.get("https://www.googleapis.com/youtube/v3/videos?id="+videoId+"&key="+this.api+"&part=snippet,contentDetails,statistics,status")
      .subscribe((data:any)=>{
        if(data.items[0].id==videoId){
          this.videoId=videoId;
          this.videoIsReady(true);
        }
        else this.videoIsReady(false)
      }
    )
  }
  /**
   *Set the video status true if the video is ready to true, otherwise false
   * @method videoIsReady
   */
  videoIsReady(status:boolean){
    this.isVideoReady=status;
  }
}
