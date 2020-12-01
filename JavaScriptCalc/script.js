
const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const allClearButton=document.querySelector('[data-allClear')
const delButtons=document.querySelector('[data-del]')
const preOperandTextElement=document.querySelector('[data-preOp]')
const curOperandTextElement=document.querySelector('[data-curOp]')



class Calculator{
    constructor(preOperandTextElement,curOperandTextElement){
        this.preOperandTextElement=preOperandTextElement
        this.curOperandTextElement=curOperandTextElement
        this.clear()

    }
    clear(){
        this.curOperand=""
        this.preOperand=""
        this.operation=undefined
    }
    delete(){}
    appendNumber(number){
        this.curOpernad=number
    }
    chooseOperation(operation){}
    compute(){}
    updateDisplay(){
        this.curOperandTextElement.innerText=this.curOperand
    }

}

const calculator=new Calculator(preOperandTextElement,curOperandTextElement)
numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{

    
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()})
})

