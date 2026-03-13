describe("Delete post #1", () => {
    test("Delete post", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        });
        expect(response.status).toBe(200);
    });
});
