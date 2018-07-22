import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../common/youtube.service";
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
declare var $:any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers:[]
})
export class VideoPlayerComponent {
  constructor(private youtube:YoutubeService,private sanitizer:DomSanitizer) {}
  /**
   *Query the right url for the Api GET Request
   * @method videoUrl
   */
  videoUrl(){
    let base="https://www.youtube.com/embed/";
    let id=this.youtube.videoId;
    // to loop through a video it should be added to a playlist!
    let url=base+id+"?loop=1&playlist="+id;
    // tell angular that the used resource is safe from xss forgery
    return(this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
  /**
   *Make the video player visible if at least a video is ready
   * @method isVideoReady
   */
  isVideoReady(){
    this.setHeight();
    return this.youtube.isVideoReady;
  }
  /**
   *sets the Height of video player dynamically
   * @method setHeight
   */
  setHeight(){
    return $(window).height()/2;
  }
  /**
   *sets the Width of video player dynamically
   * @method setWidth
   */
  setWidth(){
    return $(window).width()/2;
  }
}
