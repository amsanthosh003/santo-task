const statusSchema = require('./../model/status');
const errorHandler = require('./../utils/error.handler');


class statusController {

    async add(farm){
		try{
			let response = await  statusSchema.create(farm);
			return { status: "success",   msg:" Added successfully",
             result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){

            try{
                let response = await statusSchema.find({});
          //      let count=Object.keys(response).length;// obj.key() =returns object in array.(count=[].length)
                return {
                    response: response,
                };
            } catch(error){
                return {
                    status: "error",
                    error: errorHandler.parseMongoError(error)
                };
            }
	}

	async fetchdata(id){
		try{
			let response = await statusSchema.find({_id: id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	
}


module.exports=new statusController();