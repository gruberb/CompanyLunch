import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';
import SaveButton from './save-button';
import { Link } from 'react-router';

require('../../../stylesheets/components/navbar.scss');

class Navbar extends React.Component{
  constructor( props) {
    super( props );
    this._saveWorkspace = this._saveWorkspace.bind( this );
  }

  _saveWorkspace() {
    let workspace_id = this.props.workspace_id;
    if(workspace_id) {
      AppActions.updateWorkspace(workspace_id, AppStore.getRestaurants());
    } else {
      AppActions.createWorkspace(AppStore.getRestaurants());
    }
  }

  render() {
    return (
      <ul className="navigation">
        <Link to="/">CompanyLunch</Link>
        <SaveButton saveWorkspace={this._saveWorkspace} />
        <Link to="run">Run</Link>
        <Link to="impressum" className="infoNav">Imprint</Link>
        <a className="gitHubLink" href="https://github.com/gruberb/CompanyLunch" target="_blank">GitHub</a>
      </ul>
    );
  }
};

export default Navbar;
