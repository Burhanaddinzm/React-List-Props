const BlogList = (props) => {
    //Reciving prop.blogs
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <span>{blog.author}</span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
