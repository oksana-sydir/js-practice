function fetchPost(postId) {
    return new Promise((resolve) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    });
}

fetchPost(1)
.then((response) => response.json())
.then((post) => console.log(post));

function fetchComments({postId}) {
    return new Promise((resolve) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json())
        .then((comments) => console.log(comments));
    });
}

fetchComments({postId: 1})
.then();
