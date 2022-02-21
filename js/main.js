// Date, Month and Year
var all_day_1 = document.querySelector(".all_day_1");
var all_day_2 = document.querySelector(".all_day_2");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
switch(month){
    case 1:
        all_day_1.innerHTML = `${day} ${(month == 1) ? "January" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 1) ? "January" : "" } ${year}`;
        break;
    case 2:
        all_day_1.innerHTML = `${day} ${(month == 2) ? "February" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 2) ? "February" : "" } ${year}`;
        break;
    case 3:
        all_day_1.innerHTML = `${day} ${(month == 3) ? "March" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 3) ? "March" : "" } ${year}`;
        break;
    case 4:
        all_day_1.innerHTML = `${day} ${(month == 4) ? "April" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 4) ? "April" : "" }`;
        break;
    case 5:
        all_day_1.innerHTML = `${day} ${(month == 5) ? "May" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 5) ? "May" : "" } ${year}`;
        break;
    case 6:
        all_day_1.innerHTML = `${day} ${(month == 6) ? "June" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 6) ? "June" : "" } ${year}`;
        break;
    case 7:
        all_day_1.innerHTML = `${day} ${(month == 7) ? "July" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 7) ? "July" : "" } ${year}`;
        break;
    case 8:
        all_day_1.innerHTML = `${day} ${(month == 8) ? "August" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 8) ? "August" : "" } ${year}`;
        break;
    case 9:
        all_day_1.innerHTML = `${day} ${(month == 9) ? "September" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 9) ? "September" : "" } ${year}`;
        break;
    case 10:
        all_day_1.innerHTML = `${day} ${(month == 10) ? "October" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 10) ? "October" : "" } ${year}`;
        break;
    case 11:
        all_day_1.innerHTML = `${day} ${(month == 11) ? "November" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 11) ? "November" : "" } ${year}`;
        break;
    case 12:
        all_day_1.innerHTML = `${day} ${(month == 12) ? "December" : "" } ${year}`;
        all_day_2.innerHTML = `${day} ${(month == 12) ? "December" : "" } ${year}`;
        break;
    default:
        console.log("Error");
}