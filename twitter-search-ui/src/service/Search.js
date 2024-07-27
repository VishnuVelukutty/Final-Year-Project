export default function search(formData){
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
}