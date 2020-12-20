import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from '../../../models/topic';
import { global } from '../../../services/global';

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {

  titulo = 'Mis Publicaciones';
  token: any;
  topics: Topic[];
  url = global.url;
  estado: string;

  constructor(private _userSV: UserService,
            private _topicSV: TopicService) 
  {
    this.token = _userSV.getToken();
    
  }

  ngOnInit() 
  {
    this.getTopics();
  }

  getTopics()
  {
    this._topicSV.getTopics().subscribe(
      res => 
      {
        if (res.status == 'success')
        {
          this.topics = res.topics; 
        }
      },
      err =>
      {
        console.log("Error al traer Topics", err);
        
      }
    );
  }

  borrartopic(id:any)
  {
    this._topicSV.deleteTopic(id, this.token).subscribe(
      res =>{
        if(res.status == 'success')
        {
          this.getTopics();
          
        }
      },err=>{console.log("Error", err);
      }
    )
  }

  // MOdales
  close_remove(name) {
    document.getElementById(name).style.display = 'none';
    // console.log("Hola cerrar", name);
  }

  open_remove(name) {
    document.getElementById(name).style.display = 'block';
    // console.log("Hola abir", name);
  }
}
