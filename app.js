const convert = document.querySelector(".button")
convert.addEventListener("click", button)

function button(event){
    event.preventDefault()
   
    let celcius = document.querySelector(".inputcelcius").value

    if(celcius === ""){ 
        alert("oops! Temperature cannot be empty!")
    }else{
    let farenheit = (celcius * 9/5) + 32
    document.querySelector(".celciuscircle").textContent = (celcius + "℃")  
     document.querySelector(".farenheitcircle").textContent = (farenheit.toFixed(2) + "℉")
    }
}
const buttonreset = document.querySelector(".reset-btn")

               buttonreset.addEventListener("click", reset) 


                  function reset(){
                document.querySelector(".celciuscircle").innerHTML = ("0°c")
                document.querySelector(".farenheitcircle").innerHTML = ("0°F")

                }

                document.querySelector(".reset-btn").addEventListener("click",inputField)
              function inputField(){
                let inputField = document.querySelector(".inputcelcius")
                inputField.value = ""
              }

