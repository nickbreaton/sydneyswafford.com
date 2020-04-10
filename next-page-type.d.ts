declare module 'next-page-type' {
    import { FunctionComponent, PropsWithChildren } from 'react'
    import { GetStaticProps, GetServerSideProps } from 'next'

    export interface NextPage<StaticProps = {}, ServerSideProps = {}> {
        props: StaticProps & ServerSideProps
        default: FunctionComponent<StaticProps & ServerSideProps>
        getStaticProps: GetStaticProps<StaticProps>
        getServerSideProps: GetServerSideProps<ServerSideProps>
    }
}
