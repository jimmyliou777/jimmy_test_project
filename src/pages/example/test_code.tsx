import React from 'react';
export default function SampleComponent(): JSX.Element {
    // const [data, setData] = useState([]);
    function handleDelete() {
        console.log('Delete!');
    }
    function handleAdd() {
        console.log('Add!');
    }
    const handleEdit = () => {
        console.log('Edit!');
    };
    return (
        <div>
            <div>123</div>
            <div>
                <button onClick={handleDelete} />
                <button onClick={handleAdd} />
                <button onClick={handleEdit} />
            </div>
        </div>
    );
}
