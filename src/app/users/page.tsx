


type Users ={
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
 
}
export default async function UserPage() {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      
    console.log(users);
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user: Users) => (
            <li key={user.id}>
                {user.name} ({user.email})
            </li>
            ))}
        </ul>
    </div>
  );
}