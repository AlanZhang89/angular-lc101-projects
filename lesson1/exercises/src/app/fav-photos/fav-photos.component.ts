import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Action Movies Photo';
  image1 = 'https://assets.wallpapersin4k.org/uploads/2017/04/Hollywood-Action-Movies-HD-Wallpapers-3.jpg';
  image2 = 'https://i.pinimg.com/originals/9d/18/d3/9d18d3ebccec800564c1b24ba49662a1.jpg';
  image3 = 'https://1.bp.blogspot.com/-QsYaFLHI07M/Xn0TQXE_q5I/AAAAAAAAAxM/dPPtNktvkaQFjwp5ZlCkkpnG3FSUgDzLwCNcBGAsYHQ/s1600/maxresdefault%2B%25282%2529.jpg';

  constructor() { }

  ngOnInit() {
  }

}