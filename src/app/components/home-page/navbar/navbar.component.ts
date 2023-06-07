import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isTablet:Boolean = false;
  public showFiller:Boolean = true;
  public isDrawerOpen:any = false;
  public isDrawerDisabled:any = false;
  public isMobileScreen:any = false;
  constructor(private breakpointObserver: BreakpointObserver){
    
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isTablet = result.matches;
      });
      this.breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .subscribe(result => {
        this.isMobileScreen = result.matches;
      });
  }

  toggleDrawer(): void {
    if (!this.isDrawerDisabled) {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }

  onDrawerClosed(): void {
    this.isDrawerOpen = false;
    if(!this.isTablet){
      this.isDrawerOpen = false;
    }
  }

  disableDrawer(): void {
    this.isDrawerDisabled = true;
  }

  
}
