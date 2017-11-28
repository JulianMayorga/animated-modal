import React, { Component } from "react";
import { createElement } from "glamor/react";
/* @jsx createElement */

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
    css={{
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
    css={{
      paddingLeft: 75,
      paddingTop: 40,
      paddingRight: 35,
      paddingBottom: 50
    }}
  >
    <a
      onClick={onModalButtonClick}
      css={{
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
      css={{
        fontSize: "1rem",
        marginBottom: 20,
        fontWeight: 600
      }}
    >
      Trip summary
    </h1>
    <div
      css={{
        display: "flex",
        height: 80,
        boxShadow: `5px 5px 10px ${lightGrey}`,
        marginBottom: 30
      }}
    >
      <div css={{ backgroundColor: darkViolet, flexBasis: 80 }} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: 10,
          paddingLeft: 20
        }}
      >
        <span
          css={{
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
          css={{
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
      css={{
        fontSize: ".85rem",
        marginBottom: 20,
        fontWeight: 500
      }}
    >
      Flight details
    </h2>
    <div css={{ marginBottom: 20 }}>
      <span
        css={{
          fontSize: ".75rem",
          color: lightGrey
        }}
      >
        Price:{" "}
      </span>
      <span
        css={{
          fontSize: ".75rem",
          fontWeight: 600
        }}
      >
        £ 388
      </span>
    </div>
    <div
      css={{
        display: "flex",
        marginBottom: 20,
        justifyContent: "space-between"
      }}
    >
      <h3
        css={{
          fontSize: ".75rem",
          fontWeight: 500,
          margin: 0
        }}
      >
        Departure
      </h3>
      <a
        href=""
        css={{
          fontSize: ".65rem",
          color: darkViolet
        }}
      >
        Edit info
      </a>
    </div>
    <div css={{ display: "flex", marginBottom: 10 }}>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 10
        }}
      >
        <div
          css={{
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
        css={{
          fontSize: ".75rem"
        }}
      >
        Monday, May 1
      </span>
    </div>
    <div
      css={{
        display: "grid",
        gridTemplateAreas: `"a b c d" "a e f d" "a g g g"`,
        gridTemplateColumns: "10% 30% 30% 30%",
        gridTemplateRows: "30px 30px",
        marginBottom: 5
      }}
    >
      <div
        css={{
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
          css={{
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
        css={{
          fontSize: ".75rem",
          whiteSpace: "nowrap",
          gridArea: "b",
          flex: 1
        }}
      >
        6:25 am
      </span>
      <span
        css={{
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
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gridArea: "d",
          flexDirection: "column"
        }}
      >
        <div
          css={{
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: yellow,
            border: `solid 1px ${black}`,
            margin: 2
          }}
        />
        <span
          css={{
            fontSize: ".55rem",
            color: lightGrey
          }}
        >
          1 h 25 m
        </span>
      </div>
      <span
        css={{
          fontSize: ".75rem",
          whiteSpace: "nowrap",
          flex: 1,
          gridArea: "e"
        }}
      >
        7:50 am
      </span>
      <span
        css={{
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
        css={{
          display: "flex",
          gridArea: "g",
          fontSize: ".75rem",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <div
          css={{
            height: 1,
            backgroundColor: lightGrey,
            flex: 1
          }}
        />
        <span
          css={{
            backgroundColor: lightGrey,
            fontSize: ".55rem",
            padding: 2,
            borderRadius: 2
          }}
        >
          4 h 20 m
        </span>
        <div
          css={{
            height: 1,
            backgroundColor: lightGrey,
            flex: 1
          }}
        />
      </div>
    </div>
    <div
      css={{
        display: "grid",
        gridTemplateAreas: `"a b c d" "a e f d"`,
        gridTemplateColumns: "10% 30% 30% 30%",
        gridTemplateRows: "30px 30px"
      }}
    >
      <div
        css={{
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
          css={{
            width: 10,
            height: 10,
            backgroundColor: black,
            marginBottom: 4
          }}
        />
      </div>
      <span
        css={{
          fontSize: ".75rem",
          whiteSpace: "nowrap",
          gridArea: "b",
          flex: 1
        }}
      >
        12:10 pm
      </span>
      <span
        css={{
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
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gridArea: "d",
          flexDirection: "column"
        }}
      >
        <div
          css={{
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: yellow,
            border: `solid 1px ${black}`,
            margin: 2
          }}
        />
        <span
          css={{
            fontSize: ".55rem",
            color: lightGrey
          }}
        >
          1 h 25 m
        </span>
      </div>
      <span
        css={{
          fontSize: ".75rem",
          whiteSpace: "nowrap",
          flex: 1,
          gridArea: "e"
        }}
      >
        9:15 pm
      </span>
      <span
        css={{
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

const Menu = ({
  isOpen,
  onCloseButtonClick,
  menuItems,
  transitionDuration = 1
}) => (
  <div
    css={{
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
      css={{
        display: "grid",
        flexDirection: "column",
        paddingTop: 40,
        paddingLeft: 50,
        gridGap: 25,
      }}
    >
      {menuItems.map((menuItem, index) => {
        const duration = transitionDuration / 2;
        const transitionDelay = isOpen
          ? `${index * duration / menuItems.length}s`
          : `${duration -
              index * duration / menuItems.length +
              duration / menuItems.length}s`;
        return (
          <div
            css={{
              zIndex: 1,
              transitionProperty: "transform",
              transitionDuration: `${duration}s`,
              transitionDelay,
              transform: `translateY(${isOpen ? 0 : 20}px)`
            }}
            key={menuItem}
          >
            <a
              css={{
                cursor: "pointer",
                opacity: isOpen ? 1 : 0,
                transitionProperty: "opacity",
                transitionDuration: `${duration}s`,
                transitionDelay,
                zIndex: 1,
                color: white
              }}
            >
              {menuItem}
            </a>
          </div>
        );
      })}
    </div>
    <a
      css={{
        width: 40,
        height: 40,
        position: "absolute",
        top: 50,
        right: 50,
        backgroundColor: beige,
        zIndex: 1,
        transform: `translate(${isOpen ? "50%" : "90px"}, -50%)`,
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration}s`,
        transitionTimingFunction: isOpen
          ? "cubic-bezier(0.5, 1, 0.3, 1.3)"
          : "cubic-bezier(0.5, -1, 0.3, 1.3)",
        borderRadius: "100%"
      }}
    />
    <a
      css={{
        width: 40,
        height: 40,
        position: "absolute",
        bottom: 0,
        right: "50%",
        backgroundColor: darkViolet,
        zIndex: 1,
        transform: `translate(50%, ${isOpen ? "-50%" : "90px"})`,
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration}s`,
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
      css={{
        position: "absolute",
        willChange: "transform",
        top: 0,
        left: 0,
        backgroundColor: transparentWhite,
        width: "220vh",
        height: "220vh",
        transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration / 2}s`,
        transitionDelay: !isOpen && `${transitionDuration / 2}s`,
        borderRadius: "100%"
      }}
    />
    <div
      css={{
        position: "absolute",
        willChange: "transform",
        top: "-20vh",
        marginTop: 60,
        left: 0,
        backgroundColor: mediumViolet,
        width: "calc(140vh + 20vh * 2)",
        height: "calc(140vh + 20vh * 2)",
        transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration / 2}s`,
        transitionDelay: !isOpen && `${transitionDuration / 2}s`,
        borderRadius: "100%"
      }}
    />
    <div
      css={{
        position: "absolute",
        willChange: "transform",
        top: 60,
        left: 20,
        backgroundColor: darkViolet,
        width: "calc(70vh*2)",
          height: "calc(70vh*2)",
          transform: `translate(-50%,-50%) ${isOpen ? "scale(1)" : "scale(0)"}`,
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration / 2}s`,
        transitionDelay: !isOpen && `${transitionDuration / 2}s`,
        borderRadius: "100%"
      }}
    />
  </div>
);

const menuItems = [
  "Home",
  "My Trips",
  "Trip Summary",
  "Wallet",
  "Settings",
  "Feedback",
  "Logout"
];

class App extends Component {
  state = { isMenuOpened: false };
  render() {
    return (
      <div
        css={{
          fontFamily: "sans-serif"
        }}
      >
        <TripSummary
          onModalButtonClick={() => this.setState({ isMenuOpened: true })}
        />
        <Menu
          isOpen={this.state.isMenuOpened}
          menuItems={menuItems}
          onCloseButtonClick={() => this.setState({ isMenuOpened: false })}
          transitionDuration={.75}
        />
      </div>
    );
  }
}

export default App;
