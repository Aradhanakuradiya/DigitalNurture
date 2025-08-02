import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id:1, title: "React Basics", by: 'Stephen Biz' , msg:'Welcome to learning React'},
    { id:2,title: "Hooks in Depth", by:'Schewzdenier', msg:'You can install React from npm' }
  ];

  return (
     <div style={{borderRight: "5px solid green" , padding: "20px"}}>
      <h3>Blog Details</h3>
   
     {blogs.length > 0 ? 
        <>
          {
        blogs.map((blog) => (
           
           <div   key={blog.id}>
             <h5>{blog.title}</h5>
          <h6>{blog.by}</h6>
          <p>{blog.msg}</p>
           </div>
         
        ))}
        </>
     : null}
  
    </div>
  );
};

export default BlogDetails;
