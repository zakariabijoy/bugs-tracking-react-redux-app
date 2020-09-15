import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBugs, resolveBug, getUnresolvedBugs } from "./../store/bugs";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => this.props.resolveBug(bug.id)}>
              Resolved
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

//Bugs.contextType = StoreContext;
const mapStateToProps = (state) => ({
  bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

// container
// presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
