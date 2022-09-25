
const validation = (values) => {

let errors={};

if(!values.fname){
    errors.fname="First name is required"
}
else if (!/^[a-zA-Z]{5,20}$/.test(values.fname)){
    errors.fname="Enter valid name."
    } 


if(!values.lname){
    errors.lname="Last name is required"
}
else if (!/^[a-zA-Z]{5,20}$/.test(values.lname)){
    errors.lname="Enter valid name."
    } 



if(!values.email){
    errors.email="Email is required"
} else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
errors.email="Email is invalid"
}


if (!values.mobile){
    errors.mobile="Contact number is required ."
    }
    else if (!/^[0-9]{10}$/.test(values.mobile)){
        errors.mobile="Enter valid contact number."
        } 

        if (!values.user){
            errors.user="Username is required."
            }
            else if (!/^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(values.user) ){
                errors.user="Username must be alphanumeric and '.' or'_' in between."
                } 


if(!values.password){
    errors.password="Password is required"
} else if (!/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,20}$/.test(values.password)){
errors.password="Password is not valid."
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