import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alumination',
  templateUrl: './alumination.component.html',
  styleUrls: ['./alumination.component.css']
})
export class AluminationComponent implements OnInit {
 menuOpen=0;img0=0;img1=0;img2=0;
  

  
  constructor() {
   }

  ngOnInit(): void {
    
  

}

onclickHamburger() {
  this.menuOpen=1;
  document.getElementById("hamburger-menu").style.width="40%";
}
onClickShut() {
  this.menuOpen=0;
  document.getElementById("hamburger-menu").style.width="0%";
}

getImg0() {
  if(this.img0==1)
  {document.getElementById("img0").style.animation="animate 0.5s";
   document.getElementById("img0").style.animationIterationCount="1"}


  this.img0=1;this.img1=0;this.img2=0;

  document.getElementById("img0").style.width="50%";
  document.getElementById("img1").style.width="0";
  document.getElementById("img2").style.width="0";

}

getImg1() {
  if(this.img1==1)
  {document.getElementById("img1").style.animation="animate 0.5s";
   document.getElementById("img1").style.animationIterationCount="1"}


  this.img0=0;this.img1=1;this.img2=0;

  document.getElementById("img0").style.width="0";
  document.getElementById("img1").style.width="50%";
  document.getElementById("img2").style.width="0";
  
}

getImg2() {
  if(this.img2==1)
  {document.getElementById("img2").style.animation="animate 0.5s";
   document.getElementById("img2").style.animationIterationCount="1"}
  
  
  this.img0=0;this.img1=0;this.img2=1;

  document.getElementById("img0").style.width="0";
  document.getElementById("img1").style.width="0";
  document.getElementById("img2").style.width="50%";

}

}
