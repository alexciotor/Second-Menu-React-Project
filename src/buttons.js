const Buttons = ({button,change})=>{
    console.log(button);
    return  (
        <>
        {button.map((btn,index)=>{
            return <button onClick={()=>{
                change(btn)
            }} key={index} className="btn">{btn}</button>
        })}
        </>
    ) 

     

    
}


export default Buttons