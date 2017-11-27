import React, { Component } from "react";

const darkViolet = "#731ED2";
const lightGrey = "#DCDAE1";
const black = "#333";
const yellow = "#E9B308";

const Dot = () => (
  <div
    style={{
      width: 2,
      height: 2,
      backgroundColor: lightGrey,
      borderRadius: 2,
      marginTop: 2
    }}
  />
);

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
        <div style={{ display: "flex", marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 10
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: lightGrey,
                marginBottom: 4
              }}
            />
            <Dot />
            <Dot />
          </div>
          <span
            style={{
              fontSize: ".75rem"
            }}
          >
            Monday, May 1
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `"a b c d" "a e f d" "a g g g"`,
            gridTemplateColumns: "10% 30% 30% 30%",
            gridTemplateRows: "30px 30px",
            marginBottom: 5
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 10,
              marginBottom: 10,
              marginRight: 10,
              gridArea: "a"
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: black,
                marginBottom: 4
              }}
            />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </div>
          <span
            style={{
              fontSize: ".75rem",
              whiteSpace: "nowrap",
              gridArea: "b",
              flex: 1
            }}
          >
            6:25 am
          </span>
          <span
            style={{
              fontSize: ".65rem",
              whiteSpace: "nowrap",
              gridArea: "c",
              color: lightGrey,
              flex: 1
            }}
          >
            Paris CDG
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gridArea: "d",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                backgroundColor: yellow,
                border: `solid 1px ${black}`,
                margin: 2
              }}
            />
            <span
              style={{
                fontSize: ".55rem",
                color: lightGrey
              }}
            >
              1 h 25 m
            </span>
          </div>
          <span
            style={{
              fontSize: ".75rem",
              whiteSpace: "nowrap",
              flex: 1,
              gridArea: "e"
            }}
          >
            7:50 am
          </span>
          <span
            style={{
              fontSize: ".65rem",
              whiteSpace: "nowrap",
              color: lightGrey,
              flex: 1,
              gridArea: "f"
            }}
          >
            Munich MUN
          </span>
          <div
            style={{
              display: "flex",
              gridArea: "g",
              fontSize: ".75rem",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <div
              style={{
                height: 1,
                backgroundColor: lightGrey,
                flex: 1
              }}
            />
            <span
              style={{
                backgroundColor: lightGrey,
                fontSize: ".55rem",
                padding: 2,
                borderRadius: 2
              }}
            >
              4 h 20 m
            </span>
            <div
              style={{
                height: 1,
                backgroundColor: lightGrey,
                flex: 1
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `"a b c d" "a e f d"`,
            gridTemplateColumns: "10% 30% 30% 30%",
            gridTemplateRows: "30px 30px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 10,
              marginBottom: 10,
              marginRight: 10,
              gridArea: "a"
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: black,
                marginBottom: 4
              }}
            />
          </div>
          <span
            style={{
              fontSize: ".75rem",
              whiteSpace: "nowrap",
              gridArea: "b",
              flex: 1
            }}
          >
            12:10 pm
          </span>
          <span
            style={{
              fontSize: ".65rem",
              whiteSpace: "nowrap",
              gridArea: "c",
              color: lightGrey,
              flex: 1
            }}
          >
            Munich MUN
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gridArea: "d",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                backgroundColor: yellow,
                border: `solid 1px ${black}`,
                margin: 2
              }}
            />
            <span
              style={{
                fontSize: ".55rem",
                color: lightGrey
              }}
            >
              1 h 25 m
            </span>
          </div>
          <span
            style={{
              fontSize: ".75rem",
              whiteSpace: "nowrap",
              flex: 1,
              gridArea: "e"
            }}
          >
            9:15 pm
          </span>
          <span
            style={{
              fontSize: ".65rem",
              whiteSpace: "nowrap",
              color: lightGrey,
              flex: 1,
              gridArea: "f"
            }}
          >
            New York NYC
          </span>
        </div>
      </div>
    );
  }
}

export default App;
