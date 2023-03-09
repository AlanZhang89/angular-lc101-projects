import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks =['https://www.youtube.com/watch?v=hIcc-QL0wyA',
              'https://www.youtube.com/watch?v=5TMLa14s70s',
              'https://www.youtube.com/watch?v=F478PvRt74Y']
  image = 'https://media1.giphy.com/media/CXWmJdNsHt2r6g9vjI/giphy.gif?cid=ecf05e473jtlw4iaabl2xnq87iil5u81xuzvoxpzkl9kzrlb&rid=giphy.gif&ct=g';
  constructor() { }

  ngOnInit() {
  }

}
