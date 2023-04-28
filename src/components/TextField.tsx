import { ChangeEvent } from "react";

type TextFieldProps = {
    filterText: string;
    setFilterText: (value: string) => void;
    placeholder: string;
}

export default function TextField({ 
    placeholder, filterText, setFilterText 
}: TextFieldProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFilterText(value);
    };

    return(
        <div>
            <input 
                type="text" 
                placeholder={placeholder} 
                value={filterText} 
                onChange={handleChange}
            />
        </div>
    );
}