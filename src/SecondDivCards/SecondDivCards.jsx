import React from 'react';
import { Container } from '@material-ui/core';

import Cards from './Cards';
import Heading from './Heading';

const SecondDivCards = () => {
    return (
        <>
            <main>
                <div style={{ marginTop: '8rem' }}>
                    <Container>
                        <Heading />
                        <Container maxWidth="md" style={{ marginTop: '3rem' }} >

                            <Cards />
                        </Container>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default SecondDivCards;