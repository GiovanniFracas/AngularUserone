import { Post } from "./models/post";

let posts: Post[] = [
	{
		id: 1,
		title: 'Primo post',
		body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
		active: false,
		type: 'news',
author:'Carlo'
	},
	{
		id: 2,
		title: 'Secondo post',
		body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
		active: true,
		type: 'politic',
    author:'Carlo'

	},
	{
		id: 3,
		title: 'Terzo post',
		body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
		active: false,
		type: 'education',
    author:'Carlo'

	},
	{
		id: 4,
		title: 'Quarto post',
		body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
		active: false,
		type: 'politic',
    author:'Carlo'

	},
	{
		id: 5,
		title: 'Quinto post',
		body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
		active: true,
		type: 'news',
    author:'Carlo'

	}
]

export function getPosts() {
	return posts;
}

export function updatePost(data: Partial<Post>, id: number) {
	posts = posts.map(post => post.id == id? {...post, ...data} : post);
	return posts.find(post => post.id == id) as Post;
}
