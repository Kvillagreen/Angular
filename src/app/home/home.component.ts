import { Component, HostListener } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {MediaObserver, MediaChange} from '@angular/flex-Layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatIcon, MatIconButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public getScreenWidth = 0;
  public getScreenHeight = 0;
  public check = 1;
  public tile = 1;
  public checker = false;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) { }

  @HostListener('window:beforeunload', ['$event'])
  @HostListener('window:resize', ['$event'])
  async onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    window.location.reload();
  }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth >= 885 && this.getScreenWidth <= 959) {
      this.check = 0;
      this.tile = 2;
    }

    if (this.getScreenWidth <= 884 && this.getScreenWidth >= 600) {
      this.check = 1;
      this.tile = 1;
    }

    if (this.getScreenWidth <= 599) {
      this.check = 0;
      this.tile = 2;
    }

    if (this.getScreenWidth >= 960) {
      this.check = 1;
      this.tile = 1;
    }

  }

}
