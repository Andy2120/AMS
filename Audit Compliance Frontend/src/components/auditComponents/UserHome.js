import React from "react";
import { Link } from "react-router-dom";
const UserHome = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css"
        integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd"
        crossorigin="anonymous"
      ></link>
      <div class="container d-inline ">
        <div className="col">
          <div className="col-md-3"></div>
        </div>

        <div class="col">
          <div class="col-md-3">
            <div class="card">
              <div className="text-center">
                <img
                  class="card-rounded mx-auto d-block-top"
                  src={require("../header/logo/p.png")}
                  alt="Card image cap"
                  width="150"
                  height="150"
                />
              </div>
              <div class="card-block text-center">
                <h4 class="card-title">
                  Perform SRA (Store Readiness Assessment)
                </h4>
                <p class="card-text">
                  SRA Audit is an annual audit of solicitors who are required to
                  report the money that passes through client accounts.
                </p>
                <Link
                  to="/sra"
                  class="btn btn-primary d-grid gap-2 col-6 mx-auto"
                >
                  Click!!
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="col-md-3">
            <div class="card">
              <div className="text-center">
                <img
                  class="rounded rounded mx-auto d-block-start"
                  src={require("../header/logo/p.png")}
                  alt="Card image cap"
                  width="150"
                  height="150"
                />
              </div>

              <div class="card-block text-center">
                <h4 class="card-title">Perform Stock Audit</h4>
                <p class="card-text card-spacer">
                  A stock audit verifying whether the physical goods available
                  at store's warehouse match the results available at the stock
                  registry.
                </p>

                <Link
                  to="/stock"
                  class="btn btn-primary d-grid gap-2 col-6 mx-auto"
                >
                  Click!!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
