import React from "react";
import { IcParameter } from "../../../public/Icon";
import ReactLoading from "react-loading";

export default function CardMonitor({ value, isLoading }) {
  return (
    <div className="col-lg-6">
      <div className="col-md-12 card-monitoring">
        <div className="card-body">
          <h1>Suhu</h1>
          <div className="row justify-start">
            <div className="col-lg-4 col-3">
              <IcParameter />
            </div>
            <div className="col-lg-8 col-9">
              {isLoading ? (
                <ReactLoading
                  type="spinningBubbles"
                  color="#ffffff"
                  height={40}
                  width={40}
                  // className="justify-content-center text-center"
                />
              ) : (
                <div className="data-value">{value}</div>
              )}
              <div className="data-unit">Celcius</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
