import { NextPage } from 'next-page-type'

type Page = NextPage<{ postCount: number }, { pageCount: string }>

export const getStaticProps: Page['getStaticProps'] = async () => {
    return {
        props: {
            postCount: 1,
        },
    }
}

export default ({ postCount }: Page['props']) => {
    return <div>{postCount}</div>
}
