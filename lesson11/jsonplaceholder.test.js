const {default: axios} = require("axios");

describe("Post tests", () => {
    test("Get 1post", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        const post = await response.data;
        expect(post.id).toBe(2);
        expect(post.userId).toBe(1);
    });
});
