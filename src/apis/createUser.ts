import axios from "axios";

const createUser = async(name:string, email:string):Promise<any> =>{
    let result:any;
    const user ={
      name,
      email
    }
    try{
     const response = axios.post('http://localhost:3000/api/create-user',user);
     result = response;
    }catch(err){
     result = err;
    }
    return result;
}

export default createUser;