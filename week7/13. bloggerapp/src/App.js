import BlogDetails from "./BlogDetails"
import BookDetails from "./BookDetails"
import CourseDetails from "./CourseDetails"

const App = ()=>{
  return(
    <>
   <div style={{display:"flex", justifyContent:"center",gap:"6remq ", marginTop:"20px"}}>
     <BookDetails/>
    <BlogDetails/>
    <CourseDetails/>
   </div>
    </>
  )
}

export default App;