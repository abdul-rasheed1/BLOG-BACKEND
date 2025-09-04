export class Post{
	constructor(title,writer,content){
		this.title = title;
		this.writer = writer;
		this.content = content;
		this.id = Post.UID();
		this.time = new Date();

	}


	static UID(){
	return Date.now().toString(36)+Math.random().toString(36).substring(2);
	}


}

export class Blogger {
	constructor(){
		this.posts = [];
	}

	createPost (title,writer,content){
		const post = new Post(title,writer,content);
		this.posts.push(post);
		return post;
	}

	getPosts(){
		const allPosts = [...this.posts];
		return allPosts;
	}

	findPostById(id){
		const postItem = this.posts.find((element)=>element.id === id);
		return postItem;
	}

	deletePost(id){
		this.posts = this.posts.filter((element)=> element.id !== id );
	}


}