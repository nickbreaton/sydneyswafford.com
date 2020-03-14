import Head from 'next/head'

const CustomApp: React.FC<any> = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Sydney Swafford</title>
        </Head>
        <Component {...pageProps} />
    </>
)

export default CustomApp
