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

  return (
    //Passing blogs as a property
    <div className="content">
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
