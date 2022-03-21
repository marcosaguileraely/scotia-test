const fieldsValidation = function (fields) {
    console.log("here validation")
    console.log(fields)

    let evaluator = {
        street_number : "",
        street_name : "",
        city : "",
        province : "",
        postal_code : "",
        type : "",
        job_status : ""
    }
    evaluator.allow = true

    //Validating TYPE value depending of FORM_CONTEXT  
    if(fields.context === "employment_form"){
        if (fields.type === "") {
            evaluator.type = "Type is required"
            evaluator.allow = false
        }if (fields.type === "STUD") {
            evaluator.type = "Type Student is not allowed. Registration only for Employee"
            evaluator.allow = false
        }if (fields.type === "RET") {
            evaluator.type = "Type Retired is not allowed. Registration only for Employee"
            evaluator.allow = false
        }if (fields.type === "EMP") {
            evaluator.type = ""
            evaluator.allow = true
        }
    }

    if (fields.street_number === "") {
        evaluator.street_number = "Street number is required"
        evaluator.allow = false
    }if (fields.street_number.length < 3) {
        evaluator.street_number = "Street number is too short"
        evaluator.allow = false
    }if (fields.street_number.length > 10) {
        evaluator.street_number = "Street number is too long"
        evaluator.allow = false
    }if (isNaN(fields.street_number)) {
        evaluator.street_number = "Street number must be a number"
        evaluator.allow = false
    }if (fields.street_name === "") {
        evaluator.street_name = "Street name is required"
        evaluator.allow = false
    }if (fields.street_name.length < 3) {
        evaluator.street_name = "Street name is too short"
        evaluator.allow = false
    }if (fields.city === "") {
        evaluator.city = "City is required"
        evaluator.allow = false
    }if (fields.city.length < 3) {
        evaluator.city = "City is too short"
        evaluator.allow = false
    }if (fields.city.length > 50) {
        evaluator.city = "City is too long"
        evaluator.allow = false
    }if (fields.province === "") {
        evaluator.province = "Province is required"
        evaluator.allow = false
    }if (fields.province === "QC") {
        evaluator.province = "Province Quebec is not allowed. Please select another province"
        evaluator.allow = false
    }if (fields.postal_code === "") {
        evaluator.postal_code = "Postal code is required"
        evaluator.allow = false
    }if (fields.postal_code.length !== 6) {
        evaluator.postal_code = "Postal code must contain 6 digits"
        evaluator.allow = false
    }

    return evaluator
}

export default fieldsValidation;