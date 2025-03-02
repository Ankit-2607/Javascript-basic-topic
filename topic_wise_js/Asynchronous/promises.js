//PROMISE

// promise with store in variable

const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // to connect with (.then) we add resolve 
    }, 1000)
});

promiseOne.then(function(){
    console.log('promise consumed');
    
})



// promise without storing promise into variable

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log('Async task two is complete');
        resolve();
    }, 1000);

}).then(function(){
    console.log('Async 2 resolved');
    
})



// promise three 

const promisethree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username : 'ankit', email : 'ritik@example.com'})
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);
})




// promise four with reject() and catch()

new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: 'ritik' , password: 1234})
        } else{
            reject('ERROR something went wrong')
        }
    }, 1000);
})
.then(function(user){
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){    //  catch() method is called whenever a promise is rejected. This method is used for error handling.
//                               This method is mainly used after .then to chain a promise and handle reject condition. 
    console.log(error);
}).finally(()=>{
    console.log('the promise is either rejected or resolved');
    
})