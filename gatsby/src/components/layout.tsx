import React from "react"

import "../styles/global.css"


type LayoutProps = {
    children: any
}

export default class Layout extends React.Component<LayoutProps> {
    public render () {
        return (
            <>{this.props.children}</>
        )
    }
}