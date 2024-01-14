
type PreviewFixedCompareButtonProps = {
    textColor:string
    backColor:string
    showLabel:boolean
}

const PreviewFixedCompareButton = ({showLabel, textColor, backColor}:PreviewFixedCompareButtonProps)=>{
    return(
        <>
            <div style={{
                display:"flex",
                backgroundColor:"#ffffff",
                color:`${textColor}`,
                justifyContent:"center",
                alignItems:"center",
                fontWeight: 600,
                fontSize: "18px",
                width:"130px",
                height:"55px",
                border:`2px solid ${backColor}`,
                boxShadow:`${backColor} 4px 4px 0 0`,
                borderRadius: "10px"
            }}>
                {
                    showLabel &&
                    "Compare"
                }
            </div>
        </>
    )
}

export {
    PreviewFixedCompareButton
}