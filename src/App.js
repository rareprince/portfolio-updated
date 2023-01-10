import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Modal from "./component/modal";

export default function App() {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [repo, setRepo] = useState([]);
  

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async () => {
    try {
      const result = await axios(`https://api.github.com/users/${input}/repos`);
      setRepo(result.data);
      console.log("reo", result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("recec", openModal);
  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20vh auto 0"
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "6rem" }}>RepoCheck</h1>
        <div className="form-div">
          <h4>Enter your Github username</h4>
          <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="github"
              placeholder="Username"
              value={input}
              onChange={handleChange}
              required
            />
          </form>
          <button
            style={{
              alignSelf: "center",
              padding: "0.5rem"
            }}
            disabled={input.length <= 0 && true}
            onClick={() => {
              setOpenModal(true);
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </section>
      {openModal && <Modal closeModal={handleCloseModal} repositories={repo} />}
    </div>
  );
}
