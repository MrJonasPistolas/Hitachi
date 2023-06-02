import { useField } from 'formik';
import { Form } from 'semantic-ui-react';

interface Props {
    name: string;
    label?: string;
    value?: string;
}

export default function MyTextLabel(props: Props) {
    const [field, meta] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <label>{props.value}</label>
        </Form.Field>
    );
}