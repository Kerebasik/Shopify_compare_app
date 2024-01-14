import {CustomNavLinkProps} from "~/types/props";
import {Icon, Tooltip, Text} from "@shopify/polaris";
import {
    ToolsMajor, AnalyticsTableMinor, TextBlockMajor, DetailedPopUpMajor, ButtonMinor
} from '@shopify/polaris-icons';

const switchIcon = {
    "detailPage": ()=> <Icon source={DetailedPopUpMajor}/>,
    "gridPage": ()=> <Icon source={TextBlockMajor}/>,
    "fixedButton": ()=> <Icon source={ButtonMinor}/>,
    "toolbar": ()=> <Icon source={ToolsMajor}/>,
    "table":()=> <Icon source={AnalyticsTableMinor}/>
}

const CustomNavListItem = ({isActive, title,icon}:CustomNavLinkProps) => {
    const SelectedComponent = switchIcon[icon] || (() => <div>Нет такого компонента</div>);

    return(
        <div style={{
            margin:2,
            width:50,
            height:50,
            borderRadius:5,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor : isActive ? "rgba(200, 200, 200, 0.4)": "none"
        }}>
            <div style={{padding: '75px 0'}}>
                <Tooltip content={title}>
                    <Text fontWeight="bold" as="span">
                        <SelectedComponent/>
                    </Text>
                </Tooltip>
            </div>
        </div>
    )
}

export {CustomNavListItem}