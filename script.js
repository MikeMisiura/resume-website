let randomAdvice = new XMLHttpRequest();
randomAdvice.open('GET', 'https://api.adviceslip.com/advice', true);
randomAdvice.send();

randomAdvice.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            // Parse the response to a variable
            let myAdvice = JSON.parse(this.responseText);
            
            // add the innerHTML
            document.getElementById("adviceLoc").innerHTML = myAdvice.slip.advice;
        } else {
            console.log("Error processing Request")
        }
    }
}