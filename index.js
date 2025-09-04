import {Post,Blogger} from './post.js'

const blogManager = new Blogger();

const p1 = blogManager.createPost('COOK','Rasheed','boil 1 cubic meter of water');

const p2 = blogManager.createPost('COOK','Rasheed','boil 2 cubic meter of water');

const p3 = blogManager.createPost('COOK','Rasheed','boil 3 cubic meter of water');


console.log(blogManager.getPosts());

	blogManager.deletePost(p2.id);

console.log(blogManager.getPosts());






