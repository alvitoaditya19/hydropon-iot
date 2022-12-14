import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";
import { Header, Sidebar } from "../../../components";
import { DestroyUser, getDataUser } from "../../../services/dashboard";

export default function User() {
  const [isLoading, setIsLoading] = useState(false);
  
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);
  

  let limit = 10;
  let no = 0;
  let statusUser = "admin";

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      axios
        .get(`http://localhost:3000/api/v1/users?limit=${limit}`)
        .then((res) => {
          setIsLoading(false);
          let data = res.data;
          // console.log(data);
          setItems(data.data);
        })
        .catch((err) => {
          console.log("err get in progress: ", err);
        });
    };

    getComments();
  }, [limit]);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      // `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
      `http://localhost:3000/api/v1/users/?limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    // console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    axios
      .get(`http://localhost:3000/api/v1/users/?limit=${limit}`)
      .then((res) => {
        console.log("DATAAA: ", res.data.data);
        let updatedList = [...res.data.data];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return (
            item.name.toString().toLowerCase().indexOf(query.toLowerCase()) !==
            -1
          );
        });
        setItems(updatedList);
      });
  };

  const deleteUser = async (id) => {
    DestroyUser(id);
    const user = await getDataUser();
    setItems(user);
  };
  return (
    <>
      {/* Navbar */}
      <div className="dashboard d-flex">
        <Sidebar
          toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar}
          activeMenu="user"
        />
        {/* Main Content */}
        <div className="content">
          <Header toggleNavbar={toggleNavbar} filterBySearch={filterBySearch} isFilter/>
          {/* <input id="search-box" onChange={filterBySearch} /> */}
          <section className="p-3">
            <div className="header">
              <h3>User</h3>
              <p>Manage data for growth</p>
            </div>
          </section>
          <section className=" mb-20">
            <div className="container-fluid gap-2">
            <Link href="/dashboard/user/add-user">
              <div className="btn color-pallete-1 border-0 text-white">Add User</div>
            </Link>
            </div>
          </section>

          <div className="row m-2 justify-content-center">
            {isLoading ? (
              <ReactLoading
                type="spinningBubbles"
                color="#4D17E2"
                height={667}
                width={375}
                // className="justify-content-center text-center"
              />
            ) : (
              <div className="table-responsive-lg">
                <table className="table table-borderless table-data">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Email</th>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr key={item._id} className="align-items-center">
                          <td>{(no = no + 1)}</td>
                          <td>{item.email}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>
                            {item.status === "admin" ? (
                              <div className="admin-card">
                                <h1>Admin</h1>
                              </div>
                            ) : (
                              <div className="user-card">
                                <h1>User</h1>
                              </div>
                            )}
                          </td>
                          <td>
                            <Link href={`/dashboard/user/edit/${item._id}`}>
                              <a className="btn-edit-user">Edit</a>
                            </Link>

                            <button
                              onClick={() => deleteUser(item._id)}
                              className="btn-delete-user"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            {/* {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })} */}
          </div>

          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
}
