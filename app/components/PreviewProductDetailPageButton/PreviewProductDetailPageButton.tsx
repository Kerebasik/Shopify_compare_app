import {PlusIcon} from "~/components/PlusIcon";
import {MinusIcon} from "~/components/MinusIcon";

type PreviewProductDetailPageButtonProps = {
    addToCompareTextColor:string,
    backColor:string,
    borderColor:string,
    removeFromCompareTextColor:string
    showIcon:boolean
    showLabel:boolean
}

const PreviewProductDetailPageButton = ({showLabel, showIcon, addToCompareTextColor, backColor, borderColor, removeFromCompareTextColor}:PreviewProductDetailPageButtonProps)=>{
    return(
        <>
            <div style={{
                display:"flex",
                gap:"10px",
                flexDirection:"column"
            }}>
                <div style={{
                    width:"355px",
                    display:"flex",
                    color:`${addToCompareTextColor}`,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:`${backColor}`,
                    padding:"1em 2em",
                    border:"1px solid",
                    borderColor:`${borderColor}`,
                    gap:"10px",
                    lineHeight:"1.15"
                }}>
                    {
                        showIcon &&
                        <PlusIcon/>
                    }
                    {
                        showLabel &&
                        "Add to compare"
                    }
                </div>
                <div style={{
                    width:"355px",
                    display:"flex",
                    color:`${removeFromCompareTextColor}`,
                    justifyContent:"center",
                    backgroundColor:`${backColor}`,
                    alignItems:"center",
                    padding:"1em 2em",
                    border:"1px solid",
                    borderColor:`${borderColor}`,
                    gap:"10px",
                    lineHeight:"1.15"
                }}>
                    {
                        showIcon &&
                        <MinusIcon/>
                    }
                    {
                        showLabel &&
                        "Remove from compare"
                    }

                </div>

            </div>
        </>
    )
}

export {PreviewProductDetailPageButton}