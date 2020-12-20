import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from 'src/app/models/topic';
import { TopicService } from '../../services/topic.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics: Topic[];
  url = global.url;

  data_icav: any = [];// Data de Inovar Crear ....
  constructor( private http: HttpClient ,
              private _topicSV:TopicService)
  {
    this.cargar_info_post();
    this.cargar_info_icav();
  }

  private cargar_info_post()
  {
    this._topicSV.getTopics().subscribe(
      res=>
      {
        if(res.status == 'success')
        {
          this.topics = res.topics; 
        }
      },err=>{console.log("Error",err);
      }
    );
  }

  private cargar_info_icav()
  {
    this.http.get('assets/data/dataicav.json')
    .subscribe( (respicav: any) => {

      this.data_icav = respicav;
      //console.log('JSON assets',respicav);
    });
  }

  ngOnInit() {
  }

}
