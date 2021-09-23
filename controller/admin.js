const adminSchema = require('./../model/admin');
const errorHandler = require('./../utils/error.handler');


class adminController {


    async register(newadmin){
        try{
             await adminSchema.create(newadmin);
        return {  status: 'success',
                msg: 'User created'}    
           }
        catch(err){
            return { status: 'error',
                     msg: 'User creation failed' }
    }}

    async login(responce){
        let name =responce.name;
        let password=responce.password;
        try{ let student = await adminSchema.findOne({
                name: name,
                password: password });

        if(!student) {
                throw new Error('invalid creds');  }

        return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };
        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }

    async add(farm){
		try{
			let response = await adminSchema.create(farm);
			return { status: "success",   msg:" Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){

            try{
                let response = await adminSchema.find({});
              //  let count=Object.keys(response).length;// obj.key() =returns object in array.(count=[].length)
                return {
                    response: response,
                 //   count
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
			let response = await adminSchema.find({_id: id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await adminSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
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
            let response = await adminSchema.update({_id: id}, body);
            return { status: "success", msg:" Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }
}
}


module.exports=new adminController();