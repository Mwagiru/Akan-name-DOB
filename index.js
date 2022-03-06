function getBirthDateName(){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Birthdate=document.getElementById("dob").value;
    let Gender=document.getElementsByName("gender").value;
    let birthday=new Date(Birthdate);
    let weekdayName=birthday.getDay();
    let maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if(Gender==="male"){
        window.alert(birthday && maleAkanNames[weekdayName])
    
}else if(Gender==="female"){  window.alert(birthday && femaleAkanNames[weekdayName])
}else{
    window.alert("Input Values!!");
}
}