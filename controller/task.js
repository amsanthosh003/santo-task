const taskSchema = require('./../model/task');
const errorHandler = require('../utils/error.handler');

class taskController{
	
	async add(farm){
		try{
			let response = await taskSchema.create(farm);
			return { status: "success",   msg:"task Added successfully",
			          result: response, message: "Added Successfully" };
		   }
	    catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let responce=await taskSchema.aggregate([
                {$lookup:
                    {
                      from: "employees",
                      localField: "Assigned",
                      foreignField: "_id",
                      as: "assignedDetails"
                    }
                  },
                 
                  {$lookup:
                        {
                            from: "status",
                            localField: "Status",
                            foreignField: "_id",
                            as: "statusDetails"
                          }
                        } ,
                
                    ]);
            return {
				response: responce,
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
			let response = await taskSchema.find({'_id':id});
			
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

	async delete(id){
		try{
			let responce = await taskSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: responce
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await taskSchema.update({_id: id}, body);
            return { status: "success", msg:"task Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

}
module.exports = new taskController();