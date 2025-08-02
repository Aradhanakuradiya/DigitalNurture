import React from 'react';

const CourseDetails = () => {
  const courses = [
    {id:11,  name: "Angular", date: "4/5/2021" },
    { id:12, name: "React", date: "6/3/2021" },
  ];

  return (
    <div style={{padding:"10px"}}><br></br>
      <h3>Course Details</h3>

        {courses.map((course) => (
        <div key={course.id}>
             <h5>{course.name}</h5>
         <p>{course.date}</p>
         </div>
        ))}
    </div>
  );
};

export default CourseDetails;
