import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import bcrypt from 'bcryptjs'
import { Header, Sidebar } from "../../../../components";
import { getDataUser, getDetailUser } from "../../../../services/dashboard";
import Select from 'react-select'
import { data } from "jquery";

export default function DetailEdit({dataUser}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Status, setStatus] = useState('');

  const [selectedOption, setSelectedOption] = useState();


  const [toggleViewMode, setToggleViewMode] = useState(false);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const selectedStatus = () => {
    const dataStatus = dataUser.status;
    // setSelectedOption(dataStatus);
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

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
          <Header toggleNavbar={toggleNavbar} />
          {/* <input id="search-box" onChange={filterBySearch} /> */}
          <section className="p-3">
            <div className="header">
              <h3>Add User</h3>
              <p>Manage data for growth</p>
            </div>
          </section>
          <div className="form-data-user">
            <div className="form-label-input">
              <label
                htmlFor="name"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control text-lg form-user-control"
                // placeholder="Enter your email address"
                placeholder={dataUser.name}               
              />
            </div>
            <div className="form-label-input mt-30">
              <label
                htmlFor="email"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control text-lg form-user-control"
                placeholder={dataUser.email}

              />
            </div>
            <div className="form-label-input  mt-30">
              <label
                htmlFor="username"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control text-lg form-user-control"
                placeholder={dataUser.username}
              />
            </div>
            <div className="form-label-input  mt-30">
              <label
                htmlFor="status"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Status
              </label>
              <Select        defaultValue={selectedOption}
        onChange={setSelectedOption} options={options} className="form-label"/>

            </div>
            <Select
        hideSelectedOptions={false}
        defaultValue={{ value: 'chocolate', label: 'Chocolate' }} // default value must be like this.
        value={selectedOption} //You forgot pass this  parameter
        onChange={handleChange}
        options={options}
      />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const data = await getDataUser();
  const paths = data.map((item) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getDetailUser(id);
  return {
    props: {
      dataUser: data,
    },
  };
}
