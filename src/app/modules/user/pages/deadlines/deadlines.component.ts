import { Component, OnInit } from '@angular/core';
import { DateOptions } from 'src/app/models/Dates/date.mode';
import { SharedService } from 'src/app/services/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss']
})
export class DeadlinesComponent implements OnInit {
  dateTime: { time: string; date: string };
  deadlines: { deadline: string; secondsLeft: string };
  constructor(public sharedService: SharedService) {}
  ngOnInit(): void {
    this.getDeadlines();
  }

  public getDeadlines() {
    this.sharedService.getDeadlines().subscribe((res) => {
      alert(JSON.stringify(res));
      this.startMomentTimer();
    });
  }

  public startTimer() {
    // Realtime clock in javascript
    setInterval(() => {
      var td = new Date();
      var hr = td.getHours();
      let rawMin = td.getMinutes();
      var min = rawMin < 10 ? `0${rawMin}` : rawMin;
      let rawSec = td.getSeconds();
      var sec = rawSec < 10 ? `0${rawSec}` : rawSec;
      var dd = td.getDate();
      var mm = td.getMonth();
      var yy = td.getFullYear();
      const options: any = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var date = td.toLocaleDateString(undefined, options);
      var time = hr + ':' + min + ':' + sec;
      this.dateTime = { time, date };
    }, 1000);
  }

  public startMomentTimer() {
    setInterval(() => {
      this.dateTime = {
        time: moment(this.deadlines.deadline)
          .utc()
          .utcOffset('-7:00')
          .format('HH:mm:ss'),
        date: moment(this.deadlines.deadline)
          .utc()
          .utcOffset('-7:00')
          .format('dddd, MMMM Do, YYYY')
      };
    }, 1000);
  }
}
