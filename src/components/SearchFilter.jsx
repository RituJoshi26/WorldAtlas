export const SearchFilter=({search,setSearch,filter,setFilter})=>{
    const handlInputChange=(event)=>{
        setSearch(event.target.value);
}
    const handleSelectChange=(event)=>{
        setFilter(event.target.value);
    }

    return(
        <div className="searchfiltercontainer">
        <div className="divsearch">
            <input type="text" placeholder="Search" value={search} onChange={handlInputChange}></input>
        </div>
        <div className="divfilter">
            <select value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        </div>
    )
}