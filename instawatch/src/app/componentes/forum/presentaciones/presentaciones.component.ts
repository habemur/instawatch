import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Servicios/forum.service';

@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit {

  posts: any[];
  saludo: any;

  constructor(private forumService: ForumService) {
    this.posts = []
  }

  async ngOnInit() {
    this.posts = await this.forumService.getAll()
    console.log(this.posts);

  }
}