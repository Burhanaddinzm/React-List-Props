import { useState } from "react";
import BlogList from "./BlogList";

function App() {
  //Creating list
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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  return (
    //Passing properties
    <div className="content">
      <BlogList
        blogs={blogs}
        title={"All Blogs!"}
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario blogs!"}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
