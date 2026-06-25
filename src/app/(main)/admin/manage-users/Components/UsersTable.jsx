

export default function UsersTable({users=[]}) {

  return (
    <div className="bg-[#1D232A] rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Total Lessons</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user?._id}>
                  <td>
                      <div className="font-medium">
                          {user.name}
                      </div>
                  </td>
              
                  <td>{user.email}</td>
              
                  <td>
                      {isAdmin ? (
                          <span className="badge badge-success">
                            Admin
                          </span>
                        ) : (
                          <span className="badge badge-neutral">
                            User
                          </span>
                        )}
                  </td>
              
                    <td>{user.totalLessons}</td>
              
                  <td>
                      {
                        (user.isAdmin) 
                        ?<button
                            disabled
                            className="btn btn-success btn-sm"
                          >
                            Admin
                          </button> 
                          :<button className="btn btn-primary btn-sm">
                          Make Admin
                        </button>
                      }
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}