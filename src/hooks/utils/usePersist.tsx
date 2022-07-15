import React,{useState} from 'react'

// localStorage用のhooks
// エラーでる。。
// Error: Hydration failed because the initial UI does not match what was rendered on the server.


export const usePersist = (ky:string, initVal:any) => {
    const key = "hooks:" + ky
    const value = () => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initVal;
        }catch(err){
            console.log(err);
            return initVal;
        }
    }
    const setValue = (val:any) => {
        try{
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val));
        }catch(err){
            console.log(err);
        }
    }
    const [saveValue, setSavedValue] = useState(value);
    return [saveValue, setValue];  
}
