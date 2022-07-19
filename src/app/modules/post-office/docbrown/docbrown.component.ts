import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostOfficeService } from '../services/post-office.service';

@Component({
  selector: 'app-docbrown',
  templateUrl: './docbrown.component.html',
  styleUrls: ['./docbrown.component.scss']
})
export class DocbrownComponent implements OnInit, OnDestroy {

  messageFromMarty: string;
  form: FormGroup;
  //genero variable suscripción para darme de baja cuando quiera
  private subscription$: Subscription;
  //si tengo que manejar muchas suscripciones, hago un Array
  private subscriptionList$: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private postOfficeService: PostOfficeService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control: new FormControl()
    })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe(); // cuando cierro el componente, me desuscribo
  }

  sendMessage(event: string){
    this.postOfficeService.send(event);
    this.form.reset();
  }

  viewMessage(){
    this.subscription$ = this.postOfficeService.postOfficer$.subscribe(msg => this.messageFromMarty = msg);

  }

}
