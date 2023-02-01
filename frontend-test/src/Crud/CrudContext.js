import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../Auth/UserContext";

export const CrudContext = createContext()

export const CrudProvider = (props) => {
    const [user] = useContext(UserContext);
    const tokenCrud = user ? user.token : null;
    const [listUser, setListUser] = useState([])
    useEffect(()=>{
        const users = async () => {
            const result = await axios.get("https://cms-admin.ihsansolusi.co.id/testapi/user", {headers: {"Authorization" : "Bearer "+ tokenCrud}})
                .then((res) => {
                    return res.data
                })
                .catch((err) =>{
                    console.log(err)
                })
            setListUser(result)
        }
        users()
    }, [])
   
    return(
        <CrudContext.Provider value={[listUser, setListUser]}>
            {props.children}
         </CrudContext.Provider>
    )
    
}