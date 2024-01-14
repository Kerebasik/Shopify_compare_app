import {
    BlockStack, Box, InlineStack, FullscreenBar,
} from "@shopify/polaris";
import {NavLink, Outlet, useNavigate} from "@remix-run/react";
import {Routes} from "~/constants/routes"
import {useEffect} from "react";
import {SettingsLinkList} from "~/constants/buttons";
import {CustomNavListItem} from "~/components/CustomNavListItem";
import {useAppBridge} from "@shopify/app-bridge-react";
import {Fullscreen} from "@shopify/app-bridge/actions";

export default function ComparisonPage() {
    const navigate = useNavigate()
    const app = useAppBridge();
    const fullscreen = Fullscreen.create(app);


    useEffect(() => {
        fullscreen.dispatch(Fullscreen.Action.ENTER);
        navigate(Routes.ADD_TO_COMPARE)
        return () => {
            fullscreen.dispatch(Fullscreen.Action.EXIT);
        }
    }, []);

    const handleFullscreenExit = () => {
        navigate(Routes.ROOT)
    }


    return (
        <>
            <FullscreenBar onAction={handleFullscreenExit}/>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <Box background={"bg-fill"} minHeight={"100%"} width={"70px"}>
                        <BlockStack align={"center"} inlineAlign={"center"} gap={"200"}>
                            {SettingsLinkList.map((item, index) => (
                                <NavLink key={Date.now() + index} style={{textDecoration: "none", color: "#000"}}
                                         to={item.path}>
                                    {({isActive}) => (
                                        <CustomNavListItem icon={item.icon} isActive={isActive} title={item.title}
                                                           key={Date.now() + index}/>
                                    )}
                                </NavLink>
                            ))}
                        </BlockStack>
                    </Box>
                </div>
                <div>
                    <InlineStack wrap={false}>
                        <Box>
                            <Outlet/>
                        </Box>
                    </InlineStack>
                </div>
            </div>
        </>
    );
}
