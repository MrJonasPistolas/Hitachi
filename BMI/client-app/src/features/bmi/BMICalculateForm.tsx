import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { useState } from 'react';
import { BMIFormValues } from '../../app/models/bmi';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Header, Label, Segment, } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import MyTextLabel from '../../app/common/form/MyTextLabel';
import BMICalculateResult from './BMICalculateResult';

function BMICalculateForm() {
    const { bmiStore } = useStore();
    const { calculateBMI, calculationResult } = bmiStore;

    const [values, setValues] = useState<BMIFormValues>(new BMIFormValues());
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState(0);

    const validationSchema = Yup.object({
        weigth: Yup.number().required('The Weigth is required'),
        heigth: Yup.number().required('The Heigth is required')
    });

    function handleFormSubmit(values: BMIFormValues) {
        setSubmitted(false);
        setSubmitting(true);
        calculateBMI(values).then((value: any) => {
            setResult(value);
            setSubmitted(true);
            setSubmitting(false);
        });
    }

    return (
        <Segment clearing>
            <Header content='Calculation' sub color='teal' />
            <br/>
            <br/>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={values}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, dirty, errors }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='weigth' placeholder='Weigth' label='Weight' />
                        <MyTextInput name='heigth' placeholder='Heigth' label='Heigth' />
                        {
                            submitted &&
                            (
                                <>
                                    <MyTextLabel name='bmi' label='Your BMI' value={result.toString()} />
                                    <BMICalculateResult name='result' label='Result' value={result} />
                                </>
                            )
                        }
                        <Button
                            disabled={submitting || !dirty || !isValid}
                            loading={submitting}
                            floated='right'
                            positive
                            type='submit'
                            content='Submit'
                        />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
}

export default observer(BMICalculateForm);