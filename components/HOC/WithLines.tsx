import { CSSProperties } from "react";
const withLines = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithHeading: React.FC<any> = (props) => {
    const lineStyle: CSSProperties = {
      position: "absolute",
      top: "0",
      left: "10px",
      width: "0.5px",
      height: "100%",
      backgroundColor: "#f1eeee",
      zIndex: -1,
    };

    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div style={{ ...lineStyle, left: "8.5%" }}></div>
        <div style={{ ...lineStyle, left: "32%" }}></div>
        <div style={{ ...lineStyle, left: "52.3%" }}></div>
        <div style={{ ...lineStyle, left: "69%" }}></div>
        <div style={{ ...lineStyle, left: "83.3%" }}></div>

        <WrappedComponent {...props} />
      </div>
    );
  };

  return ComponentWithHeading;
};

export default withLines;
