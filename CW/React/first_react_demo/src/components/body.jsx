import { useEffect, useState } from "react";

export default function Body() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleReload = () => {
        fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main className="flex-grow-1 container my-4">
            <div className="row">
                <div className="col-12">
                    <h2>Welcome to the Main Content</h2>
                    <p>This is a simple layout with Bootstrap.</p>

                    <div className="card mt-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">User List</h5>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={handleReload}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Reload Data"}
                            </button>
                        </div>
                        <div className="card-body">
                            {loading ? (
                                <div className="text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    {data.map((user) => (
                                        <li key={user.id} className="list-group-item">
                                            <strong>{user.name}</strong>
                                            <br />
                                            <small className="text-muted">
                                                <i className="bi bi-envelope me-1"></i>
                                                {user.email}
                                            </small>
                                            <br />
                                            <small className="text-muted">
                                                <i className="bi bi-telephone me-1"></i>
                                                {user.phone}
                                            </small>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
