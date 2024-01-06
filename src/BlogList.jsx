// const BlogList = (props)
// Reciving prop.blogs
// const blogs = props.blogs; or

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <h4>{blog.author}</h4>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
