import { AuthChecker } from "type-graphql";
import { ContextInterface } from "types/interfaces/Context.interface";

const RequestTokenChecker: AuthChecker<Partial<ContextInterface>> = async({context}): Promise<boolean> => {
    // if no context is passed to the auth checker then falsy

    if(!context){
        return false
    }

    let {token} = context
    // no token was provided
    if(!token){
        return false
    }

    // wasn't sent with bearer
    else if(!token.startsWith("Bearer ")){
        return false
    }

    else{
        token = token.slice(7, token.length)

        // need to do token checking here but for now if there is any token just allow it
        if(token){
            return true
        }
        return false
    }
}

export default RequestTokenChecker