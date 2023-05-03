import SecondComponent from '../SecondComponent/SecondComponent';

function SecondComponent(){
    const arr = ['Bmw','Lexus','Honda','Ferrari','Porsche','Subaru','Mercedes'];
    return (
        <div>
            <SecondComponent SecondArr ={arr}/>
        </div>
    );
}

export default SecondComponent;