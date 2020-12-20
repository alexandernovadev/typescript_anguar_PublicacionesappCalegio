import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../models/topic';
import { TopicService } from '../../../services/topic.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  titulo = 'Agregar Publicacion';
  urlapi = global.url;
  topic: Topic;
  token: any;
  estado: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gig, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: this.urlapi + 'topic/image',
      headers: {
        "Authorization": this._userSV.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: ' Sube una Imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(private _topicSV: TopicService,
              private _userSV: UserService) 
  {
    this.topic = new Topic(
      '',
      '',
      '',
      '',
      ''
    );
    this.token = _userSV.getToken();
  }

  ngOnInit() {
  }

  save(form: any)
  {
    
    this._topicSV.save(this.topic,this.token).subscribe(
      res=>
      {
        // console.log(res);
        if(res.status == 'success')
        {
          this.estado = res.status;

          // console.log("que paso");
        }
        
      },
      erro=>
      {
        console.log("Error al save topics", erro);
      }
    );
    
  }

  UploadImg(evento)
  {
    let res = JSON.parse(evento.response);
    // console.log(res.nameimg);
    this.topic.image = res.nameimg
  }

}
