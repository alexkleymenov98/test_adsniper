
export type TypeID<S> = {
    id: S;
}

function genFetchData<T, S = unknown>(url:string){
    return function(arg?:TypeID<S>):Promise<T>{
        return new Promise(async function(resolve){
            fetch(arg ? `${url}?usrId=${arg.id}`: url).then((res)=>{
                const data = res.json() as Promise<T>;
                resolve(data);
            })
        });
    }
}
export default genFetchData