import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as postsSrv from 'src/app/posts.service';

@Component({
	templateUrl: './active-posts.component.html',
	styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

	posts!: Post[];
  post2!:Post;
	constructor() { }

	ngOnInit(): void {
		const posts = postsSrv.getPosts();
		this.posts = posts;


	}

	onInactivePosts(id: number, i: number) {
		postsSrv.updatePost({active: false}, id);
		this.posts.splice(i, 1);
	}

}
