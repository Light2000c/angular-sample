import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  
  public is_flower: boolean = false;
  public is_animal: boolean = false;
  public is_building: boolean = false;

  public setFlowerActive(){
   this.is_flower = true;
   this.is_animal = false;
   this.is_building = false;
  }

  public setBuidingsActive(){
    this.is_flower = false;
    this.is_animal = false;
    this.is_building = true;
  }

 public setAnimalsActive(){
  this.is_flower = false;
  this.is_animal = true;
  this.is_building = false;
 }


}
