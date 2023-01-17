const card_nummber= document.querySelector('p.card_nummber');
const card_holder_username= document.querySelector('span.card_holder_username');
const card_cvc_nummber= document.querySelector('p.card_back_nummber');
const insert_date= document.querySelector('span.insert_date');
const date_obj= new Date;
const today_date= date_obj.getDate().toLocaleString();
console.log(today_date);
const current_month = date_obj.getMonth().toLocaleString();
console.log(current_month);




const confirm_btn= document.getElementById("confirm_btn");

const Card_Username= document.getElementById("card_holder_name");
const card_number= document.getElementById("card_holder_number_text");
const Exp_date_month= document.getElementById("Exp_date_mm");
const Exp_date_year= document.getElementById("Exp_date_YY");
const CVC_number= document.getElementById("CVC_number");

const submit_form= document.querySelector('form.car_details_input_form');

submit_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const car_holder_name_val= document.getElementById("card_holder_name").value.trim();
    const card_holder_number_text_val= document.getElementById("card_holder_number_text").value.trim();
    const Exp_date_month_val= document.getElementById("Exp_date_mm").value;
    const Exp_date_year_val= document.getElementById("Exp_date_YY").value;
    const CVC_number_val= document.getElementById("CVC_number").value;

            // console.log("the username is correct "+ car_holder_name);

    const validate_data=()=>{
        if(car_holder_name_val==""){
            console.log("the username is correct "+ car_holder_name_val);
            errorMsg(Card_Username, "Username Cannot be empty");

        }
        else if(car_holder_name_val.includes("@")==true){
            errorMsg(Card_Username, "@ cannot be used In Username");
        }
        else{
            successMsg(Card_Username);
        }
        //validating card number
        if(card_holder_number_text_val==""){
            console.log("The Card number cannot be empty"+ car_holder_name_val);
            errorMsg(card_number, "The Card number cannot be empty");

        }
        else if((card_holder_number_text_val.length)!=16){
            errorMsg(card_number, "The card number must be 16 digits");

        }
        else{
            successMsg(card_number);
        }

        // Validating exp-date-month
        if(Exp_date_month_val==""){
            console.log("The Card number cannot be empty"+ car_holder_name_val);
            errorMsg(Exp_date_month, "Invalid");

        }
        else if((Exp_date_month_val.length)!=2){
            errorMsg(Exp_date_month,"Invalid");

        }
        else if(Exp_date_month_val>12 || Exp_date_month_val<1){
            errorMsg(Exp_date_month, "Invalid");

        }
        else{
            successMsg(Exp_date_month);
        }
        //Validating exp-date-year
        if(Exp_date_year_val==""){
            console.log("This filed cannot be empty"+ car_holder_name_val);
            errorMsg(Exp_date_year, "Invalid");

        }
        else if((Exp_date_year_val.length)!=2){
            errorMsg(Exp_date_year, "Invalid");

        }
        else if(Exp_date_year_val<=31 && Exp_date_year_val>1){
            errorMsg(Exp_date_year, "Invalid");

        }
        else{
            successMsg(Exp_date_year);
        }
        //validating CVC Number here
        
        if(CVC_number_val==""){
            console.log("This filed cannot be empty"+ car_holder_name_val);
            errorMsg(CVC_number, "Invalid");

        }
        else if((CVC_number_val.length)!=3){
            errorMsg(CVC_number, "Invalid");

        }
        else{
            successMsg(CVC_number);
        }
    }
    validate_data();

    card_nummber.innerHTML=card_holder_number_text_val;
    card_holder_username.innerHTML=car_holder_name_val;
    card_cvc_nummber.innerHTML=CVC_number_val;
    insert_date.innerHTML= today_date + "/"+ current_month;


    // console.log(car_holder_name);
    // console.log(card_holder_number_text);
    // console.log(Exp_date_month);
    // console.log(Exp_date_year);
    // console.log(CVC_number);
   


});
function errorMsg(input_name, error_text){
    const formcontrol = input_name.parentElement;
    formcontrol.className="form-control error";
    const show_error = formcontrol.querySelector('small');
    show_error.innerHTML=error_text;
    console.log(error_text);

}

function successMsg(input_name){
    const formcontrol = input_name.parentElement;
    formcontrol.className="form-control success";
 
    console.log("the valkue of username is true");


}




