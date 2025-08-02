

const BookDetails = ()=>{
    const books = [
        {id:101,bname:'Master-React',price:670},
        {id:102,bname:'Master-Node',price:780},
        {id:103,bname:'Master-Angular',price:890}
    ];
    return(
        
       <div style={{borderRight: "5px solid green" , padding: "20px"}}>
         <h3>Book Details</h3>
        {books.length > 0 ? 
        <>
          {
        books.map((books) => (
            <>
            <h5>{books.bname}</h5>
          <h6>{books.price}</h6>
         
            </>
        ))}
        </>
     : null}
     
       </div>
    )
}

export default BookDetails;