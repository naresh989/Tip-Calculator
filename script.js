/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
billinput_div=document.getElementById("billTotalInput")
tipinput_div=document.getElementById("tipInput")
noofpeople_div=document.getElementById("numberOfPeople")
perPersonTotal_div=document.getElementById("perPersonTotal")


// Get number of people from number of people div

  noofpeople = Number(noofpeople_div.innerText)
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
   bill_amount=Number(billinput_div.value)
    console.log(bill_amount)

  // get the tip from user & convert it into a percentage (divide by 100)
  Tip_cent = Number(tipinput_div.value)/100
  console.log(Tip_cent)

  // get the total tip amount
   Tip_amount = bill_amount * Tip_cent;

  // calculate the total (tip amount + bill)
    Total_bill = bill_amount+Tip_amount;

  // calculate the per person total (total divided by number of people)
     let Total_perperson = Total_bill/noofpeople

  // update the perPersonTotal on DOM & show it to user
    perPersonTotal_div.innerText=`$${Total_perperson.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
    let p = Number(noofpeople_div.innerText)+1

  // update the DOM with the new number of people
     
   noofpeople_div.innerText = p
  // calculate the bill based on the new number of people
  // calculate the per person total (total divided by number of people)
      Total_perperson = Total_bill/p

  // update the perPersonTotal on DOM & show it to user
   perPersonTotal_div.innerText=`$${Total_perperson.toFixed(2)}`

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
      if(noofpeople_div.innerText<=1)
      {
        return
      }
  
    let p = noofpeople_div.innerText-1

  // update the DOM with the new number of people
     
   noofpeople_div.innerText = p
  // calculate the bill based on the new number of people
  // calculate the per person total (total divided by number of people)
      Total_perperson = Total_bill/p

  // update the perPersonTotal on DOM & show it to user
    perPersonTotal_div.innerText=`$${Total_perperson.toFixed(2)}`
  
  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}