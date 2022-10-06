import axios from "axios";

const createUser = async(name:string, email:string):Promise<any> =>{
    const url = 'https://vocally-backend.uxnation.repl.co'
    let result:any;
    const user ={
      name,
      email
    }
    try{
     const response = axios.post(url+'/api/create-user',user);
     result = response;
    }catch(err){
     result = err;
    }
    return result;
}

export default createUser;