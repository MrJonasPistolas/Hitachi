import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    name: string;
    label?: string;
    value: number
}

export default function BMICalculateResult(props: Props) {
    const [field, meta] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            {
                props.value < 18.5 &&
                (
                    <Label color='yellow'>Underweight</Label>
                )
            }
            {
                props.value >= 18.5 && props.value <= 24.9 &&
                (
                    <Label color='teal'>Normal</Label>
                )
            }
            {
                props.value >= 25 && props.value <= 29.9 &&
                (
                    <Label color='orange'>Overweight</Label>
                )
            }
            {
                props.value >= 30 &&
                (
                    <Label color='red'>Very Overweight</Label>
                )
            }
        </Form.Field>
    );
}