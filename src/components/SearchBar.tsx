import CheckBoxField from "./CheckBoxField";

export default function SearchBar(){
    return(
        <div className="search-bar">
            <div>
                <div>
                    <input type="text" placeholder="검색을 입력하세요..." />
                </div>
                <CheckBoxField label="Only show products in stock"/>
            </div>
        </div>
    );
}