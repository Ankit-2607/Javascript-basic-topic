// CLASSES

class Railwayform {
    constructor(parameters) {
        
    }
    submit(){
        alert(this.name + ': your from is submitted for train number : ' + this.trainNo)
        console.log('form is submit')
    }
    cancel(){
        alert(this.name + ': This form is cancelled for train numeber : ' + this.trainNo)
    }
    fill(givenname , trainNo){
        this.name = givenname
        this.trainNo = trainNo
    }
}

//create a form for Ritik
let ritikForm = new Railwayform()
//fill the form with ritik's details
ritikForm.fill('ritik' , 411325)

// // Creat a form for ankit
// let ankitForm = new Railwayform()
// // Fill the form with ankit's details
// ankitForm.fill('ankit' , 879654)

// Creat a form for ankit
let ankitForm1 = new Railwayform()
let ankitForm2 = new Railwayform()
// Fill the form with ankit's details
ankitForm1.fill('ankit' , 879654)
ankitForm2.fill('ankit' , 865675)



ritikForm.submit()
ankitForm1.submit()
ankitForm2.submit()
ankitForm1.cancel()