import {ContextFunction} from "@apollo/server";
import {StandaloneServerContextFunctionArgument} from "@apollo/server/standalone";

const SetContext: ContextFunction<[StandaloneServerContextFunctionArgument]> = async ({req, res}) => {
	return {
		response: res,
		request: req,
		headers: req.headers,
		token: req.headers.authorization || "",
	};
}

export default SetContext