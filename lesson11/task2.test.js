const newPost = {
    title: 'My new post',
    body: 'This is the content of my new post.',
    userId: 1
};

describe("Create a new post", () => {
    test("Create post", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const createdPost = await response.json();
        expect(response.status).toBe(201);
        expect(createdPost.id).toBe(101);
    
    } )     
 })