import React from "react";
import Student from "./Student";
import "./index.css";


const studentsData = [
    
        { pic: "https://i.ibb.co/B4pKckG/432733711-2312354068961572-5913265791537854259-n.jpg", name: "Jelu Mari Cajipe", email: "jjelumar@gmail.com" },
        { pic: "https://i.ibb.co/YBSkWvT/gheyl.png", name: "Gheyl R. Aguilar", email: "jjelumar@gmail.com" },
        { pic: "https://i.ibb.co/YhKgfxQ/432358124-914593556983933-1625678965418093293-n.jpg", name: "Loui Canete", email: "jjelumar@gmail.com" },
        { pic: "https://i.ibb.co/FhCL4GT/188239030-1247549975660861-8707542890700673845-n.jpg",name: "Louie Jay Jugan", email: "jjelumar@gmail.com" },
        { pic: "https://i.ibb.co/pdCS5Wq/415314778-1377061689576237-8878018506239282928-n.jpg",name: "Angel  Medez", email: "jjelumar@gmail.com" },
        { pic: "https://i.ibb.co/XkZQ8zh/29315283-1868790933131410-2153054014424481792-n.jpgname", name: "Rizal Liwa", email: "rrliwa@gmail.com" }

    ];


    const StudentsName = () => {
        const studentComponents = [];
            
        studentsData.forEach((student, i) => {
            studentComponents.push(<Student key={i} pic={student.pic} name={student.name} email={student.email} />);
        });

        return <div className="student-name">{studentComponents}</div>;
          
        return <div>{studentComponents}</div>;
    };

export default StudentsName;
