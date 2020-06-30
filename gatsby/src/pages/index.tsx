import { PageProps } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"


export default class IndexPage extends React.Component<PageProps> {
  public render() {
    return (
      <>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <title>Chris Graham</title>
          <meta name="description" content='Website for Chris Graham' />
        </Helmet>
        <Layout>
          <div className="container">Nothing to see here!</div>
        </Layout>
      </>
    )
  }
}