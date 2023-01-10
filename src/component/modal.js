import React from "react";
import "./repo.css";

export default function Modal({ closeModal, repositories }) {
  const Repository = () => {
    const listRepos =
      repositories?.length !== 0 ? (
        repositories?.map((item) => (
          <li className="repo-list" key={item.id}>
            <a
              href={item.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "initial" }}
            >
              {item.name}
            </a>
          </li>
        ))
      ) : (
        <p>You don't have any respository listed in your profile</p>
      );

    return <ul className="repo-list-container">{listRepos}</ul>;
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="container">
          <div className="closeBtn">
            <button onClick={closeModal} className="tCancel">
              {" "}
              X{" "}
            </button>
          </div>
          <div className="body">
            <h2>Your Public Repositories</h2>
            {Repository()}
          </div>
          <div className="footer">
            <button onClick={closeModal} id="cancelBtn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
