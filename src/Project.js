import React, {Component} from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-item">
                <div class="project-title">{this.props.title}</div>
                <div class="project-desc">{this.props.description}</div>
                <div class="project-icons">
                    {this.props.icons.map((item) => (<i className={item} />))}
                    {/* <i className="fab fa-js" />
                    <i className="fab fa-react" />
                    <i className="fab fa-node" /> */}
                </div>
                <div class="project-links">
                    <a target="_blank" href={this.props.code}>Code</a>
                    <a target="_blank" href={this.props.demo}>Demo</a>
                </div>
            </div>
        );
    }
}

export default Project;