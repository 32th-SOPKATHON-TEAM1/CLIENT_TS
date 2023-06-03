import { useState } from 'react'

export default function StepRenderer({step, setStep}) {
    const [name, setName] = useState('');
    const [propsName, setPropsName] = useState('');
    switch (step) {
        case 1:
            return <Question1 setStep={setStep} name={name} setName={setName} />;
        case 2:
            return <Question2 setStep={setStep} name={name} />;
        case 3:
            return <Question3 setStep={setStep} setPropsName={setPropsName} />;
        case 4:
            return <Question4 setStep={setStep} propsName={propsName} />;
        case 5:
            return <Question5 setStep={setStep} />;
    }
}
