import { Dispatch, SetStateAction, useState } from 'react'
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';

export interface StepRendererProps {
    setStep: Dispatch<SetStateAction<number>>;
    step: number;
}

export default function StepRenderer({setStep, step}:StepRendererProps) {
    const [name, setName] = useState<string>('');
    const [propsName, setPropsName] = useState<string>('');
    switch (step) {
        case 1:
        return <Question1/>;
        case 2:
            return <Question2 />;
        case 3:
            return <Question3 />;
        case 4:
            return <Question4 />;
        case 5:
            return <Question5 />;
    }
}
