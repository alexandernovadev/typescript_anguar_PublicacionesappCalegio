import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from '../../models/topic';
import { global } from '../../services/global';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  topic: Topic;
  id: any;
  urlapi = global.url; 

  constructor(private _activeRoute: ActivatedRoute,
              private _topicSV: TopicService,) { 
    this._activeRoute.params.subscribe(
      data => {
        this.id = data['id'];
      });
              }

  ngOnInit() 
  {
    this.getTopic();
  }

  getTopic()
  {
    this._topicSV.getTopic(this.id).subscribe(
      res=>{
        if(res.status == 'success')
        {
          // console.log(res);
          this.topic = res.topic;
          
        }
      },err=>{console.log("Error", err);
      }
    );
  }
}
