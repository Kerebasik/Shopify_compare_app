

const redirectEditorLink = (shopName:string, themeId:string) =>{
    return `https://admin.shopify.com/store/${shopName}/themes/current/editor?context=apps&template=product&activateAppId=${themeId}/product_compare`
}

export {
    redirectEditorLink
}