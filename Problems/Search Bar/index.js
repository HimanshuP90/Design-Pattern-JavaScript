let count = 0;
const getApiData = () =>{
    console.log('fetching data ....', count++)
}

const debounce = function(fn, delay){
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(context, args)
        }, delay)
    }
}


const getListOfSearchData = debounce(getApiData, 300);
// debounce : if the difference between two keystroke is greater than 300ms then only make api call ot function call not in each keystroke



// Throttle: only make the function call after certain a limit of time i.e. upto 300ms ignore each function call

const loggerFunc = () => {
    console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  
  window.addEventListener("resize",betterLoggerFunction);
  
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 
  const normalFunc = () => {
    console.count("Normal Function");
  }
  
  window.addEventListener("resize",normalFunc);
  
  