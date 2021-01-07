const Menu = ({menu})=>{
 
    return (<>
{menu.map(item=>{
    const {id,title,category,price,img,desc}=item
    return (
        <article className='article'>
     
    <div className="image"><img className='img' src={img} alt={title}/>
    </div>
        <header>
    <div className="price">
    <h4>{title}</h4>
    <span>${price}</span>
    </div>
    <p>{desc}</p>
    </header>  
    </article>
    )
})}
    </>)
}

export default Menu