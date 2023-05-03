
function SecondComponent(props){
    const SecondArr = props.SecondArr;
  
    return (
        <ul>
  
        {SecondArr.map((e , i)=>(
            <li key={i}>
                {i}: {e};
            </li>
        ))}
        </ul>
        
    );
  }
  
  export default SecondComponent;