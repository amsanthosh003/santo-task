const employeeSchema = require('./../model/employee');
const errorHandler = require('../utils/error.handler');

class employeeController{
	
	async add(farm){
		try{
			let response = await employeeSchema.create(farm);
			return { status: "success",   msg:"class Added successfully",
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
			let responce=await employeeSchema.aggregate([
                {$lookup:
                  {
                    from: "tasks",
                    localField: "Task",
                    foreignField: "_id",
                    as: "taskDetails"
                  }
                }  ,
                {$lookup:
                    {
                        from: "status",
                        localField: "Status",
                        foreignField: "_id",
                        as: "statusDetails"
                      }
                    } 
                    
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
			let response = await employeeSchema.find({'_id':id});
			
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
			let responce = await employeeSchema.deleteOne({_id: id});
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
            let response = await employeeSchema.update({_id: id}, body);
            return { status: "success", msg:"class Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

}
module.exports = new employeeController();