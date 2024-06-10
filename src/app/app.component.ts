import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'test_router_2';
  isLogin: boolean = false;
  alertMsg: string = '現在狀態為:';

  constructor() {}

  ngOnInit(): void {}

  // 這裡可以添加一個方法來改變登入狀態
  login(): void {
    this.isLogin = true;
    alert((this.alertMsg += this.callLogStatus(this.isLogin)));
  }

  logout(): void {
    this.isLogin = false;
    alert((this.alertMsg += this.callLogStatus(this.isLogin)));
  }

  callLogStatus(s: boolean): string {
    switch (s) {
      case true:
        return '登入';
      case false:
        return '登出';
    }
  }
}
