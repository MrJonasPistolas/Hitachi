export class BMIFormValues {
    weigth: number = 0;
    heigth: number = 0;

    constructor(values?: BMIFormValues) {
        if (values) {
            this.weigth = values.weigth;
            this.heigth = values.heigth;
        }
    }
}