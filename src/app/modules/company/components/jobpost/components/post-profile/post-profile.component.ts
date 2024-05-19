import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProfileServiceService } from '../../../../../../services/post-profile/post-profile-service.service';

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css'
})
export class PostProfileComponent implements OnInit {

  post: any = null;

  constructor(private router: Router,
    private post_prof:PostProfileServiceService
  ) {}

  ngOnInit(): void {
    this.post = this.post_prof.getJobData();
    console.log(this.post);
  }

removeAdd() {

}

}

