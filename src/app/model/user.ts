export interface SingleUser{
    userId : string,
    username: string,
    password :string,
    email :string,
    age :  Number,
    description: string;
    gender :string,
    address: {
        zip: Number,
        state: string
    },
    projectId : string,
    projectName : string,
    departmentName : string,
    skills : []
  }