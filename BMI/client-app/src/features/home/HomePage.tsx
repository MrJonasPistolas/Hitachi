import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Header,
    Image,
    Segment
} from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import BMICalculateForm from '../bmi/BMICalculateForm';

function HomePage() {
    const { bmiStore } = useStore();

    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image
                        size='massive'
                        src='logo192.png'
                        alt='logo'
                        style={{ marginBottom: 12 }}
                    />
                    BMI Calculation
                </Header>
                <BMICalculateForm />
            </Container>
        </Segment>
    );
}

export default observer(HomePage);