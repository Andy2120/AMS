import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SRA() {
  const navigate = useNavigate();
  // const [color, setColor] = useState("red");
  let [rating, setRating] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [data, setData] = useState({});

  let points = [5, 10, 5, 5, 5, 10, 10, 10, 5, 5, 5, 10, 10, 5];
  const [calculated, setCalculated] = useState(false);
  const [showError, setShowError] = useState(false);

  function onInputUpdate(value, index) {
    setRating(
      rating.map((v, i) => (i === index ? (value ? parseInt(value) : 0) : v))
    );
  }

  function checkRating(rating, point) {
    if (point === 5) {
      if (rating === 1) {
        return "Unsatisfactory";
      } else if (rating === 2) {
        return "Improvement Needed";
      } else if (rating === 3) {
        return "Average Expectations";
      } else if (rating === 4) {
        return "Meets Expactations";
      } else {
        return "Exceeds Expectation";
      }
    }
    if (point === 10) {
      if (rating === 9 || rating === 10) {
        return "Exceeds Expectations";
      } else if (rating === 7 || rating === 8) {
        return "Meets Expactations";
      } else if (rating === 5 || rating === 6) {
        return "Average Expectations";
      } else if (rating === 3 || rating === 4) {
        return "Improvement Needed";
      } else {
        return "Unsatisfactory";
      }
    }
  }

  function getLength(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) ans++;
    }
    return ans;
  }

  function onSubmit() {
    if (getLength(rating) === 14) {
      setCalculated(true);
      setShowError(false);
      console.log(rating);
      console.log(rating[0] + " " + rating[1]);
      console.log(rating[12]);
      axios
        .post(
          `https://localhost:7069/api/Rating/AddRatings?Cc.QECC=${rating[12]}&Cc.CDC=${rating[13]}&Mcr.GG=${rating[9]}&Mcr.Manning=${rating[10]}&Mcr.CSI=${rating[11]}&Mr.FMCG=${rating[5]}&Mr.GMD=${rating[6]}&Mr.DS=${rating[7]}&Mr.PT=${rating[8]}&Sc.GPFE=${rating[0]}&Sc.SAB=${rating[1]}&Sc.RS=${rating[2]}&Sc.BOEA=${rating[3]}&Sc.FSCR=${rating[4]}&TotalRating=100`
        )
        .then((resp) => {
          console.log(resp);
          // if(resp.status === 200){
          //   alert("Successfully Submitted")
          //   navigate("/userHome")
          // }
        });
    } else {
      setShowError(true);
    }
  }

  function onReset() {
    setCalculated(false);
    setRating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4 ">
            <div className="App">
              <form>
                {!calculated ? (
                  <table className="table table-bordered ">
                    <thead className="table-success">
                      <tr>
                        <th scope="col">CRITERIA</th>
                        <th scope="col">POINTS</th>
                        <th scope="col">RATINGS</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              I. Store Cleanliness
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>30</span>
                          </div>
                        </td>

                        <td></td>
                      </tr>

                      <tr>
                        <td className="required">
                          Ground/ Parking/ Facade & Entrance
                        </td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[0]}
                            required
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 0)}
                            value={rating[0]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Slling Area and Buffer</td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[1]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 1)}
                            value={rating[1]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Receiving and Stockroom</td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[2]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 2)}
                            value={rating[2]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">
                          Back office and Employees Area
                        </td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[3]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 3)}
                            value={rating[3]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">
                          Facilities, Structure and Confort Rooms
                        </td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[4]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 4)}
                            value={rating[4]}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              II. Merchandise Readiness
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>35</span>
                          </div>
                        </td>

                        <td></td>
                      </tr>
                      <tr>
                        <td className="required">Merchandise Display-FMCG</td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[5]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 5)}
                            value={rating[5]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Merchandise Display-GMD</td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[6]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 6)}
                            value={rating[6]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Merchandise Display-DS</td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[7]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 7)}
                            value={rating[7]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Pricing and Tagging</td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[8]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 8)}
                            value={rating[8]}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              III. Manning and Customer Relations
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>20</span>
                          </div>
                        </td>

                        <td></td>
                      </tr>
                      <tr>
                        <td className="required">Grooming and Greetings</td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[9]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 9)}
                            value={rating[9]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">Manning</td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[10]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 10)}
                            value={rating[10]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">
                          Customer Service and Interaction
                        </td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[11]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 11)}
                            value={rating[11]}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              IV. Checkout and Counter
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>15</span>
                          </div>
                        </td>

                        <td></td>
                      </tr>
                      <tr>
                        <td className="required">
                          Quick Efficient and Courteous Checkout (CEQ)
                        </td>
                        <td>10</td>

                        <td>
                          <input
                            min={1}
                            max={points[12]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 12)}
                            value={rating[12]}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td className="required">
                          Counter Display and Cleanliness
                        </td>
                        <td>05</td>

                        <td>
                          <input
                            min={1}
                            max={points[13]}
                            type="number"
                            onChange={(e) => onInputUpdate(e.target.value, 13)}
                            value={rating[13]}
                          ></input>
                        </td>
                      </tr>

                      {/* <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>TOTAL</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>100</span>
                          </div>
                        </td>

                        <td></td>
                      </tr> */}
                    </tbody>
                  </table>
                ) : (
                  <table className="table table-bordered border-primary">
                    <thead className="table-success">
                      <tr>
                        <th>
                          <h3>Criteria</h3>
                        </th>
                        <th>
                          <h3>Points</h3>
                        </th>
                        <th>
                          <h3>Rating</h3>
                        </th>
                        <th>
                          <h3>Result</h3>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              I. Store Cleanliness
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>30</span>
                          </div>
                        </td>

                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>Ground/ Parking/ Facade & Entrance</td>
                        <td>05</td>
                        <td>{rating[0]}</td>
                        <td>
                          {rating[0] && checkRating(rating[0], points[0])}
                        </td>
                      </tr>
                      <tr>
                        <td>Slling Area and Buffer</td>
                        <td>10</td>
                        <td>{rating[1]}</td>
                        <td>
                          {rating[1] && checkRating(rating[1], points[1])}
                        </td>
                      </tr>
                      <tr>
                        <td>Receiving and Stockroom</td>
                        <td>05</td>
                        <td>{rating[2]}</td>
                        <td>
                          {rating[2] && checkRating(rating[2], points[2])}
                        </td>
                      </tr>
                      <tr>
                        <td>Back office and Employees Area</td>
                        <td>05</td>
                        <td>{rating[3]}</td>
                        <td>
                          {rating[3] && checkRating(rating[3], points[3])}
                        </td>
                      </tr>
                      <tr>
                        <td>Facilities, Structure and Confort Rooms</td>
                        <td>05</td>
                        <td>{rating[4]}</td>
                        <td>
                          {rating[4] && checkRating(rating[4], points[4])}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              II. Merchandise Readiness
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>35</span>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Merchandise Display-FMCG</td>
                        <td>10</td>
                        <td>{rating[5]}</td>
                        <td>
                          {rating[5] && checkRating(rating[5], points[5])}
                        </td>
                      </tr>
                      <tr>
                        <td>Merchandise Display-GMD</td>
                        <td>10</td>
                        <td>{rating[6]}</td>
                        <td>
                          {rating[6] && checkRating(rating[6], points[6])}
                        </td>
                      </tr>
                      <tr>
                        <td>Merchandise Display-DS</td>
                        <td>10</td>
                        <td>{rating[7]}</td>
                        <td>
                          {rating[7] && checkRating(rating[7], points[7])}
                        </td>
                      </tr>
                      <tr>
                        <td>Pricing and Tagging</td>
                        <td>05</td>
                        <td>{rating[8]}</td>
                        <td>
                          {rating[8] && checkRating(rating[8], points[8])}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              III. Manning and Customer Relations
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>20</span>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Grooming and Greetings</td>
                        <td>05</td>
                        <td>{rating[9]}</td>
                        <td>
                          {rating[9] && checkRating(rating[9], points[9])}
                        </td>
                      </tr>
                      <tr>
                        <td>Manning</td>
                        <td>05</td>
                        <td>{rating[10]}</td>
                        <td>
                          {rating[10] && checkRating(rating[10], points[10])}
                        </td>
                      </tr>
                      <tr>
                        <td>Customer Service and Interaction</td>
                        <td>10</td>
                        <td>{rating[11]}</td>
                        <td>
                          {rating[11] && checkRating(rating[11], points[11])}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              IV. Checkout and Counter
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: "bold" }}>15</span>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Quick Efficient and Courteous Checkout (CEQ)</td>
                        <td>10</td>
                        <td>{rating[12]}</td>
                        <td>
                          {rating[12] && checkRating(rating[12], points[12])}
                        </td>
                      </tr>
                      <tr>
                        <td>Counter Display and Cleanliness</td>
                        <td>05</td>
                        <td>{rating[13]}</td>
                        <td>
                          {rating[13] && checkRating(rating[13], points[13])}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </form>
            </div>

            {showError ? (
              <div style={{ color: "red" }}>Fill all input the fields</div>
            ) : (
              <></>
            )}
          </div>

          <div className="col-md-4 mt-4">
            <div className="table table-bordered">
              <table className="App table table-success">
                <tr>
                  <th>CLASSIFICATION</th>

                  <th colSpan={2}>SCORE RANGE</th>
                </tr>
                <tr>
                  <td>Exceeds Expectations</td>
                  <td>5</td>
                  <td>9-10</td>
                </tr>
                <tr>
                  <td>Meets Expectations</td>
                  <td>4</td>
                  <td>7-8</td>
                </tr>
                <tr>
                  <td>Average Expectations</td>
                  <td>3</td>
                  <td>5-6</td>
                </tr>
                <tr>
                  <td>Improvement Needed</td>
                  <td>2</td>
                  <td>3-4</td>
                </tr>
                <tr>
                  <td>Unsatisfactory</td>
                  <td>1</td>
                  <td>1-2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="div3">
            {" "}
            {!calculated ? (
              <div className="d-grid gap-2 col-3 mx-auto">
                <button
                  className="btn btn-primary ms-3"
                  type="button"
                  onClick={() => onSubmit()}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="d-grid gap-2 col-3 mx-auto">
                <button
                  className="btn btn-danger ms-3"
                  type="button"
                  onClick={() => onReset()}
                >
                  Reset
                </button>
              </div>
            )}
            <br></br> <br></br> <br></br> <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default SRA;
