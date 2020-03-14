import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document<any> {
    static getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet()

        const page = renderPage((App: React.ComponentType) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        )

        const styleTags = sheet.getStyleElement()

        return { ...page, styleTags }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Sydney Swafford</title>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
