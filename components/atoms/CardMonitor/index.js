import React from "react";
import { IcParameter } from "../../../public/Icon";

export default function CardMonitor() {
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
              <div className="data-value">5665</div>
              <div className="data-unit">Celcius</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
