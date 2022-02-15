
export const getUsersFetch=()=>{
    return fetch('https://randomuser.me/api/?page=3&results=20')
    .then(res => res.json())
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

export const createUserFetch =(user) =>{
    return "employee created"
}

       

   
 

