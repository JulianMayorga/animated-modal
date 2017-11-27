import React, { Component } from "react";

const darkViolet = "#731ED2";
const lightGrey = "#DCDAE1";

class App extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: 75,
          paddingTop: 40,
          paddingRight: 35,
          paddingBottom: 50,
          fontFamily: "sans-serif"
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginBottom: 20
          }}
        >
          Trip summary
        </h1>
        <div
          style={{
            display: "flex",
            height: 80,
            boxShadow: `5px 5px 10px ${lightGrey}`
          }}
        >
          <div style={{ backgroundColor: darkViolet, flexBasis: 80 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: 10,
              paddingLeft: 20
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: lightGrey,
                display: "flex",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              PAR-NYC
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              £ 4,000
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
