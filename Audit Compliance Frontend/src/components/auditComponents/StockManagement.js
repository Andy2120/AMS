import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StockManagement = () => {
  const [data, setData] = useState([]);
  let [responses, setResponses] = useState({
    comply: [],
    observation: [],
  });
  useEffect(() => {
    console.log("useffedctghjk");
    axios.get("https://localhost:7208/api/Audit").then((response) => {
      setData(response.data);
      // console.log("res data: ", response.data);
      let i = 0;
      // for(i = 0; i < response.data.)
      console.log(responses);
      responses.comply = [];
      responses.observation = [];
      response.data.map((_, index) => {
        responses.comply.push("yes");
        responses.observation.push("");
        console.log(index);
      });
      console.log("api res: ", responses);
      setResponses(responses);
    });
  }, []);

  // function postAnswer() {
  //   axios
  //     .post("https://localhost:7208/api/Audit/answer", {
  //       id: 0,
  //       questionId: 0,
  //       comply: "string",
  //       observarion: "string",
  //     })
  //     .then(() => {})
  //     .catch(() => {});
  // }
  const navigate = useNavigate();
  // const [inputs, setInputs] = useState({
  //   answer: "",
  //   observation: "",
  // });
  // const { answer, observation } = inputs;

  const handleChange = (e, i, type) => {
    if (type === "comply") {
      // responses.comply[i] = e.target.value;
      setResponses({
        comply: [
          ...responses.comply.map((v, index) =>
            index === i ? e.target.value : v
          ),
        ],
        observation: [...responses.observation],
      });
    } else {
      // responses.observation[i] = e.target.value;
      setResponses({
        comply: [...responses.comply],
        observation: [
          ...responses.observation.map((v, index) =>
            index === i ? e.target.value : v
          ),
        ],
      });
    }
  };
  const notify = (msg) =>
    toast(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("", inputs);

    let apiRes = [];
    let promises = [];
    let i;
    for (i = 0; i < responses.comply.length; i++) {
      promises.push(
        axios
          .post("https://localhost:7208/api/Audit/answer", {
            id: 0,
            questionId: i + 2,
            comply: responses.comply[i],
            observarion: responses.observation[i],
          })
          .then((response) => {
            apiRes.push(response);
          })
      );
    }

    Promise.all(promises).then(() => console.log(apiRes));
    // console.log(
    //   "Responses: ",
    //   responses.comply.map((v) => v.observation !== "")
    // );

    notify("Response Submitted");
    navigate("/userHome");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <table className="table table-bordered">
          <thead className=" App table-success">
            <tr>
              <th scope="col">SR.No.</th>
              <th scope="col">CRITERIA</th>
              <th scope="col">AUDIT PROCEDURE</th>
              <th scope="col">COMPLY?</th>
              <th scope="col">OBSERVATION</th>
            </tr>
          </thead>
          {data.map((data, index) => (
            <tbody>
              <tr>
                <td className="App">{data.id}</td>
                <td>{data.ceiteria}</td>
                <td>{data.auditProcedure}</td>
                <td className="App">
                  <select
                    name="answer"
                    value={responses.comply[index]}
                    onChange={(e) => handleChange(e, index, "comply")}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </td>
                <td className="App">
                  <textarea
                    required
                    name="observation"
                    value={responses.observation[index]}
                    onChange={(e) => handleChange(e, index, "observation")}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <br />
        <div className="d-grid gap-2 col-3 mx-auto">
          <button
            // onChange={handleChange}
            type="submit"
            className="btn btn-primary"
            data-testid="button"
          >
            Submit
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};
