// function fetchPost(reject) {
//    return fetch("https://jsonplaceholder.typicode.com/posts/1");
// }

// fetchPost()
// .then(response => response.json())
// .then(post => console.log(post));

function fetchPost(potId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${potId}`);
}

fetchPost(1)
.then((response) => response.json())
.then((post) => console.log(post));

function fetchComments(potId) {
    return Promise.all([fetch(`https://jsonplaceholder.typicode.com/comments?postId=${potId}`)]);
}

fetchComments(1)
.then(([response]) => response.json())
.then((comments) => console.log(comments));
