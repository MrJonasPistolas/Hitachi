import { makeAutoObservable, reaction, runInAction } from 'mobx';
import agent from '../api/agent';
import { BMIFormValues } from '../models/bmi';

export default class BMIStore {
    calculationResult: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    calculateBMI = async (values: BMIFormValues) => {
        try {
            const result = await agent.BMI.calculate(values.weigth, values.heigth);
            runInAction(() => {
                this.calculationResult = result;
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}