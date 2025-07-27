import React,{Component} from "react";

class Trainer extends Component{
    constructor(trainerId, name, email, phone, technology, skills) {
      super(trainerId, name, email, phone, technology, skills);
    this.trainerId = trainerId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.technology = technology;
    this.skills = skills;
  }
}

export default Trainer;
