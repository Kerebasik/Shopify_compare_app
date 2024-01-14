import {Routes} from "~/constants/routes";
import {SettingLink} from "~/types/buttons";

const SettingsLinkList:SettingLink[] =[
    {
        path:Routes.ADD_TO_COMPARE,
        title:"Product Detail Page",
        icon:"detailPage"
    },
    {
        path:Routes.STICKY_FIXED,
        title:"Sticky Fixed Button",
        icon:"fixedButton"
    },
    {
        path:Routes.COMPARISON_TOOLBAR,
        title:"Comparison Toolbar",
        icon:"toolbar"
    },
    {
        path:Routes.COMPARISON_TABLE,
        title:"Comparison Table",
        icon:"table"
    }
]

export {SettingsLinkList}