type CheckBoxFieldProps = {
    label: string;
}

export default function CheckBoxField({ label }: CheckBoxFieldProps){

    const id = `checkbox-${label}`.replace(/ /g, '-').toLowerCase();

    return (
        <div>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
}