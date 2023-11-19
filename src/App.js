import {Container,Content,Row} from './style';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

const App = () => {
  const [currentNumber,setCurrentNumber] = useState('0');
  const [firstNumber,setFirstNumber] = useState('0');
  
  const handleAddNumber = (num) =>{

    setCurrentNumber(prev=>`${prev === '0'? '' : prev}${num}`);
    setFirstNumber(prev=>`${prev === '0'? num : '0'}`);
  }

  const handkerOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
  }

  const handleSumNumbers = () => {
    console.log(currentNumber)
    if (firstNumber !== '0' && !currentNumber.includes(' ')){
       setCurrentNumber(`${currentNumber} + `);
    } else if (currentNumber.includes('+')){
      setCurrentNumber(`${currentNumber} + `)
    };
  }

  const handlerEqualSum = (listNumbers) =>{

    const num = listNumbers.split(" + ");
    let sumTotal = 0;
    for (let index = 0; index < num.length; index++) {
      sumTotal =  sumTotal + Number(num[index]);
        }
    return String(sumTotal);
      }
  const handleEqualMult = (listNumbers) =>{

    const num = listNumbers.split(" x ");
    let produto = 1;
    for (let index = 0; index < num.length; index++) {
      produto =  produto * Number(num[index]);
        }
    return String(produto);
      }
  const handelEqualMinus = (listNumbers) =>{

        const num = listNumbers.split(" - ");
        let diferenca = 0;
        for (let index = 0; index < num.length; index++) {
          if (index === 0){
            diferenca = Number(num[index])
          } else{
            diferenca =  diferenca - Number(num[index]);
          }
          
            }
        return String(diferenca);
          }
  const handleEqualDivide = (listNumbers) =>{

      const num = listNumbers.split(" / ");
      if(num.length === 2 && Number(num[1]) !== 0){
        return String(Number(num[0]) / Number(num[1]))
      }
      else{
        alert("Utilize a divisão com apenas dois números!\nDivisão por Zero é impossível!")
        setFirstNumber('0')
        return '0'
      }
    }

  

  const handleFinalResult = () =>{

    if(currentNumber.includes('+') && currentNumber[-2] !== '+'){

      setCurrentNumber(handlerEqualSum(currentNumber))
      setFirstNumber(currentNumber)
    }
    else if(currentNumber.includes('x') && currentNumber[-2] !== 'x'){

      setCurrentNumber(handleEqualMult(currentNumber))
      setFirstNumber(currentNumber)
    }
    else if(currentNumber.includes('-') && currentNumber[-2] !== '-'){

      setCurrentNumber(handelEqualMinus(currentNumber))
      setFirstNumber(currentNumber)
    }
    else if(currentNumber.includes('/') && currentNumber[-2] !== '/'){

      setCurrentNumber(handleEqualDivide(currentNumber))
      setFirstNumber(currentNumber)
    }
    



  }
  
  

  return (
    <Container className="App">
      <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Button label="0"  onClick={() => handleAddNumber('0')}/>
        <Button label="x" onClick={() => handleAddNumber(' x ')}/>
        <Button label="/" onClick={() => handleAddNumber(' / ')}/>
        <Button label="C"  onClick={() => handkerOnClear()}/>
        </Row>
        <Row>
        <Button label="7"  onClick={() => handleAddNumber('7')}/>
        <Button label="8"  onClick={() => handleAddNumber('8')}/>
        <Button label="9"  onClick={() => handleAddNumber('9')}/>
        <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
        <Button label="4"  onClick={() => handleAddNumber('4')}/>
        <Button label="5"  onClick={() => handleAddNumber('5')}/>
        <Button label="6"  onClick={() => handleAddNumber('6')}/>
        <Button label="-" onClick={() => handleAddNumber(' - ')}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2"  onClick={() => handleAddNumber('2')}/>
        <Button label="3"  onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleFinalResult}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
