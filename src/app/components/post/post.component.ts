import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { global } from '../../services/global';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  titulo = 'Mis Publicaciones';
  token: any;
  topics: Topic[];
  url = global.url;
  estado: string;

  constructor(private _userSV: UserService,
    private _topicSV: TopicService) {
    this.token = _userSV.getToken();

  }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this._topicSV.getTopics().subscribe(
      res => {
        if (res.status == 'success') {
          this.topics = res.topics;
        }
      },
      err => {
        console.log("Error al traer Topics", err);

      }
    );
  }
}
