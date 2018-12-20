import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  actived = 0;
  constructor(private router: Router) { 
  }
  
  ngOnInit() {
  }

  activeIt (index, routerName) {
    this.actived = index;
    this.router.navigate([routerName])
  }

}
