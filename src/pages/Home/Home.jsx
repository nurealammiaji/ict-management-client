import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | ICT Management</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        </div>
    );
};

export default Home;