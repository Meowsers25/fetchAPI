document.getElementById('get-text').addEventListener
('click', getText);

document.getElementById('users').addEventListener
('click', getUsers);

document.getElementById('posts').addEventListener
('click', getPosts);

document.getElementById('addPost').addEventListener
('submit', addPost);

function getText(){
	//console.log(1, 2, 3);
	// fetch('script.txt')
	// .then(function(res){
	// 	//console.log(res);
	// 	return res.text();
	// })
	// .then(function(data){
	// 	console.log(data);
	// });
	fetch('script.txt')
	.then((res) => res.text())
	//.then((data) => console.log(data))
	.then((data) => {
		document.getElementById('output').innerHTML = data;
	})
	.catch((err) => console.log(err))
}

function getUsers(){
	fetch('users.json')
	.then((res) => res.json())
	//.then((data) => console.log(data))
	.then((data) => {
		let output = '<h2>Users</h2>';
		data.forEach(function(user){
			output += `
				<ul>
					<li>ID: ${user.id}</li>
					<li>Name: ${user.name}</li>
					<li>Email: ${user.email}</li>
				</ul>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
}

function getPosts(){
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => res.json())
	//.then((data) => console.log(data))
	.then((data) => {
		let output = '<h2>Posts</h2>';
		data.forEach(function(post){
			output += `
				<div>
					<h3 style="color: red">${post.title}</h3>
					<p>${post.body}</p>
				</div>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
}

function addPost(e){
	e.preventDefault();
	let title = document.getElementById('title').value;
	let body = document.getElementById('body').value;
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({title:title, body:body})
	})
	.then((res) => res.json())
	.then((data) => console.log(data))
}

