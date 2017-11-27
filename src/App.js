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
            marginBottom: 20,
            fontWeight: 600
          }}
        >
          Trip summary
        </h1>
        <div
          style={{
            display: "flex",
            height: 80,
            boxShadow: `5px 5px 10px ${lightGrey}`,
            marginBottom: 30
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
            <span
              style={{
                fontSize: ".75rem",
                color: lightGrey,
                display: "flex",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              PAR-NYC
            </span>
            <span
              style={{
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              £ 4,000
            </span>
          </div>
        </div>
        <h2
          style={{
            fontSize: ".85rem",
            marginBottom: 20,
            fontWeight: 500
          }}
        >
          Flight details
        </h2>
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontSize: ".75rem",
              color: lightGrey
            }}
          >
            Price:{" "}
          </span>
          <span
            style={{
              fontSize: ".75rem",
              fontWeight: 600
            }}
          >
            £ 388
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: 20,
            justifyContent: "space-between"
          }}
        >
          <h3
            style={{
              fontSize: ".75rem",
              fontWeight: 500,
              margin: 0
            }}
          >
            Departure
          </h3>
          <a
            href=""
            style={{
              fontSize: ".65rem",
              color: darkViolet
            }}
          >
            Edit info
          </a>
        </div>
      </div>
    );
  }
}

export default App;
