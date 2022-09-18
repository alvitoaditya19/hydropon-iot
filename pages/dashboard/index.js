import { useCallback, useEffect, useState } from "react";
import { CardMonitor, Header, Sidebar, SummaryCard } from "../../components";
import { IcLampAct, IcLampInact, IcParameter } from "../../public/Icon";
import { GetLamp, GetTemperature, SetLamp } from "../../services/dashboard";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import next from "next";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [lamp1, setDataLamp1] = useState(false);
  const [dataLamp2, setDataLamp2] = useState(false);

  const [temperature, setTemperature] = useState([]);

  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };
  var lampuStatus = lamp1;
  const WAIT_TIME = 5000;

  const submitLamp1 = async () => {
    const data = {
      lamp1: lampuStatus,
      // lamp2: dataLamp2 === "ON" ? "OFF" : "ON",
    };

    const dataValue = {
      lamp1: data.lamp1 === true ? "OFF" : "ON",
    };

    const response = await SetLamp(dataValue);

    if (response.error) {
      toast.error(response.message);
    } else {
      console.log("ya allah", response.data.lamp1);
      if (response.data.lamp1 == "ON") {
        setDataLamp1(true);
      } else {
        setDataLamp1(false);
      }
      lampuStatus = !lampuStatus;
    }
  };
  const getStatusLamp1 = useCallback(async () => {
    const data = await GetLamp();

    if (data.data.lamp1 == "ON") {
      setDataLamp1(true);
    } else {
      setDataLamp1(false);
    }
  }, [GetLamp]);

  const getValueTemperature = useCallback(async () => {
    setIsLoading(false);
    const data = await GetTemperature();
    // console.log(data.slice(-1)[0].celcius);

    setTemperature(data.slice(-1)[0].celcius);
  }, [GetTemperature]);

  useEffect(() => {
    getStatusLamp1();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // getValueTemperature()
    const id = setInterval(() => {

      getValueTemperature();
    }, WAIT_TIME);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="dashboard d-flex">
        <Sidebar
          toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar}
          activeMenu="overview"
        />
        {/* Main Content */}
        <div className="content">
          <Header toggleNavbar={toggleNavbar} isFilter={false} />
          <section className="p-3">
            <div className="header">
              <h3>Overview</h3>
              <p>Manage data for growth</p>
              <div className="main-content">
                <div className="row">
                  <SummaryCard title="User" total="50" />
                  <SummaryCard title="Vegetable" total="50" />
                  <SummaryCard title="Harvest" total="50" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-2xl fw-semibold">Data Monitoring</h1>
                  <p>Manage data for growth</p>
                  <div className="row">
                    <CardMonitor value={temperature} isLoading={isLoading} />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                  </div>
                </div>
                <div className="col-lg-6 control-feature">
                  <h1 className="text-2xl fw-semibold">Control Feature</h1>
                  <p>Manage data for growth</p>
                  <div className="row">
                    <button
                      className="col-lg-4 col-6 btn-control"
                      onClick={submitLamp1}
                      type="button"
                    >
                      {/* <div className="col-md-12 card-control"> */}
                      <div
                        className={
                          lamp1
                            ? "col-md-12 card-control"
                            : "col-md-12 card-control-off"
                        }
                      >
                        <div className="card-body text-center">
                          {lamp1 ? <IcLampInact /> : <IcLampAct />}

                          <h1>Lamp 1</h1>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
