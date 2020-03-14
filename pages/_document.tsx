import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { description } from '../package.json'

type Props = {
    styleTags: React.ReactElement
}

class CustomDocument extends Document<Props> {
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
            <Html lang="en">
                <Head>
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="robots" content="noindex" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument
