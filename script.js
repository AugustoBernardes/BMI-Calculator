// Calculate de BMI  (IMC)
// To calculate the IMC we use weight / height squared

// Get the weight
let inputWei = document.getElementById("inp1")
// Get the Height
let inputHei = document.getElementById("inp2")


let result = document.getElementById("result")

function calculate(){
    console.log("calculating")

    let weight = inputWei.value 
    let height = inputHei.value / 100


    let total = (weight / (height*height))

    result.innerHTML = `<p>Your IMC is ${Math.floor(total)}<p/>
                             <table>
                                <tr >
                                  <th>IMC</th>
                                  <th>CLASSIFICATION</th>
                                </tr>
                                <tr class = "tbText">
                                  <td>Less than 18,5</td>
                                  <td>Thinness</td>
                                </tr>
                                <tr class = "tbText">
                                  <td>Between 18,5 and 24,9</td>
                                  <td>Normal</td>
                                </tr>
                                <tr class = "tbText">
                                    <td>Between 25,0 and 29,9</td>
                                  <td>Overweight</td>
                                </tr>
                                 <tr class = "tbText">
                                    <td>Between 30 and 39,9</td>
                                  <td>Obesity</td>
                                </tr>
                                <tr class = "tbText">
                                    <td>More than 40</td>
                                  <td>Severe Obesity</td>
                                </tr>
                            </table>`

   
    
}






