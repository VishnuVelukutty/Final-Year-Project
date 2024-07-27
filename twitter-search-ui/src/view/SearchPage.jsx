import search from "../service/Search"
export default function SearchPage() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const formData = new FormData(event.target);
        search(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="query" />
                <button type="submit">Search</button>
            </form>
        </>
    )

}