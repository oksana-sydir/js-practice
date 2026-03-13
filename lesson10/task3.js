async function fetchPost(potId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${potId}`);
    const post = await response.json();
     console.log(post);
}

async function fetchComments(potId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${potId}`);
    const comments = await Promise.all([response.json()]);
     console.log(comments);
} 


try {
    fetchPost(1);
    fetchComments(1);
} catch (error) {
    console.error("Error fetching data:", error);
}

async function fetchPostAndComments(potId) {  
  Promise.all([fetch(`https://jsonplaceholder.typicode.com/posts/${potId}`), 
               fetch(`https://jsonplaceholder.typicode.com/comments?postId=${potId}`)])
    .then(([postResponse, commentsResponse]) => Promise.all([postResponse.json(), commentsResponse.json()]))
    .then(([post, comments]) => {
        console.log("Post:", post);
        console.log("Comments:", comments);
    })
    .catch(error => console.error("Error fetching data:", error));
}   

fetchPostAndComments(1);
