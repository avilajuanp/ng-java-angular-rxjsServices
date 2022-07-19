import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostOfficeService } from '../services/post-office.service';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.scss']
})
export class MartyComponent implements OnInit {

  messageFromDoc: string;
  form: FormGroup;
  
  //en mi constructor hago inyección de dependencias del servicio
  constructor(private formBuilder: FormBuilder, private postOfficeService: PostOfficeService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })
  }

  sendMessage(event:any){
    //llamo al servicio y usando el metodo send() le paso el evento
    this.postOfficeService.send(event);
    //una vez q envío el mensaje, no lo necesito más, por eso reseteo el form
    this.form.reset();
  }

  viewMessage(){
    //para recibir el mensaje, me suscribo al servicio$ y recibo el string
    this.postOfficeService.postOfficer$.subscribe(msg => this.messageFromDoc = msg);
  }
}