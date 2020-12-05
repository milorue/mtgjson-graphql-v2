import {Context, ContextFunction} from 'apollo-server-core'
import { ExpressContext } from "apollo-server-express/src/ApolloServer";
import MTGLog from '../Logger';

const SetContext: ContextFunction<ExpressContext, Context> | Context = ({req, res}) => {
    let response;
	if (res) {
		response = res;
	}
	
	let request;
	if (req) {
		request = req
	}
    
	return {
		response,
		request,
		headers: req.headers,
		token: req.headers.authorization || "",
	};
}

export default SetContext