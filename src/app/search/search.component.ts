import {Component, Injectable} from '@angular/core';

import {YoutubeService} from "../common/youtube.service";
import { HttpClient } from '@angular/common/http';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[]
})
@Injectable()
export class SearchComponent {
  constructor( private youtube:YoutubeService) {}
  /**
   *Search for the given url
   * @method search
   */
  search(form:NgForm){
    let url=form.value.url;
    let videoId=url.split("v=")[1];
    this.youtube.getVideo(videoId);
  }
}
