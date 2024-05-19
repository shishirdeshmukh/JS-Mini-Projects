# Projects Related to Dom

## Project link

# Solution Code

## Project1

``` javascript

const buttons = document.querySelectorAll('.button')

const  body = document.querySelector('body')

buttons.forEach((button)=> {

    button.addEventListener('click' , function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }else
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }else
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
     
})


```

## Project2

``` javascript
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




```



## Project3

``` javascript

const clock =document.getElementById('clock')


setInterval(()=>{
    let date = new Date();
   // console.log(date.toLocaleString());
    clock.innerHTML= date.toLocaleTimeString()
},1000)

```



## Project4

``` javascript


```


