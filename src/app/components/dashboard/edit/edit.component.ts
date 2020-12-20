import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { TopicService } from 'src/app/services/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  titulo:String;
  topic: Topic;
  token: any;
  estado: string;
  urlapi = global.url;
  id: any;
  loading:boolean;
  afuConfig: any;
 
  
  constructor(private _userSV:UserService,
        private _topicSV:TopicService,
        private activeroute: ActivatedRoute) { 
    this.titulo = "Editar Publicacion ";    

    this.activeroute.params.subscribe(
      data => {
        this.id = data['id'];
      });

    this.token = _userSV.getToken();
    this.loading = true;
    this.topic = new Topic(
      '',
      '',
      '',
      '',
      ''
    );
  }

  ngOnInit() 
  {
    this.getTopic();
    
  }

  getTopic()
  {
    this._topicSV.getTopic(this.id).subscribe(
      res=>{
        // TODO hacer verificacion del status y mostrar errores
          if(res.status == 'success')
          {
            this.topic = res.topic;
            // console.log(res.topic);
            this.loading = false;
            this.afuConfig = {
              multiple: false,
              formatsAllowed: ".jpg,.png, .gig, .jpeg",
              maxSize: "50",
              uploadAPI: {
                url: this.urlapi + 'topic/edit/image/' + this.topic.image+'/'+this.id,
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
                attachPinBtn: ' Sube una Nueva Imagen',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !'
              }
            };
          }
        
      },err=>{console.log("Error",err);
      }
    );
  }

  edit(form:any)
  { 

    // console.log("ANtes de edit",this.topic.image);
    
    this._topicSV.updateTopic(this.topic,this.token).subscribe(
      res=>
      {
        //console.log(res.error); // TODO
        // console.log(res); 

        if(res.status == 'success')
        {
          this.estado = 'success';
        }
        
      },err=>{console.log("ERROR", err);}
    );
  }

  UploapEditImg(response)
  {
    let res = JSON.parse(response.response);
    // console.log(res);
    
    this.topic.image = res.nameImg;

    // console.log("TOPIC EN UP" , this.topic);
    
  }
}
