function filter(searchText, allRes){
    return allRes.filter((res)=>res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
}
export default filter;