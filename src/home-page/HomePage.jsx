import * as React from 'react';
import {Component} from "react";
import {Link} from 'react-router-dom';
import "./HomePageStyle.scss";
import {observer} from "mobx-react";
import autobind from "autobind-decorator";

@observer
@autobind
class HomePage extends Component {
    handleLogOut() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className={"home-page"}>
                <h1 className={"site-name"}>Order task</h1>
                <div className={"about-us"}>
                    <p>Some info...</p>
                </div>
                <p className={"button-order"}>
                    <Link className={"btn btn-info"} id={"create-project"} to={"/projectList"}>View Projects</Link>
                </p>
            </div>
        );
    }
}

export {HomePage};