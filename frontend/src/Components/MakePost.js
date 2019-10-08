import React, {Component} from 'react';
import { connect } from 'react-redux';

import PostForm from "../Forms/PostForm";

class MakePost extends Component {
  constructor(props) {
		super(props);
		this.state = {
			logged_in:  this.props.userDatas[0] ? true : false,
		};
  }

  render() {
      return (
        <div className="col-md-12 col-xs-12">
          <PostForm />
        </div>
      );
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(MakePost);
