import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH CONTACTS
  const fetchContacts = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setContacts(response.data.contacts);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : contacts.length === 0 ? (

        <p>No messages found</p>

      ) : (

        <div className="grid gap-6">

          {contacts.map((contact) => (

            <div
              key={contact._id}
              className="border border-gray-700 rounded-2xl p-6 bg-zinc-900"
            >

              <h2 className="text-2xl font-semibold mb-2">
                {contact.name}
              </h2>

              <p className="text-gray-400 mb-2">
                {contact.email}
              </p>

              <p className="mb-4">
                {contact.message}
              </p>

              <span className="text-sm text-gray-500">
                {new Date(contact.createdAt).toLocaleString()}
              </span>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default AdminDashboard;