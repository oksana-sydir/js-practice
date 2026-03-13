describe("update post #1", () => {
    test("update post", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "Put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated 1rst post",
                body: "This is the updated content of the post #1.",
                userId: 1,
            }),
        });
        const updatedPost = await response.json();
        expect(response.status).toBe(200);
        expect(updatedPost.title).toBe("Updated 1rst post");
        expect(updatedPost.body).toBe("This is the updated content of the post #1.");
    });
});
