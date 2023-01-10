import { AuthChecker } from "type-graphql";
import { ContextInterface } from "types/interfaces/Context.interface";
import { validateAPIToken, tokenUsageIncrement } from "../services/tokenService/token.service";

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
            const isTokenValid = await validateAPIToken(token)
            if(isTokenValid){
                // this is kinda janky but it was written in the back of a bus and my ass hurts too much to
                // test it perfectly so if you have an issue against it please fix my butt hurt coding.
                return tokenUsageIncrement(token)
            }
        }
        return false
    }
}

export default RequestTokenChecker