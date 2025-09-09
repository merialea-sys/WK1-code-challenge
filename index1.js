//Challenge 1
function studentMarks(marks){
//marks should not exceed 100
  if (marks >79 && marks <=100){
    return "A";
// execute if marks is above 79 and less than or equal to 100
  }
  else if (marks >=60 && marks <=79){
    return "B"
// execute if marks is from 60 to 79
  }
  else if (marks >=50 && marks <=59){
    return "C"
// execute if marks is from 50 to 59
  }
  else if (marks >=40 && marks <=49){
    return "D"
//execute if marks is from 40 to 49
  }
  else if (marks <40){
    return "E"
//execute if marks is less than 40
  }
  else if (marks >100){
    return "Not Applicable"
  }

}
