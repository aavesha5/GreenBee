
const validation = (values) => {

let errors={};

if(!values.fullname){
    errors.fullname="Name is required"
}

if(!values.email){
    errors.email="Email is required"
} else if (!/\S+@\S+\.\S+/.test(values.email)){
errors.email="Email is invalid"
}


if (!values.mobile){
    errors.mobile="Contact number is required ."
    }
    else if (values.mobile.length > 10){
        errors.mobile="Enter valid contact number."
        } 

        if (!values.user){
            errors.user="Username is required."
            }
            else if (values.user.length > 8){
                errors.user="Username must be within eight characters ."
                } 


if(!values.password){
    errors.password="Password is required"
} else if (values.password.length <5 ){
errors.password="Password must be more than five characters."
}

if (!values.cpassword){
errors.cpassword="Confirm your password."
}
else if (values.cpassword !== values.password){
    errors.cpassword="Confirm Password must be same as password."
    } 



  return errors;
};

export default validation