import { useParams } from 'react-router';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface RouteState {
    state: {
        name: string;
        rank: number;
    };
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface priceData {}

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation() as RouteState;
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState({});

    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            console.log(infoData);
            console.log(priceData);
            setInfo(infoData);
            setPriceInfo(priceData);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>{state?.name || 'Loading...'}</Title>
            </Header>
            {loading ? <Loader>"Loading..."</Loader> : null}
        </Container>
    );
}

export default Coin;
