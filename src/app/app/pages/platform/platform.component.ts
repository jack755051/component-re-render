import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
})
export class PlatformComponent implements OnInit {
  @Input() isLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHome() {
    this.router.navigate(['/platform/home']);
  }

  clickIncrement() {
    this.router.navigate(['/platform/increment']);
  }

  clickResumeInput() {
    this.router.navigate(['/platform/resume-input']);
  }
}
