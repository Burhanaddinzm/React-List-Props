import { useState } from "react";

function App() {
  const [blogs, setBlog] = useState([
    { title: "My new website", body: "Lorem Ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "Lorem Ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "Lorem Ipsum...",
      author: "luigi",
      id: 3,
    },
  ]);

  return (
    <div className="content">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <span>{blog.author}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
