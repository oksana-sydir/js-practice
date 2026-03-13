
describe("Get post #1", () => {
    test("Get post", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const post = await response.json();
//console.log(post);
expect(response.status).toBe(200),
expect(post).toHaveProperty('id'),
expect(post).toHaveProperty('userId'),
expect(post).toHaveProperty('title'),
expect(post).toHaveProperty('body')
    })
  })