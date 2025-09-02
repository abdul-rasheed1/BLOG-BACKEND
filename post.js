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