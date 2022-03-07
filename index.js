function getBirthDateName(){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Birthdate=document.getElementById("dob").value;
    let Gender=document.getElementsByName("gender");
    let birthday=new Date(Birthdate);
    let weekdayName=birthday.getDay();
    let maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if(male.checked){
        window.alert(birthday && maleAkanNames[weekdayName])
}else if(female.checked){  window.alert(birthday && femaleAkanNames[weekdayName])
}else{
    window.alert("Invalid!Please Choose gender and input Date of Birth")
}}
