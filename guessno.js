// const form=document.getElementsByClassName('form')

// form.addEventListener(('submit'),function(e){
//     e.preventDefault()
// })


const guessnumber= (parseInt(Math.random()*100)+1)

const userinput=document.querySelector('#guessField')

const loworHi=document.querySelector('.loworHi')

const submt=document.querySelector('#subt')

let prevguess=document.querySelector('.guesses')

let remguess=document.querySelector('.lastResult')


let p=document.createElement('button')

let playgame=true

let totguesses=[]
let rem=10



if(playgame){
   submt.addEventListener('click',function(e){
     e.preventDefault()

     const guess=parseInt(userinput.value)
    
     chkvalidation(guess)
     
   })
}


function chkvalidation(guess){
    
    if(isNaN(guess)){
        alert('Please enter a valid number')
        userinput.value=''
    }else if(guess<0){
        alert("Please enter number between 1 and 100")
        userinput.value=''
    }else if(guess>100){
        alert("Please enter a valid number")
        userinput.value=''
    }else{
       

        if(rem<=0){
            alert("Game is over!!!")
             userinput.value=''
             userinput.setAttribute('disabled','')
             submt.setAttribute('disabled','')
             p.innerHTML='Start New Game'
             p.className='startnew'
             document.body.appendChild(p)
             
             const startnew=document.querySelector('.startnew')
             p.addEventListener('click',function(e){
                userinput.removeAttribute("disabled")
                submt.removeAttribute("disabled")

             })

             

        }else{
            totguesses.push(guess)
            // console.log(rem)
            prevguess.innerHTML=`${totguesses}`
            rem=rem-1
            remguess.innerHTML=`${rem}`
            
        }
   
    }

   
}

function chklowHigh(guess){
    if(guess===guessnumber){
        alert("You entered right no")

    }else if (guess<guessnumber){
        alert("You entered too low")
        userinput.value=''
    }else if(guess > guessnumber){
        alert("You entered too high")
        userinput.value=''
    }
}


