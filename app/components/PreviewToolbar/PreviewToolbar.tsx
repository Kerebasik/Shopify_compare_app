

type PreviewToolbarProps = {
    backgroundColor:string
    textColor:string
    viewCompareButtonTextColor:string
    viewCompareButtonBackColor:string
    cleanUpButtonTextColor:string
    cleanUpButtonBackColor:string
    closeButtonTextColor:string
    closeButtonBackColor:string
}

const PreviewToolbar = ({backgroundColor, closeButtonBackColor, closeButtonTextColor, cleanUpButtonBackColor, cleanUpButtonTextColor, textColor, viewCompareButtonTextColor, viewCompareButtonBackColor}:PreviewToolbarProps)=>{
    return(
        <>

            <div style={{
                backgroundColor:`${backgroundColor}`,
                width:"950px",
                height:"250px",
                position:"fixed",
                bottom:0,
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"end",
                padding:"20px"
            }}>
                <div style={{
                    flex:"0 0 75%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"end",
                }}>
                    <div style={{
                        maxWidth: "200px",
                        maxHeight:"200px",
                        minHeight:"150px",
                        minWidth: "200px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"space-around",
                        alignItems:"center"
                    }}>
                        <div style={{
                            width:"100px",
                            height:"100px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:"white",
                            borderRadius:"10px"
                        }}>
                            Product img
                        </div>
                        <div style={{
                            fontWeight:600,
                            color:`${textColor}`
                        }}>
                            Product name
                        </div>
                    </div>
                </div>
                <div style={{
                    display:"flex",
                    flexWrap:"wrap",
                    maxWidth: "200px",
                    maxHeight:"200px",
                    minWidth: "200px",
                    padding: "10px",
                    flex:"0 0 25%",
                    gap:"10px"
                }}>
                    <div style={{
                        width:"100%",
                        color: `${viewCompareButtonTextColor}`,
                        border:"2px solid",
                        borderColor:`${viewCompareButtonBackColor}`,
                        backgroundColor: "#fbeee0",
                        borderRadius: "10px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "30px",
                        height:"53px",
                        boxShadow:`${viewCompareButtonBackColor} 4px 4px 0px 0px`
                    }}
                    >Compare</div>
                    <div style={{
                        width:"47%",
                        color: `${cleanUpButtonTextColor}`,
                        padding:"10px",
                        border:"2px solid",
                        borderColor:`${cleanUpButtonBackColor}`,
                        backgroundColor: "#fbeee0",
                        borderRadius: "10px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "30px",
                        height:"53px",
                        boxShadow:`${cleanUpButtonBackColor} 4px 4px 0px 0px`
                    }}
                    >Clean up</div>
                    <div style={{
                        width:"47%",
                        color: `${closeButtonTextColor}`,
                        padding:"10px",
                        border:"2px solid",
                        borderColor:`${closeButtonBackColor}`,
                        backgroundColor: "#fbeee0",
                        borderRadius: "10px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "30px",
                        height:"53px",
                        boxShadow:`${closeButtonBackColor} 4px 4px 0px 0px`,
                    }}
                    >Close</div>
                </div>
            </div>
        </>
    )
}

export {
    PreviewToolbar
}