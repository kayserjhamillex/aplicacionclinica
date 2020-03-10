import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-body-blog',
  templateUrl: './body-blog.component.html',
  styleUrls: ['./body-blog.component.css']
})
export class BodyBlogComponent implements OnInit {
  blog: any;
  constructor(private clinicaService: ClinicaService) { }

  ngOnInit() {
    this.blog = this.clinicaService.ObtenerBlog();
  }

}
