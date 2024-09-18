import { React } from "react";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import Card from "../Card/Card";
import backlog from '../../icons_FEtask/Backlog.svg'
import inprogress from '../../icons_FEtask/in-progress.svg'
import done from '../../icons_FEtask/Done.svg'
import close from '../../icons_FEtask/Cancelled.svg'
import todo from '../../icons_FEtask/To-do.svg'
import urgent from '../../icons_FEtask/SVG - Urgent Priority colour.svg'
import low from '../../icons_FEtask/Img - Low Priority.svg';
import medium from '../../icons_FEtask/Img - Medium Priority.svg';
import high from '../../icons_FEtask/Img - High Priority.svg';
import nopriority from '../../icons_FEtask/No-priority.svg'
import add from '../../icons_FEtask/add.svg'
import cancel from '../../icons_FEtask/Cancelled.svg'

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);
  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{

                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                       <img src={backlog} alt="Loader" style={{ width: '13px', height: '13px' }} />                  
                      )
                        : element[index].title === "Todo" ? (
                          <img src={todo}
                            alt="todo" style={{ fontSize: "13px", color: "#ddeded" }}
                          />
                        ) : element[index].title === "In progress" ? (
                          <img src={inprogress} alt="In-progress" style={{ fontSize: "13px", color: "#f2d750" }}/>
                        ) : element[index].title === "Done" ? (
                          <img src={done} alt="Done" style={{ fontSize: "13px"}} />
                        ) : (
                          <img src={close} alt="Close" />
                        )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ? (
                        <img src={low} alt="Low Priority" style={{ width: '24px', height: '24px' }} />
                      ) : element[index].title === "Medium" ? (
                        <img src={medium} alt="Medium Priority" style={{ width: '24px', height: '24px' }} />
                      ) : element[index].title === "High" ? (
                        <img src={high} alt="High Priority" style={{ width: '24px', height: '24px' }} />
                      ): element[index].title === "Urgent" ? (
                        <img src={urgent} alt="urgent" />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : (
                    <img src={nopriority} alt="priority"/>
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <img src={add} />{" "}
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={done} alt="done" />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Done</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
              <img src={add} />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={cancel}style={{ color: "grey" }} />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Canceled</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img src={add} />{" "}
                <span style={{ letterSpacing: "2px"}}>...</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;
