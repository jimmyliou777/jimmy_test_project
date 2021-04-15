import React from 'react';
type Props = {
    name: string;
};
const Student = (props: Props) => {
    const { name } = props;
    return <p>Student name: {name}</p>;
};
const Teacher = (props: Props) => {
    const { name } = props;
    return <p>Teacher name: {name}</p>;
};
const Guardian = (props: Props) => {
    const { name } = props;
    return <p>Guardian name: {name}</p>;
};

const COMPONENT_MAP: any = {
    student: Student,
    teacher: Teacher,
    guardian: Guardian,
};

const SampleComponent = (user: { type: string; name: string }): JSX.Element => {
    const Component = COMPONENT_MAP[user.type];

    return (
        <div>
            <Component name={user.name} />
        </div>
    );
};

const MapComponent = (): JSX.Element => {
    return <SampleComponent type={'guardian'} name={'jimmy'} />;
};

export default MapComponent;
