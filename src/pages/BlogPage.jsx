import React from "react";

const blogPosts = [
  {
    title: "Welcome to Our Blog!",
    date: "2024-06-01",
    author: "Club President",
    summary: "An introduction to our new blog and what to expect.",
    content: "This is a sample post. Edit or add more posts in the blogPosts array!"
  },
  // Add more posts here
];

const BlogPage = () => (
  <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">Blog & News</h1>
    <div className="space-y-8">
      {blogPosts.map((post, idx) => (
        <div key={post.title + idx} className="bg-black-100 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <div className="text-xs text-secondary mb-2">{post.date} | {post.author}</div>
          <p className="mb-2">{post.summary}</p>
          <div className="text-sm text-secondary">{post.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogPage; 