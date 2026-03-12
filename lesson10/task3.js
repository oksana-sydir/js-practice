async function fetchPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response;
}

fetchPost(1)
.then((response) => response.json())
.then((post) => console.log(post));

async function fetchComments({postId}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response;
}

fetchComments({postId: 1})
.then((response) => response.json())
.then((comments) => console.log(comments));

async function getPostAndComments(postId) {
    const postResponse = await fetchPost(postId);
    const post = await postResponse.json();
    console.log(post);

    const commentsResponse = await fetchComments({postId});
    const comments = await commentsResponse.json();
    console.log(comments);
}

getPostAndComments(1)
.then();