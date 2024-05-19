const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML=`Please give a Valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML=`Please give a Valid weight ${weight}`
    }else{
        const bmi = (weight / Math.pow(height/100,2)).toFixed(2);
        if(bmi < 18.5){
            results.innerHTML=`Your BMI is ${bmi} and you are underweight.`
            }else if(bmi >= 18.5 && bmi < 25){
                results.innerHTML=`Your BMI is ${bmi} and you are in normal Range.`
                }else if(bmi >= 25 && bmi < 30){
                    results.innerHTML=`Your BMI is ${bmi} and you are overweight.`
                    }else if(bmi >= 30){
                        results.innerHTML=`Your BMI is ${bmi} and you are obese.` 
                        }

    }

})


