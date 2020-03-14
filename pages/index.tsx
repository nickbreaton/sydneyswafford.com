import styled from 'styled-components'

const Heading = styled.h1`
    color: orange;
`

const Home: React.FC = () => {
    return (
        <div className="container">
            <main>
                <Heading>sydneyswafford.com</Heading>
            </main>
        </div>
    )
}

export default Home
