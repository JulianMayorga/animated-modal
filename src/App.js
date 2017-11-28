import React, { Component } from "react";

const darkViolet = "#731ED2";
const mediumViolet = "#9646EC";
const lightViolet = "#AD85DC";
const lightGrey = "#DCDAE1";
const black = "#333";
const yellow = "#E9B308";
const white = "#FFF";
const beige = "#EAB49E";
const transparentWhite = "rgba(255,255,255,.9)";

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

const TripSummary = ({ onModalButtonClick }) => (
  <div
    style={{
      paddingLeft: 75,
      paddingTop: 40,
      paddingRight: 35,
      paddingBottom: 50
    }}
  >
    <a
      onClick={onModalButtonClick}
      style={{
        backgroundColor: darkViolet,
        width: 40,
        height: 40,
        position: "absolute",
        top: 40,
        left: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: `2.5px 2.5px 10px 1px ${lightViolet}`,
        cursor: "pointer"
      }}
    />
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

const Menu = ({ isOpen, onCloseButtonClick }) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: isOpen ? "initial" : "none"
    }}
  >
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        paddingTop: 40,
        paddingLeft: 50,
        gridGap: 25,
      }}
    >
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? "0s" : ".42s",
            zIndex: 1,
            color: white
          }}
        >
          Home
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".07s" : ".35s",
            zIndex: 1,
            color: white,
            whiteSpace: "nowrap"
          }}
        >
          My Trips
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".14s" : ".28s",
            zIndex: 1,
            color: white,
            whiteSpace: "nowrap"
          }}
        >
          Trip Summary
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".21s" : ".21s",
            zIndex: 1,
            color: white
          }}
        >
          Wallet
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".28s" : ".14s",
            zIndex: 1,
            color: white
          }}
        >
          Settings
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".35s" : ".07s",
            zIndex: 1,
            color: white
          }}
        >
          Feedback
        </a>
      </div>
      <div
        style={{
          zIndex: 1
        }}
      >
        <a
          style={{
            cursor: "pointer",
            opacity: isOpen ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: ".5s",
            transitionDelay: isOpen ? ".42s" : "0s",
            zIndex: 1,
            color: white
          }}
        >
          Logout
        </a>
      </div>
    </div>
    <a
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        top: 50,
        right: 50,
        backgroundColor: beige,
        zIndex: 1,
        transform: `translate(${isOpen ? "50%" : "90px"}, -50%)`,
        transitionProperty: "transform",
        transitionDuration: "1s",
        transitionTimingFunction: isOpen
          ? "cubic-bezier(0.5, 1, 0.3, 1.3)"
          : "cubic-bezier(0.5, -1, 0.3, 1.3)",
        borderRadius: "100%"
      }}
    />
    <a
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        bottom: 0,
        right: "50%",
        backgroundColor: darkViolet,
        zIndex: 1,
        transform: `translate(50%, ${isOpen ? "-50%" : "90px"})`,
        transitionProperty: "transform",
        transitionDuration: "1s",
        transitionTimingFunction: isOpen
          ? "cubic-bezier(0.5, 1, 0.3, 1.3)"
          : "cubic-bezier(0.5, -1, 0.3, 1.3)",
        borderRadius: "100%",
        display: "flex",
        cursor: "pointer"
      }}
      onClick={onCloseButtonClick}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="35" y1="35" x2="65" y2="65" strokeWidth="5" stroke={white} />
        <line x1="35" y1="65" x2="65" y2="35" strokeWidth="5" stroke={white} />
      </svg>
    </a>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: transparentWhite,
        width: "220vh",
        height: "220vh",
        transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: ".5s",
        transitionDelay: !isOpen && ".5s",
        borderRadius: "100%"
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "-20vh",
        marginTop: 60,
        left: 0,
        backgroundColor: mediumViolet,
        width: "calc(140vh + 20vh * 2)",
        height: "calc(140vh + 20vh * 2)",
        transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: ".5s",
        transitionDelay: !isOpen && ".5s",
        borderRadius: "100%"
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 60,
        left: 20,
        backgroundColor: darkViolet,
        width: "calc(70vh*2)",
        height: "calc(70vh*2)",
        transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: ".5s",
        transitionDelay: !isOpen && ".5s",
        borderRadius: "100%"
      }}
    />
  </div>
);

class App extends Component {
  state = { isMenuOpened: false };
  render() {
    return (
      <div
        style={{
          fontFamily: "sans-serif"
        }}
      >
        <TripSummary
          onModalButtonClick={() => this.setState({ isMenuOpened: true })}
        />
        <Menu
          isOpen={this.state.isMenuOpened}
          onCloseButtonClick={() => this.setState({ isMenuOpened: false })}
        />
      </div>
    );
  }
}

export default App;
