import {NavBar} from "@/components/ui/NavBar"
import {Container} from "@/components/layout/Container"
import {GridBackground} from "@/components/other/GridBackground";
import {InlineLink} from "@/components/ui/InlineLink";

const Home = () => {
    return (
        <Container>
            <NavBar/>
            <GridBackground>
                <h2 className={"font-bold text-6xl text-gray-800"}>David Dada</h2>
                <h2 className={"mt-4 text-3xl underline text-gray-800"}>Backend Engineer</h2>
                <h4 className={"mt-8 text-gray-500 leading-8"}>I am a backend engineer based in Lagos, Nigeria, with
                    over 5 years of experience building scalable, high-performance systems. I'm passionate about
                    technology, arts, and entrepreneurship. I also have a keen interest in writing and web development.

                </h4>
                <h4 className={"mt-6 text-gray-500 leading-8"}>
                    I've worked on projects like{' '}
                    <InlineLink href={"https://github.com/tdadadavid"}
                                title={"minired"}
                                external={true}/>, implementing core redis functionality from scratch in Go,{' '}
                    <InlineLink href={"https://github.com/tdadadavid"}
                                title={"a search engine"}
                                external={true}/> written in C#,{' '}
                    and contributed to big Open Source projects like{' '}
                    <InlineLink title={"DiceDB"} href={"https://github.com/DiceDB/dice"} external={true}/>. I'm also
                    member of the Google Student Developer Clu and a technical trainer at NitHub and
                    Engineering Career Expo (ECX).
                </h4>
            </GridBackground>
        </Container>
    )
}

export default Home;