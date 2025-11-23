

export const Header = ({info})=>{
    // console.log(props);
    
    return(
        <>
        <h2>{info.naam}</h2>
        <h1>{info.age}</h1>
        </>
    )
}

export const MainCom = ()=>{
    return(
        <>
        <h1>Hello</h1>
        {/* <h3></h3> */}
        <Header info =  { { naam : "anurag" , age : 25 }} />
         {/* <Header/>
          <Header/>
           <Header/>
            <Header/> */}

        </>
    )
}