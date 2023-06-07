import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatGridList } from '@angular/material/grid-list';
import { Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isTablet:Boolean = false;
  public breakpoint:any;
  constructor(private breakpointObserver: BreakpointObserver){

  }
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isTablet = result.matches;
      })
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    
  }
  
  getGridColumns(): number {
    if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      return 1; // Mostrar una columna en dispositivos móviles
    } else {
      return 3; // Mostrar tres columnas en otros tamaños de pantalla
    }
  }
}
